package com.georgekirby.pokedex;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * The Pokédex on Android: one full-screen WebView showing the same pages as
 * the desktop app. Nothing is hosted anywhere:
 *
 *   https://appassets.androidplatform.net/...         the pages, packed in the APK
 *   https://appassets.androidplatform.net/images/...  your sprites, imported
 *                                                     from a zip into the phone
 *
 * That address never goes out to the internet; every request for it is
 * answered here. Progress is saved by the page itself (localStorage), inside
 * this app's private storage, so it survives updates.
 */
public class MainActivity extends Activity {

    static final String HOST = "appassets.androidplatform.net";
    static final String START = "https://" + HOST + "/Pokedex.dc.html";
    static final int PICK_FILE = 1, PICK_SPRITES = 2, SAVE_FILE = 3;
    static final Charset UTF8 = Charset.forName("UTF-8");

    WebView web;
    File imagesDir;
    ValueCallback<Uri[]> fileCallback;
    byte[] pendingSave;
    boolean askedForSprites;

    static final Map<String, String> TYPES = new HashMap<>();
    static {
        TYPES.put("html", "text/html"); TYPES.put("js", "text/javascript"); TYPES.put("mjs", "text/javascript");
        TYPES.put("css", "text/css"); TYPES.put("json", "application/json"); TYPES.put("webmanifest", "application/manifest+json");
        TYPES.put("png", "image/png"); TYPES.put("jpg", "image/jpeg"); TYPES.put("jpeg", "image/jpeg");
        TYPES.put("gif", "image/gif"); TYPES.put("webp", "image/webp"); TYPES.put("svg", "image/svg+xml");
        TYPES.put("ico", "image/x-icon"); TYPES.put("md", "text/markdown"); TYPES.put("txt", "text/plain");
        TYPES.put("woff2", "font/woff2"); TYPES.put("woff", "font/woff"); TYPES.put("mp3", "audio/mpeg");
        TYPES.put("ogg", "audio/ogg"); TYPES.put("wav", "audio/wav");
    }

    @Override
    protected void onCreate(Bundle saved) {
        super.onCreate(saved);
        imagesDir = new File(getFilesDir(), "images");
        imagesDir.mkdirs();

        web = new WebView(this);
        web.setBackgroundColor(0xFF161826);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setTextZoom(100);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);

        web.addJavascriptInterface(new Bridge(), "PokedexAndroid");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                return serve(req.getUrl());
            }
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (HOST.equals(u.getHost())) return false;
                openOutside(u);   // links to other sites open in the phone's browser
                return true;
            }
            @Override
            public void onPageFinished(WebView view, String url) {
                if (!askedForSprites && countImages() == 0) { askedForSprites = true; askForSprites(true); }
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            // <input type="file"> (Import backup, Compare with a friend …)
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = callback;
                Intent i = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                try { startActivityForResult(i, PICK_FILE); }
                catch (ActivityNotFoundException e) { fileCallback = null; return false; }
                return true;
            }
        });

        if (saved == null || web.restoreState(saved) == null) web.loadUrl(START);

        checkForUpdate();
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        // The page treats Escape as "close / go back", so the back button does the same.
        web.evaluateJavascript(
            "(function(){var o=document.querySelector('[role=dialog],details[open],#pk-quiz,#pk-wtf,#pk-hon');" +
            "document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));" +
            "return o?'1':'0';})()",
            value -> { if (!"\"1\"".equals(value)) moveTaskToBack(true); });
    }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); }

    @Override
    protected void onPause() { web.onPause(); super.onPause(); }

    // ---- Serving the app's own address --------------------------------------

    WebResourceResponse serve(Uri u) {
        if (!HOST.equals(u.getHost())) return null;   // anything else goes to the internet as normal
        String path = u.getPath() == null ? "" : u.getPath();
        while (path.startsWith("/")) path = path.substring(1);
        if (path.isEmpty()) path = "Pokedex.dc.html";
        if (path.contains("..")) return notFound();
        String mime = mimeFor(path);
        try {
            if (path.startsWith("images/")) {
                File f = new File(imagesDir, path.substring("images/".length()));
                if (!f.getCanonicalPath().startsWith(imagesDir.getCanonicalPath() + File.separator) || !f.isFile()) return notFound();
                return ok(mime, new FileInputStream(f));
            }
            InputStream in = getAssets().open("web/" + path);
            if (path.equals("Pokedex.dc.html")) {
                String html = new String(readAll(in), UTF8);
                // React comes bundled (no internet needed), and the page is told it's the phone app.
                html = html.replace("<script src=\"./support.js\"></script>",
                    "<script src=\"vendor/react.production.min.js\"></script>\n" +
                    "<script src=\"vendor/react-dom.production.min.js\"></script>\n" +
                    "<script>window.pokedexDesktop = true; window.pokedexPhone = true;" +
                    (BuildConfig.FRIENDS ? " window.pokedexFriends = true;" : "") + "</script>\n" +
                    "<script>" + DOWNLOAD_SHIM + "</script>\n" +
                    "<script src=\"./support.js\"></script>");
                in = new ByteArrayInputStream(html.getBytes(UTF8));
            }
            return ok(mime, in);
        } catch (Exception e) {
            return notFound();
        }
    }

    // Saving files (backups, Trainer Card pictures …): the page makes a
    // download link; on a phone that is handed to the "Save as" screen instead.
    static final String DOWNLOAD_SHIM =
        "(function(){" +
        "function send(a){var h=a.href||'',n=a.getAttribute('download');" +
        " if(n===null||!/^(blob:|data:)/.test(h))return false;" +
        " fetch(h).then(function(r){return r.blob();}).then(function(b){var fr=new FileReader();" +
        "  fr.onload=function(){var s=String(fr.result);PokedexAndroid.saveFile(n||'download',b.type||'application/octet-stream',s.slice(s.indexOf(',')+1));};" +
        "  fr.readAsDataURL(b);});" +
        " return true;}" +
        "var click=HTMLAnchorElement.prototype.click;" +
        "HTMLAnchorElement.prototype.click=function(){if(!send(this))return click.call(this);};" +
        "document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[download]');" +
        " if(a&&send(a)){e.preventDefault();e.stopPropagation();}},true);" +
        "})();";

    static String mimeFor(String path) {
        int dot = path.lastIndexOf('.');
        String ext = dot >= 0 ? path.substring(dot + 1).toLowerCase(Locale.ROOT) : "";
        String t = TYPES.get(ext);
        return t != null ? t : "application/octet-stream";
    }

    static WebResourceResponse ok(String mime, InputStream in) {
        Map<String, String> h = new HashMap<>();
        h.put("Cache-Control", "no-cache");
        h.put("Access-Control-Allow-Origin", "*");
        boolean text = mime.startsWith("text/") || mime.contains("json") || mime.contains("javascript");
        return new WebResourceResponse(mime, text ? "utf-8" : null, 200, "OK", h, in);
    }

    static WebResourceResponse notFound() {
        Map<String, String> h = new HashMap<>();
        h.put("Access-Control-Allow-Origin", "*");
        return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", h, new ByteArrayInputStream(new byte[0]));
    }

    static byte[] readAll(InputStream in) throws Exception {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[65536];
        int r;
        while ((r = in.read(buf)) > 0) out.write(buf, 0, r);
        in.close();
        return out.toByteArray();
    }

    // ---- Sprites --------------------------------------------------------------

    int countImages() { return countFiles(imagesDir); }

    static int countFiles(File dir) {
        File[] list = dir.listFiles();
        if (list == null) return 0;
        int n = 0;
        for (File f : list) n += f.isDirectory() ? countFiles(f) : 1;
        return n;
    }

    void askForSprites(boolean firstTime) {
        new AlertDialog.Builder(this)
            .setTitle(firstTime ? "Add your sprites" : "Import sprites")
            .setMessage((firstTime ? "This phone doesn't have any Pokémon pictures yet. " : "") +
                "Pick the sprites zip (Pokedex-phone-sprites.zip, made by \"Make Phone Sprites.bat\" on the PC). " +
                "It's copied into the app, so it works without internet. Importing again adds to or replaces what's there.")
            .setPositiveButton("Choose zip", (d, w) -> pickSprites())
            .setNegativeButton("Later", null)
            .show();
    }

    void pickSprites() {
        Intent i = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("*/*");
        i.putExtra(Intent.EXTRA_MIME_TYPES, new String[]{"application/zip", "application/x-zip-compressed", "application/octet-stream"});
        try { startActivityForResult(i, PICK_SPRITES); } catch (ActivityNotFoundException ignored) {}
    }

    void importZip(final Uri uri) {
        final AlertDialog progress = new AlertDialog.Builder(this)
            .setTitle("Adding sprites").setMessage("Starting…").setCancelable(false).create();
        progress.show();
        new Thread(() -> {
            int n = 0;
            String error = null;
            try (InputStream raw = getContentResolver().openInputStream(uri);
                 ZipInputStream zin = new ZipInputStream(new BufferedInputStream(raw, 1 << 16))) {
                String base = imagesDir.getCanonicalPath() + File.separator;
                byte[] buf = new byte[1 << 16];
                ZipEntry ze;
                while ((ze = zin.getNextEntry()) != null) {
                    String name = ze.getName().replace('\\', '/');
                    while (name.startsWith("./") || name.startsWith("/")) name = name.substring(name.indexOf('/') + 1);
                    if (name.startsWith("images/")) name = name.substring("images/".length());
                    if (ze.isDirectory() || name.isEmpty() || name.endsWith("/")) continue;
                    File out = new File(imagesDir, name);
                    if (!out.getCanonicalPath().startsWith(base)) continue;
                    File parent = out.getParentFile();
                    if (parent != null) parent.mkdirs();
                    try (OutputStream fo = new FileOutputStream(out)) {
                        int r;
                        while ((r = zin.read(buf)) > 0) fo.write(buf, 0, r);
                    }
                    n++;
                    if (n % 100 == 0) {
                        final int c = n;
                        runOnUiThread(() -> progress.setMessage(c + " pictures copied…"));
                    }
                }
            } catch (Exception e) {
                error = e.getMessage() != null ? e.getMessage() : e.toString();
            }
            final int total = n;
            final String err = error;
            runOnUiThread(() -> {
                progress.dismiss();
                new AlertDialog.Builder(this)
                    .setTitle(err == null && total > 0 ? "Sprites added" : "Couldn't use that file")
                    .setMessage(err == null && total > 0 ? total + " pictures are now on this phone."
                        : (err != null ? err : "That doesn't look like a sprites zip."))
                    .setPositiveButton("OK", null)
                    .show();
                web.reload();
            });
        }).start();
    }

    // ---- Files from and to the page --------------------------------------------

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        super.onActivityResult(req, res, data);
        Uri uri = (res == RESULT_OK && data != null) ? data.getData() : null;
        if (req == PICK_FILE) {
            if (fileCallback != null) fileCallback.onReceiveValue(uri != null ? new Uri[]{uri} : null);
            fileCallback = null;
        } else if (req == PICK_SPRITES) {
            if (uri != null) importZip(uri);
        } else if (req == SAVE_FILE) {
            final byte[] bytes = pendingSave;
            pendingSave = null;
            if (uri == null || bytes == null) return;
            try (OutputStream out = getContentResolver().openOutputStream(uri)) {
                if (out != null) out.write(bytes);
                toastInPage("Saved.");
            } catch (Exception e) {
                toastInPage("Couldn't save the file.");
            }
        }
    }

    void toastInPage(String msg) {
        android.widget.Toast.makeText(this, msg, android.widget.Toast.LENGTH_SHORT).show();
    }

    void openOutside(Uri u) {
        try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (ActivityNotFoundException ignored) {}
    }

    /** Called from the page as window.PokedexAndroid. */
    class Bridge {
        @JavascriptInterface public boolean isFriends() { return BuildConfig.FRIENDS; }
        @JavascriptInterface public String version() { return BuildConfig.VERSION_NAME; }
        @JavascriptInterface public int spriteCount() { return countImages(); }
        @JavascriptInterface public void importSprites() { runOnUiThread(() -> askForSprites(false)); }
        @JavascriptInterface public void openUrl(String url) { runOnUiThread(() -> openOutside(Uri.parse(url))); }
        @JavascriptInterface public void checkForUpdate() { MainActivity.this.checkForUpdate(); }
        @JavascriptInterface public void saveFile(String name, String mime, String base64) {
            final byte[] bytes = Base64.decode(base64, Base64.DEFAULT);
            runOnUiThread(() -> {
                pendingSave = bytes;
                Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType(mime == null || mime.isEmpty() ? "application/octet-stream" : mime);
                i.putExtra(Intent.EXTRA_TITLE, name);
                try { startActivityForResult(i, SAVE_FILE); } catch (ActivityNotFoundException e) { pendingSave = null; }
            });
        }
    }

    // ---- Updates -----------------------------------------------------------------
    // Looks at the GitHub repository's newest release. When it's newer than this
    // app, the page shows a note with a link to download the new APK.

    void checkForUpdate() {
        new Thread(() -> {
            try {
                URL url = new URL("https://api.github.com/repos/" + BuildConfig.REPO + "/releases/latest");
                HttpURLConnection c = (HttpURLConnection) url.openConnection();
                c.setConnectTimeout(8000);
                c.setReadTimeout(8000);
                c.setRequestProperty("Accept", "application/vnd.github+json");
                if (c.getResponseCode() != 200) return;
                JSONObject rel = new JSONObject(new String(readAll(c.getInputStream()), UTF8));
                String latest = rel.optString("tag_name", "").replaceFirst("^[vV]", "");
                if (latest.isEmpty() || compare(latest, BuildConfig.VERSION_NAME) <= 0) return;
                // The friends' APK is attached to the public release; the Professor's
                // own copy is on the private draft release, so send that to the list.
                final String page = BuildConfig.FRIENDS ? rel.optString("html_url", "")
                    : "https://github.com/" + BuildConfig.REPO + "/releases";
                final String js = "window.pkScreen && window.pkScreen.updateBanner({kind:'android',version:" +
                    JSONObject.quote(latest) + ",url:" + JSONObject.quote(page) + "})";
                runOnUiThread(() -> web.postDelayed(() -> web.evaluateJavascript(js, null), 4000));
            } catch (Exception ignored) {
                // No internet, or GitHub didn't answer: try again next time.
            }
        }).start();
    }

    static int compare(String a, String b) {
        String[] x = a.split("\\."), y = b.split("\\.");
        for (int i = 0; i < Math.max(x.length, y.length); i++) {
            int p = i < x.length ? toInt(x[i]) : 0, q = i < y.length ? toInt(y[i]) : 0;
            if (p != q) return p < q ? -1 : 1;
        }
        return 0;
    }

    static int toInt(String s) {
        try { return Integer.parseInt(s.replaceAll("[^0-9]", "")); } catch (Exception e) { return 0; }
    }
}
