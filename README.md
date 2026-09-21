# Meiling Wu — personal website

A local-first, static six-page website built from `WEBSITE_BUILD_SPEC.md`. No build step, package manager, remote fonts, or runtime dependencies are required.

## Preview

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Stop the server with Ctrl+C.

## Editing

- `styles.css`: shared colors, typography, spacing, responsive layouts.
- `site-data.js`: public songs, favorites, travel images/captions, contact links, current year, and résumé path. Leave missing values empty.
- `script.js`: compact accessible navigation and optional content rendering. Core page content and navigation also work without JavaScript.
- HTML files: page copy, shared header/footer, and metadata. Keep shared markup consistent across all six pages.
- `CONTENT_TODO.md`: missing content and approvals.

The design uses local Georgia and Helvetica Neue/Arial system fonts. Photo areas are neutral CSS development placeholders, not stock or generated photographs. Replace these with real images and meaningful alt text when supplied. Keep below-the-fold photos lazy-loaded.

The Resume page uses `assets/docs/MEILING_WU_RESUME.pdf` unchanged. Native HTML view/download links and a desktop PDF preview also work without JavaScript. On mobile, the embedded preview is hidden and the direct controls remain available. `resumePath` in `site-data.js` matches the file; preserve the exact filename when updating links.

The teaching philosophy is explicitly a draft. Project groups and About facts come only from the specification. Empty social/contact URLs do not render links. A social preview image is deferred until an approved image is supplied.

## Hosting compatibility

Root-level HTML, relative asset paths, and `.nojekyll` make the site suitable for GitHub Pages. No deployment workflow or Pages configuration has been added. Nothing should be committed, pushed, or published until the local preview is approved.

## Initial local review

Checked all six pages in headless Chrome at 1440, 1024, 768, 390, and 320 CSS pixels. No horizontal overflow, browser errors, failed HTTP resources, or broken internal file/fragment links were found. Checked one active navigation link and one main heading per page, mobile menu open/close behavior, Escape focus return, and navigation with JavaScript disabled. Visually reviewed full-page Home desktop/mobile and About desktop screenshots for shared typography and spacing. Reviewed semantic markup, focus styles, and reduced-motion handling.

Actual photos, contact destinations, and additional project detail remain content-dependent. The supplied résumé PDF is now connected to the Resume page.
