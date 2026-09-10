# ReinmanPro Service Plan — GitHub Pages

This package is ready to upload to a public GitHub repository. It includes the latest calculator, water animations, client proposal, print/PDF layout, Home Screen icons, and offline app files. There is no employee login.

## Publish for the first time

1. Extract `reinmanpro-github-pages.zip` on your computer.
2. Sign in at https://github.com and create a **Public** repository named `reinmanpro-service-plan`. Choose GitHub Free; no paid trial or add-ons are needed for this setup.
3. On the repository's Code tab, choose **Add file → Upload files**. In an empty repository, use the **uploading an existing file** link.
4. Upload the **contents** of the extracted folder, including the `icons` folder. Do not upload only the ZIP and do not put another folder around the files. `index.html`, `sw.js`, `pwa.js`, `pwa.css`, and `manifest.webmanifest` must be at the repository's top level. Include `.nojekyll` if your file picker shows it; this plain HTML package also works without it.
5. Select **Commit changes** to save the upload to the `main` branch.
6. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
7. Wait for the Pages deployment to finish. Use the website link shown in Settings → Pages. For a project repository, the address has this form: `https://YOUR-USERNAME.github.io/reinmanpro-service-plan/`. Replace YOUR-USERNAME with your actual GitHub username. If GitHub reports a different address, use the address it provides.
8. Open the live link in Safari with internet. Wait for the message: **Your app is ready on this device. You can now use it without internet.**

The main ReinmanPro website is not involved. This public site and its source include the calculator's rates, formulas, and operating assumptions. Plans entered in the browser are stored on that device; the app does not upload them to GitHub or sync them to other employees. Do not commit exported client PDFs or personal client details to the public repository.

## Add to an iPhone or iPad

1. Open the published website in **Safari**.
2. Tap **Share** (under More on some Safari layouts), then **Add to Home Screen**.
3. Enable **Open as Web App** if that option is shown, and tap **Add**.
4. Open **ReinmanPro** from the new Home Screen icon while connected to the internet, and let the app finish its initial download. Set up each device separately.
5. Before using it with a client, turn on airplane mode, fully close the app, and reopen it from the Home Screen. Check that calculations and the proposal still open.

If iOS clears website data, the app is removed/reinstalled, or an initial download is incomplete, reconnect and reopen the app. Home Screen apps may have separate local data from a Safari tab; use the installed app consistently. Plans do not automatically move from the earlier downloaded HTML file into the hosted app.

## Save a client PDF

Create the plan, open Client View, then tap **Save as PDF**. The app opens the system print sheet. On iPhone/iPad, expand the print preview with a two-finger pinch-out if needed, then use **Share → Save to Files**. The exact controls can vary by iOS version. Review the saved PDF once on your devices; its print layout excludes the calculator controls and internal cost breakdown.

## Update the app later

Upload the complete replacement package to the same repository and branch, preserving the folder structure. Always update `sw.js` alongside the changed app files. The build identifier in that file must change for a new version to be detected.

When an installed app is online, it checks for new versions. Once a new version has downloaded, the calculator offers **Update app** and **Later**. Tap Update app between meetings; it reloads the app and keeps the locally saved plan when browser storage is available. A waiting update can also activate automatically after all old app windows/tabs have closed. Offline devices keep using their downloaded version until they reconnect.

## File list

- `index.html` — calculator and embedded calculation model
- `manifest.webmanifest` — app name, icon and launch settings
- `sw.js` — versioned offline cache and update handling
- `pwa.js`, `pwa.css` — installation readiness and update controls
- `icons/` — Home Screen icons
- `.nojekyll` — plain static file publishing hint
- `README.md` — these instructions

This package uses relative paths so it works beneath a GitHub repository URL. No npm installation, database, Cloudflare account, custom domain, or build command is needed for publishing this package.

## References

- GitHub Pages setup: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Apple iPhone Home Screen web apps: https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios
- Apple iPad Home Screen web apps: https://support.apple.com/guide/ipad/open-as-web-app-ipad8f1f7a29/ipados
