# ReinmanPro Service Plan — v1.1.2 iPhone PDF Save Fix

PDF export update: iPhone and iPad now use the native file save/share menu when supported. Choose **Save to Files**, select a folder, then tap **Save**. Cancellation leaves the calculator open and allows another attempt. If the browser cannot open the native menu, a dialog provides Open PDF and Download PDF actions with save instructions. Desktop browsers keep the normal download flow. Status messages distinguish a download request from a confirmed filesystem save; the app cannot detect which destination was chosen in the native menu. The PDF content and pricing engine are unchanged.

Release: October 15, 2026. This release retains the approved premium calculator theme, 3D cards, and original banner's floating quarterly-calendar and looping checkbox animations. It removes duplicate top safe-area spacing in browser/file previews, constrains the native date field to its container, and adjusts phone/tablet layouts. Core controls initialize before optional motion effects, so an unsupported visual effect cannot prevent navigation. The loading screen keeps its 0–100% progress. The workbook model, pricing rules, initial/monthly payment calculations, discounts, consent and PDF generation remain unchanged. Existing hosted-app drafts use the same storage key. The v1.0 original package remains a separate baseline.

## Open the working app

On an iPhone or iPad, use the published GitHub Pages address in Safari or the installed Home Screen app. A downloaded HTML attachment may open in a Files/Quick Look preview where JavaScript controls cannot run. The calculator now displays an opening notice until initialization completes. The Plan date automatically fills when the app initializes. Do not use the file preview to test Continue, Calculate, or PDF controls.

This package is ready to upload to a public GitHub repository. It includes the latest calculator based on `10_03_2026 6Pm (1).xlsx`, with updated Service Pricing Rules; selectable months within Q1–Q4; the standard 25% initial-payment plan; a readable side-by-side No Initial Payment option; clear enrollment-payment timing; selected months in the Final Plan; and client-facing terms grouped directly beneath every selected service in the Plan Preview, Final Plan, and saved PDF. The saved PDF automatically continues the combined Services & Maintenance Schedule across pages without separating a service from its own terms. It also includes updated Customer Consent authorization and key terms, clickable Full Terms links, the premium quarterly-calendar loading animation, Home Screen icons, and offline app files. There is no employee login.

The Preview, Final Plan, and PDF show a highlighted **TOTAL DUE UPON ENROLLMENT**, calculated as the initial payment plus the first monthly payment (or just the first monthly payment for No Initial Payment). Schedule columns display selected months only, without YES labels or checkmarks. Service terms start directly underneath their matching service rows on the first plan page and continue with the schedule when more space is needed; there is no separate Selected Service Terms appendix.

The PDF uses the same pale-blue service row for every included service, consistent spacing, and up to three complete service-and-terms groups per plan page, including the first page. The customer consent is saved after the plan pages.

## Publish for the first time

1. Extract the supplied ReinmanPro GitHub update ZIP on your computer.
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

Create the plan, open the **Final Plan**, enter the Housecall Pro estimate number, and complete the customer authorization and signature. Tap **Save as PDF** or **Save PDF**. On iPhone/iPad, choose **Save to Files → select a folder → Save** in the native menu. If a fallback dialog appears, tap **Open PDF**, then **Share → Save to Files → Save** in the PDF viewer. On desktop, the browser starts a normal download or displays its save dialog. Opening a PDF preview alone does not confirm it was saved to Files. Send the saved PDF to the client manually. Review the saved PDF once on your devices; it includes the selected services with their terms, highlighted enrollment total, and completed customer consent, and excludes calculator controls and internal cost breakdown.

## Update the app later

1. Extract the newest ReinmanPro GitHub update ZIP.
2. Open the existing GitHub repository and choose **Add file → Upload files**.
3. Upload all extracted files and the `icons` folder to the repository root. Allow GitHub to replace files with matching names.
4. Commit the changes to the `main` branch, then wait for the Pages deployment to finish.
5. Reopen the installed app while connected to the internet. When **An app update is ready** appears, tap **Update app** between meetings.

Always update `sw.js` alongside the changed app files. Its build identifier must change for installed devices to detect the new version; the package supplied here already includes that change.

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
