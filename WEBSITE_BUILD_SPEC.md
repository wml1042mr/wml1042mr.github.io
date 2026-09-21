# Meiling Wu — Personal Website Build Specification

> Purpose: This file is the single source of truth for Codex to build and maintain my GitHub Pages personal website locally.
>
> **Important:** Do not invent facts, projects, teaching experience, course names, publications, links, or personal preferences. If information is missing, leave a clear placeholder in `CONTENT_TODO.md` and continue building the layout.
>
> **Do not push or publish anything until I explicitly approve the local preview.**

---

## 1. Project Goal

Build a polished, minimalist personal website for **Meiling Wu**.

The website should feel like a real personal homepage rather than a digital résumé template.

It should communicate two sides of me:

1. **Home:** personal, warm, calm, human — a light introduction to who I am outside of work.
2. **Professional pages:** rigorous, clear, restrained — research/projects, teaching, résumé, and contact.

The site should be appropriate for:
- academic job applications,
- industry research / decision science / optimization roles,
- professional networking,
- collaborators and students.

The website will be hosted with **GitHub Pages**.

---

## 2. Design Direction

### Overall style

Use a **minimalist editorial aesthetic** with:

- large amounts of whitespace,
- warm off-white or very light neutral background,
- charcoal / near-black text,
- one restrained accent color only,
- elegant serif headings,
- clean sans-serif body text,
- subtle borders,
- almost no heavy shadows,
- few cards,
- no bright gradients,
- no dashboard look,
- no “LinkedIn profile” look,
- no generic startup landing-page style,
- no excessive rounded boxes,
- no unnecessary animation.

The site should feel:
- thoughtful,
- modern,
- calm,
- intelligent,
- personal,
- refined,
- understated.

### Visual references

Think:
- an editorial portfolio,
- a well-designed personal journal,
- a modern academic homepage,
- a quiet museum/catalog aesthetic,
- high-end typography with lots of breathing room.

### Typography

Use a tasteful serif + sans-serif pairing.

Preferred direction:
- Headings: `Instrument Serif`, `Cormorant Garamond`, `Libre Baskerville`, or a similarly refined serif.
- Body / navigation: `Inter`, `Manrope`, `Helvetica Neue`, or a similarly clean sans-serif.

Use responsive `clamp()` sizing where appropriate.

### Color system

Start with something close to:

```css
--bg: #F8F7F3;
--surface: #FFFFFF;
--text: #1E2328;
--muted: #6E7378;
--line: #DDDCD6;
--accent: #496878;
```

The accent should be subtle and may be adjusted after preview.

### Spacing

Use generous spacing:
- maximum content width around `1180px`,
- comfortable side margins,
- large vertical section spacing,
- avoid crowding,
- desktop and mobile layouts should both feel intentional.

---

## 3. Technical Requirements

Use:

- semantic HTML5,
- modern CSS,
- minimal vanilla JavaScript only where useful,
- no React,
- no Next.js,
- no Vue,
- no package manager required for the final site,
- no backend,
- no database,
- no server-side language.

The site must work as a static GitHub Pages website.

### Requirements

- Fully responsive.
- Good desktop, tablet, and mobile layout.
- Accessible navigation.
- Keyboard-friendly.
- Visible focus states.
- Useful alt text for images.
- Proper page titles and meta descriptions.
- Open Graph metadata where appropriate.
- Fast loading.
- Optimized images.
- No broken links.
- No console errors.
- Use relative paths that work on GitHub Pages.
- Add a favicon placeholder.
- Add an empty `.nojekyll` file.
- Use a single shared stylesheet when practical.
- Use reusable layout/components through clean HTML structure and CSS classes rather than a framework.

---

## 4. Proposed Navigation

Desktop navigation:

```text
Meiling Wu                         Home   About   Projects   Teaching   Resume   Contact
```

Mobile:
- simple compact menu,
- no oversized full-screen animation,
- easy to close,
- accessible.

Keep the same navigation on all pages.

Pages:

```text
/
├── index.html
├── about.html
├── projects.html
├── teaching.html
├── resume.html
└── contact.html
```

Do **not** create a separate Research page at this stage.

Projects can contain research projects. A separate Research page can be added later when publications / working papers make it useful.

---

# 5. HOME PAGE

## Purpose

The Home page is **not a résumé**.

It should introduce me as a person.

The experience should be simple, personal, warm, and visual, with substantial whitespace.

A visitor should learn:
- who I am,
- a little about my personality,
- what I enjoy,
- where to go if they want to see my professional work.

Do not place:
- education lists,
- skill lists,
- research-interest boxes,
- detailed work experience,
- long project descriptions.

---

## 5.1 Hero

Suggested layout:

Left:
- small greeting,
- large name / short statement,
- 2–4 lines of introduction.

Right:
- one personal portrait or lifestyle photograph.

Example tone only — do not treat as final copy:

> Hello, I’m Meiling.
>
> I’m a PhD candidate at UC Irvine. I enjoy thoughtful problem solving, good music, beautiful places, and learning from the people and world around me.

Keep the writing natural and understated.

Below the introduction, use only a few text links or quiet buttons:

```text
About me →
Selected work →
Resume →
```

Do not use a large cluster of social buttons in the hero.

---

## 5.2 Personal Interests Section

Create three editorial-style columns or sections:

### Currently Listening

Minimal list, for example:

```text
01   [Song] — [Artist]
02   [Song] — [Artist]
03   [Song] — [Artist]
04   [Song] — [Artist]
```

Do not invent my songs.

If data is missing, place it in `CONTENT_TODO.md`, not as fake content on the published page.

Optional:
- Spotify / Apple Music link only if I later provide one.

### Watching / Favorites

A quiet list of films or TV series.

Examples of categories:
- Recently watched
- Films I return to
- Series I enjoyed

Do not invent titles.

### Travel Notes

Show 3–5 of my own travel photographs in a clean editorial grid.

Requirements:
- photographs should dominate,
- little or no card chrome,
- simple caption: city / country / year if supplied,
- no fake stock travel photos in the final version.

Until I provide images, use neutral local placeholders labeled clearly for development only.

---

## 5.3 Optional Personal Quote

Near the bottom, one short line may be used.

Example tone:

> A simple life, thoughtful work, and curiosity about the world.

This is only a design placeholder. Do not assume it is my final quote.

---

## 5.4 Home Footer

Very simple:

```text
Meiling Wu
GitHub    LinkedIn    Email
© [current year] Meiling Wu
```

No oversized footer.

---

# 6. ABOUT PAGE

## Purpose

The About page is the professional introduction.

It should answer:
- Who is Meiling professionally?
- What kinds of problems does she work on?
- What is her trajectory?

It should **not** become a second résumé.

---

## 6.1 Intro

Use:
- one strong portrait or restrained professional photo,
- a short bio of approximately 120–180 words.

Known high-level positioning:

- PhD candidate in Operations & Decision Technologies at UC Irvine.
- Work combines optimization, machine learning, and data-driven decision making.
- Interest in practical decision problems under uncertainty.
- Applications include education/admissions, supply chain/operations, and healthcare.

Do not add claims that are not supported by information I provide.

---

## 6.2 What I Work On

Use a simple text layout, not boxed cards.

Possible headings:

```text
Optimization
Machine Learning
Data-Driven Decision Making
```

Each should have only a short sentence.

Avoid long skill inventories.

---

## 6.3 Journey

Create a minimalist timeline or chronological list.

Use only verified information.

Known entries to structure around:

### University of California, Irvine
PhD — Operations & Decision Technologies

### Washington University in St. Louis
Master's — Supply Chain Management

### Boston University
Healthcare research experience

If exact dates or wording are not provided in the project files, place a TODO rather than guessing.

---

# 7. PROJECTS PAGE

## Purpose

This page is where the site demonstrates depth.

It should not simply copy résumé bullets.

Use a clean editorial project index followed by optional project detail pages.

Initial project groups:

1. Sequential Capacity Allocation / Admissions Optimization
2. Agricultural Supply Chain Optimization
3. Healthcare Resource Allocation
4. Genomic / Clinical Big Data Analytics

Do not invent results.

---

## 7.1 Projects Index

Use numbered entries:

```text
01
Sequential Capacity Allocation under Arrival Uncertainty
Short one-line description
Optimization · Dynamic Programming · Machine Learning
Explore project →
```

Then 02, 03, 04.

Use large typography and whitespace.

Avoid a grid of generic SaaS-style cards.

---

## 7.2 Project Detail Structure

If project detail pages are created, use this structure:

```text
Project title

Overview
Problem
Approach
Decision model / methodology
Selected results
Visuals
Tools
What I learned / contribution
```

For technical projects, allow:
- equations,
- diagrams,
- charts,
- workflow figures.

Keep them readable and visually consistent.

### Admissions / Sequential Capacity Allocation

Possible themes, subject to my verified content:
- uncertain applicant yield,
- sequential decisions,
- machine-learning forecasts,
- stochastic dynamic optimization,
- exact dynamic programming,
- approximate dynamic programming / reinforcement learning,
- enrollment / cohort-quality tradeoffs,
- decision adaptation as information arrives.

### Agricultural Supply Chain

Possible themes, subject to verified content:
- harvest / scheduling decisions,
- capacity constraints,
- forecasting,
- MILP,
- supply chain planning.

### Healthcare

Possible themes:
- post-COVID resource allocation,
- patient admission decisions,
- capacity / bed management,
- patient flow.

### Genomic / Clinical Analytics

Possible themes:
- longitudinal genomic / clinical data,
- feature analysis,
- PTSD-related outcomes,
- large-scale data analysis.

Again: do not fabricate metrics or details.

---

# 8. TEACHING PAGE

## Purpose

Create a separate, elegant Teaching page.

It should show that I can explain technical ideas clearly and work with students.

Do not assume or invent course names, teaching titles, semesters, evaluations, or enrollment counts.

---

## 8.1 Intro

Simple heading:

```text
Teaching
```

Short philosophy paragraph, approximately 80–140 words.

Tone:
- clear,
- student-centered,
- practical,
- rigorous,
- no inflated claims.

If I have not provided teaching philosophy text, create a **draft labeled for review**, not as a claimed fact.

---

## 8.2 Courses

For each verified course, use a simple row:

```text
Course Name
Role · Institution · Term

One-sentence description.

Topics:
Forecasting · Optimization · Statistics

[Course Materials]   [Selected Slides]
```

Only show material links that I approve for public sharing.

---

## 8.3 Teaching Materials

Optional sections:
- Selected lecture slides
- Tutorials
- Excel / SPSS / Python examples
- Optimization examples
- Student resources

Do not publish copyrighted course material, exams, answer keys, student names, grades, or private LMS content.

---

## 8.4 Teaching Feedback

Do not add a testimonial section unless I provide explicit, publishable quotations.

Never invent student quotes.

---

# 9. RESUME PAGE

## Principle

The Resume page should present my **actual PDF résumé**.

Do not recreate my entire résumé as HTML.

The PDF is the authoritative résumé.

---

## Layout

Very minimal:

```text
Resume

A concise overview of my education, research, and professional experience.

[View Resume]    [Download PDF]
```

Below:
- embedded PDF preview on desktop,
- direct open/download fallback on mobile.

File target:

```text
assets/docs/Meiling_Wu_Resume.pdf
```

Do not rename or overwrite my original résumé source file unless I explicitly approve.

Optionally leave room for a future:

```text
Academic CV
```

but do not show it until a real CV file is provided.

---

# 10. CONTACT PAGE

Keep this page intentionally simple.

Suggested structure:

```text
Let’s connect.

I’m happy to hear from people interested in research,
collaboration, teaching, or applied decision problems.

Email
LinkedIn
GitHub
```

Use only links I provide.

Do not display phone number or home address.

Avoid a server-side contact form because GitHub Pages is static.

A `mailto:` link is sufficient unless I later choose a form service.

---

# 11. Content Architecture

Create the following folders:

```text
/
├── index.html
├── about.html
├── projects.html
├── teaching.html
├── resume.html
├── contact.html
├── styles.css
├── script.js
├── site-data.js
├── .nojekyll
├── README.md
├── CONTENT_TODO.md
│
├── assets/
│   ├── images/
│   │   ├── home/
│   │   ├── about/
│   │   ├── travel/
│   │   └── projects/
│   ├── docs/
│   │   └── Meiling_Wu_Resume.pdf
│   └── icons/
```

### `site-data.js`

Place easy-to-change personal items here where practical, including:

- songs,
- movies / TV,
- travel captions,
- social URLs,
- contact email,
- optional current-year text.

This makes later updates easier.

Do not place private information in this file because the repository and website may be public.

---

# 12. Image Treatment

Images are important, but should not overwhelm the minimalist design.

Rules:
- Use my own images when provided.
- Crop thoughtfully.
- Preserve natural colors.
- Avoid aggressive filters.
- Avoid fake AI-generated photos of me.
- Use consistent aspect ratios within each small group.
- Convert very large photos to optimized WebP/JPEG copies while preserving originals outside the public site if possible.
- Lazy-load below-the-fold images.
- Add meaningful alt text.

---

# 13. Interaction and Motion

Motion should be nearly invisible.

Allowed:
- subtle fade / translate on first reveal,
- gentle image hover,
- understated underline transition for links.

Avoid:
- parallax,
- animated backgrounds,
- typing effects,
- bouncing elements,
- spinning icons,
- heavy page transitions,
- autoplay video,
- autoplay audio.

Respect `prefers-reduced-motion`.

---

# 14. GitHub Pages Requirements

This is a **user site**, so the repository should eventually be named:

```text
<GITHUB_USERNAME>.github.io
```

The website must work when published from:

```text
main / (root)
```

Ensure:
- `index.html` is at repository root,
- all internal links are relative,
- `.nojekyll` exists,
- no local absolute file paths remain,
- filenames are web-safe,
- capitalization in links exactly matches filenames.

---

# 15. SEO / Metadata

Add appropriate:

```html
<title>
<meta name="description">
<meta property="og:title">
<meta property="og:description">
<meta property="og:type">
<meta property="og:image">
<meta name="viewport">
```

Use:

```text
Meiling Wu
```

as the core site identity.

Do not over-optimize or keyword-stuff.

---

# 16. Accessibility

Before completion:

- Check heading hierarchy.
- Check keyboard navigation.
- Check focus states.
- Check image alt text.
- Check text contrast.
- Do not rely on color alone for meaning.
- Ensure buttons and links have clear labels.
- Ensure mobile menu is keyboard accessible.
- Avoid tiny body text.

---

# 17. Content That Must NOT Be Invented

Codex must not invent:

- publications,
- papers,
- employers,
- awards,
- teaching roles,
- courses,
- student evaluations,
- research results,
- numerical impact metrics,
- project collaborators,
- personal hobbies,
- songs,
- movies,
- destinations,
- quotes,
- social links,
- email addresses,
- dates.

If data is missing, add it to:

```text
CONTENT_TODO.md
```

Example:

```markdown
# Content needed from Meiling

- [ ] GitHub username
- [ ] Public email
- [ ] LinkedIn URL
- [ ] GitHub profile URL
- [ ] Home portrait
- [ ] About portrait
- [ ] 3–6 travel photos + captions
- [ ] 3–5 favorite/current songs
- [ ] 3–5 movies / TV series
- [ ] Current résumé PDF
- [ ] Teaching course names, roles, terms, and public materials
- [ ] Exact education dates
- [ ] Project images / charts approved for public release
```

---

# 18. Privacy Rules

This is a public website.

Do not publish:
- student information,
- admissions applicant data,
- confidential university material,
- unpublished private research notes,
- private datasets,
- home address,
- phone number,
- personal account credentials,
- API keys,
- private repository content,
- copyrighted teaching files not cleared for sharing.

If uncertain, leave the content out and add a TODO.

---

# 19. Build Workflow for Codex

Follow this sequence.

## Phase 1 — Inspect

1. Inspect the repository.
2. Read this specification completely.
3. Inspect available images / résumé / project files.
4. Create `CONTENT_TODO.md` for anything missing.
5. Do not publish.

## Phase 2 — Build

Create:
- all six pages,
- shared navigation,
- shared footer,
- responsive CSS,
- minimal JS,
- placeholder-safe content structure.

Build the Home page first and make its aesthetic the visual foundation for the entire site.

## Phase 3 — Local Quality Check

Run a local static server.

Check:
- desktop layout,
- narrow desktop,
- tablet,
- mobile,
- navigation,
- PDF links,
- image paths,
- console errors,
- broken links.

Then run a code review.

If Codex CLI supports it, use `/review` after implementation.

## Phase 4 — Preview

Start a local server and tell me exactly what URL to open.

Example:

```bash
python3 -m http.server 8000
```

Then I can open:

```text
http://localhost:8000
```

Do not push yet.

## Phase 5 — Revise

Wait for my feedback.

Make visual and content revisions until I approve.

## Phase 6 — Git

Only after I explicitly say the site is approved:

1. show `git status`,
2. show a concise summary of files being committed,
3. commit,
4. ask before the first push if authentication or repository destination is not already confirmed,
5. push to `main`.

Suggested first commit:

```text
Launch personal website
```

## Phase 7 — GitHub Pages Check

After push:
- verify the repository structure is suitable for GitHub Pages,
- tell me what I need to click in GitHub Settings → Pages,
- do not make assumptions about account-level settings.

---

# 20. First Codex Task

After this file is placed in the website project folder, my first instruction to Codex should be:

```text
Read WEBSITE_BUILD_SPEC.md completely and treat it as the source of truth for this website.

Build the first local version of the site according to the specification.

Important:
- Do not invent missing content.
- Put missing content in CONTENT_TODO.md.
- Use the Home page as the visual foundation.
- Keep the design minimalist and editorial with generous whitespace.
- Build all navigation and page shells, but prioritize polishing Home first.
- Use only static HTML, CSS, and minimal JavaScript.
- Make it GitHub Pages compatible.
- Do not push or publish anything.
- When finished, review the implementation, start a local server, and tell me the local preview URL.
```

---

# 21. Later Update Prompts

### Update personal interests

```text
Update the Home page using these new songs, movies, and travel photos.
Preserve the existing minimalist design and spacing.
Do not change other pages unless required.
Preview locally before committing.
```

### Update résumé

```text
Replace the public résumé PDF with the new file I provide.
Check the Resume page links and embedded preview.
Do not alter the résumé content itself.
```

### Add a project

```text
Add this project to the Projects page using the existing editorial project format.
Do not convert it into a résumé bullet list.
Use only the facts and files I provide.
```

### Add teaching material

```text
Add this teaching material to the Teaching page.
Confirm that no student information, grades, answer keys, or private LMS content are exposed.
Preserve the existing visual system.
```

---

# 22. Definition of Done

The initial site is done when:

- Home feels personal and minimalist.
- About is professional but not résumé-like.
- Projects demonstrates substantive work.
- Teaching has a clean structure ready for real course content.
- Resume uses the real PDF.
- Contact is simple.
- The website looks coherent across all pages.
- Mobile layout is polished.
- No content has been fabricated.
- No private/confidential information is exposed.
- All links work.
- GitHub Pages compatibility is verified.
- The site has been previewed locally and explicitly approved before publishing.
