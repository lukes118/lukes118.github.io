# Minimal portfolio

A responsive, dependency-free portfolio/CV website in slate, grey and white. All example copy is placeholder content. Nothing has been published.

## Preview

Open `index.html` in your browser, or run this from the project folder:

```sh
python3 -m http.server 8080
```

Then visit http://localhost:8080. Refresh after editing. No install or build is required.

## Make it yours

- **`content.js`**: name, introduction, skills, projects, experience, education, email and social links. Keep the quotation marks and commas. Use `\n` for a line break in the headline.
- **`styles.css`**: colours (variables at the top), spacing, typography, responsive and print styles.
- **`index.html`**: section layout, fixed headings and footer wording.
- **`assets/favicon.svg`**: browser tab icon.

Project cards open a detail dialog. Category filters are generated from your projects. Set a project's `url` to its full HTTPS address to enable “Visit project”. Empty links are hidden. The `visual` field accepts `workspace`, `system`, or `editorial`; these are illustrative CSS mockups, not screenshots of real projects. Replace the preview markup in `script.js` if you want actual images.

Add your email and social URLs in `content.js` before sharing. Set `showSampleNote` to `false` after replacing the example projects. Remove or add entries in the arrays to change the number of projects, roles, or qualifications.

“Print / save CV” opens the browser print dialog, with a simplified CV layout. Choose “Save as PDF” to export. Turn off browser print headers/footers if desired. Review the resulting pages after adding your real content.

## Deploy to GitHub Pages later

1. Create a public GitHub repository and upload these files, keeping `index.html` at the repository root. Include `assets/` and `.nojekyll`.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select your branch (usually `main`), and select **/ (root)**.
4. Save and wait for GitHub to show the published URL.

All local asset references are relative, so this works at either `username.github.io` or `username.github.io/repository-name/`. No backend, API keys, external fonts, analytics or build service are required. Future edits go live after you push/upload them to the selected branch.

## Personal content

The site now uses Luke’s CV content from `content_ideas/CV.tex`. Edit `content.js` to update research highlights, publications, teaching, education, and contact details. The portrait is copied to `assets/profile.jpeg`; the original remains untouched. The profile uses a CSS crop without modifying the photo.

The supplied CV is LaTeX source, not a downloadable PDF. The print button exports the website’s CV layout. The original LaTeX references an absent signature PDF, so compiling that exact document will require supplying or removing that reference.

For deployment, upload only `index.html`, `styles.css`, `content.js`, `script.js`, `.nojekyll`, and `assets/`. Keep `content_ideas/` as local source material; it is not needed by the website.
