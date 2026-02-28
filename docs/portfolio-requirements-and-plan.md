# Kathan Shah Portfolio Website — Requirements & Build Plan

## 1) Confirmed Profile Information

## Personal Profile
- **Name:** Kathan Shah
- **Professional Title:** Full-Stack Developer
- **Location:** Hyderabad, India
- **Contact Email:** kathan.builds@gmail.com
- **GitHub:** https://www.github.com/KathanShah6503
- **LinkedIn:** https://www.linkedin.com/in/kathanshah653

## Career Goals
- **Primary audience:** Recruiters (main), plus general personal brand visibility
- **Primary outcomes:** Job offers + stronger personal brand
- **Target roles:**
  1. Full-Stack Developer / Engineer
  2. Software Developer / Engineer
  3. Backend Developer / Engineer

## Content Requirements (from resume)
- **Summary:** 2+ years building production-grade fintech applications, frontend + backend ownership, API design, performance optimization, cloud deployments.
- **Education:** Dhirubhai Ambani University (formerly DA-IICT), B.Tech ICT, GPA 7.56/10.00
- **Experience:** Software Engineer, KFin Technologies Limited (Jan 2024 – Present)
- **Projects:** News Aggregator Website with Elasticsearch (ReactJS, ExpressJS, NodeJS)
- **Skills:** React, Redux, TypeScript, JavaScript, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, Jenkins, CI/CD, Git, SQL, Java, C++.
- **Resume:** Available and should be downloadable from site.

## Design Preferences
- **Style:** Bold
- **Theme:** Light + dark mix
- **Dark mode:** Required
- **Animation:** Subtle
- **Blog:** Not needed

## Product & Engineering Preferences
- **Stack:** Next.js + React
- **Editable content:** Required (owner-only easy updates)
- **Analytics:** Plausible
- **SEO:** Basic
- **Accessibility:** Basic WCAG
- **Multi-language:** Not required
- **Timeline:** 3 days

## Must-Have Pages
- About
- Work Experience
- Projects
- Resume

## Nice-to-Have
- Strong UI polish
- Easy content edit option for owner only

---

## 2) Proposed Professional Bio (ready to use)

> Full-Stack Developer with 2+ years of experience building production-grade fintech systems across frontend and backend. I specialize in React/TypeScript interfaces, scalable Node.js APIs, and performance-focused data workflows with MongoDB/PostgreSQL. I enjoy turning complex business requirements into clean, reliable software that ships fast and scales confidently.

---

## 3) Suggested Website References (bold + modern + recruiter-friendly)

1. **Brittany Chiang** — excellent structure and hierarchy for developer portfolios.
2. **leerob.io (Lee Robinson)** — strong personal-brand engineering portfolio style.
3. **rauno.me (Rauno Freiberg)** — modern, refined visual polish with subtle motion.

> Use these as inspiration for spacing, typography rhythm, case-study storytelling, and clean navigation—not for direct copying.

---

## 4) Information Still Needed Before Build Starts

To fully complete content, collect these final details:

1. **Phone number preference** (show publicly or keep hidden)
2. **Final resume PDF filename** to host in `/public`
3. **Project links** for News Aggregator (live URL and/or GitHub)
4. **Any additional projects** (2–3 total is ideal)
5. **Professional headshot** (optional but recommended)
6. **Preferred domain name** (if deciding soon)

---

## 5) CMS Options for Easy Editing (Pros & Cons)

### Option A: Markdown/MDX in repo (recommended for speed)
**How it works:** Project/work content lives in markdown files in the codebase.

**Pros**
- Fastest setup, zero external dependency
- Fully free
- Version-controlled edits via GitHub
- Works great with Next.js static pages

**Cons**
- Requires Git workflow for edits
- No visual editor by default

**Best for:** Developers comfortable editing content in GitHub.

### Option B: Notion as CMS
**How it works:** Content is authored in Notion databases/pages and fetched into Next.js.

**Pros**
- Very easy non-technical editing UX
- Good collaboration and organization
- Great for frequent content updates

**Cons**
- More integration complexity
- API rate/format limitations
- Needs robust mapping layer to keep design consistent

**Best for:** Frequent content changes with a friendly editor.

### Option C: Contentful
**How it works:** Structured content model hosted in a headless CMS.

**Pros**
- Strong structured content and media handling
- Role-based access and scalable content operations
- Excellent for future growth

**Cons**
- Longer setup and schema modeling time
- Pricing considerations at scale
- More moving parts than an MVP needs

**Best for:** Long-term expansion, teams, and strong CMS governance.

### CMS Recommendation for your 3-day timeline
- **Start with Markdown/MDX now** for fastest launch.
- Keep architecture CMS-ready so you can migrate to Notion/Contentful later.

---

## 6) Contact Form Backend Options (Detailed)

A contact form needs a backend destination to receive submissions.

### 1) Formspree (no backend build)
- Add form action endpoint, submissions go to your email/dashboard.
- **Pros:** Fastest, minimal code, ideal for MVP.
- **Cons:** 3rd-party limits/branding on free tiers.

### 2) Resend + Next.js API route (recommended balance)
- Build `/api/contact` in Next.js; send email through Resend.
- **Pros:** Professional, flexible templates, full control.
- **Cons:** Slightly more setup (env vars, domain/email validation).

### 3) Custom backend (Node/Express)
- Full standalone API for form handling + storage.
- **Pros:** Maximum control, can add CRM/DB workflows.
- **Cons:** Slowest setup; unnecessary for 3-day MVP.

### Contact Recommendation
- Use **Resend + Next.js API route** if you want ownership and flexibility.
- Use **Formspree** if you want the absolute quickest deployment.

---

## 7) 3-Day Delivery Plan (Execution Milestones)

## Day 1 — Foundation + Core UI
1. Initialize Next.js + TypeScript + Tailwind (or CSS modules)
2. Build global layout (navbar, footer, theme toggle)
3. Build Home/About sections with final summary + CTA
4. Set typography, spacing scale, and dark/light theme tokens

## Day 2 — Content Pages + Integrations
1. Build Experience timeline section from resume
2. Build Projects cards/case section
3. Add Resume page + downloadable PDF
4. Integrate contact form backend (Resend or Formspree)
5. Add Plausible analytics script

## Day 3 — Polish + QA + Launch
1. Add subtle animations (hover, entrance transitions)
2. SEO basics: title, description, OG tags, sitemap, robots.txt
3. Accessibility checks: semantic landmarks, contrast, keyboard focus
4. Responsive QA (mobile/tablet/desktop)
5. Deploy (Vercel preferred for Next.js)

---

## 8) Technical Architecture (MVP)

## Pages
- `/` Home (hero + summary + CTA)
- `/about`
- `/experience`
- `/projects`
- `/resume`
- `/contact`

## Component Modules
- `Navbar`, `Footer`, `ThemeToggle`
- `SectionHeading`
- `ExperienceItem`
- `ProjectCard`
- `SkillTagGroup`
- `ContactForm`

## Data Strategy
- Store content in `/content/*.mdx` or `/data/*.ts`
- Keep all resume-derived data centralized and typed
- Add `site.config.ts` for links, metadata, and theme defaults

---

## 9) Definition of Done (MVP Acceptance)

- All must-have pages implemented and linked
- Mobile responsive at common breakpoints
- Dark mode toggle persists across sessions
- Resume downloadable and visible from nav + CTA
- Contact form submission confirmed working
- Plausible analytics firing on page load
- Lighthouse-style baseline: no major accessibility/SEO issues

---

## 10) Immediate Next Action

Start implementation with **Next.js + TypeScript + Tailwind + MDX content**, and wire **Resend** as the contact pipeline unless speed priority requires Formspree.
