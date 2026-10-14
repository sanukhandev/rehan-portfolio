# Rehan Portfolio — Design & Frontend Agent Instructions

> **Status:** Design-system and layout specification only. Final portfolio copy, projects, biography, links, and photography will be provided later.
>
> **Project:** Rehan Portfolio — `https://github.com/sanukhandev/rehan-portfolio`
>
> **Visual inspiration:** `https://minimal-nextjs-portfolio-website.vercel.app/`
>
> **Primary constraint:** Reinterpret the reference's visual *principles*. Do not duplicate its source code, graphics, copy, branding, or exact component arrangement.

## 1. Agent mission

Build Rehan's portfolio as a **premium, contemporary, editorial portfolio for a visual creative/designer**, with the calm confidence of a well-art-directed agency website. Prioritize layout, typography, generous whitespace, visual hierarchy, project presentation, interaction design, responsiveness, and overall polish.

**This phase is design-first, content-later.** Build the page structures, component interfaces, styling, interactions, and replaceable imagery slots without inventing Rehan's biography, credentials, clients, work history, results, project details, awards, testimonials, or contact information.

Design should feel purpose-built, not like the old site with a new color palette or a generic SaaS landing page. Major changes to **composition and layout** are expected where a redesign is requested.

### Non-negotiables

1. Read this file **before** making any implementation changes, and use it as the design acceptance contract.
2. Inspect the repository's existing routes, components, styling, scripts, assets, and dependencies before planning or editing. Reuse the established stack; do not replace the architecture merely to imitate the reference.
3. When existing real content is present, **preserve its meaning and exact facts**; do not rewrite or delete it as part of design work. Where content has not been provided, use clearly identifiable placeholders or optional fields.
4. Keep content independent from UI composition; future real data should be inserted without rewriting layouts.
5. Keep existing Rehan-owned illustrations, avatar assets, and relevant images when available. Never replace them silently. Use neutral placeholders only where the final asset is missing.
6. Do not deploy unrelated features, mock integrations, fake customer metrics, or fabricated design projects.
7. Treat the reference as an **inspiration, not a pixel-perfect clone**.

## 2. What to learn from the reference

Reference site characteristics to adapt:

- **Typography as the hero:** oversized, bold, crisp sans-serif headings with intentional line breaks and generous negative space.
- **Editorial composition:** a clear headline, supporting information, one or two actions, and a large visual composition without unnecessary containers.
- **Minimal color story:** very light canvas, near-black text, muted supporting text, high-contrast actions, sparse accent usage.
- **Distinctive personality:** expressive illustration or profile artwork as a featured visual; a recognisable circular or floating contact motif.
- **Simple top navigation:** lightweight logo/monogram, a short group of primary destinations, and restrained social/contact affordances.
- **Purposeful motion:** animated entries, subtle hover feedback, page transition choreography, and microinteractions rather than continuous spectacle.
- **Interior-page variety:** About feels editorial, Work feels image-forward, Writing/Insights feels typographic and list-based.

**Rehan-specific interpretation:** The site represents a creative professional, so *project imagery, art direction, design process, and visual outcomes* must take priority over developer-themed icons, code showcases, badges, or skill meters.

## 3. Art direction

### Desired perception

**Premium / confident / minimal / visual / contemporary / memorable / approachable.**

The work should feel like a design studio portfolio: large visuals, well-proportioned type, deliberate grids, refined motion, strong contrast, and plenty of breathing room.

### Avoid

- Generic three-column SaaS feature-card layouts on every page.
- Large gradients, neon glows, glassmorphism, unnecessary blobs, or decorative particle fields.
- Random background textures, ornaments, shadows, or animations that compete with the portfolio work.
- A hero made of the same legacy blocks merely recolored.
- Tiny typography, cramped mobile navigation, overly long text measures, or card-heavy compositions.
- Auto-rotating carousels, scroll-jacking, long preloader sequences, or cursor effects that interfere with interaction.
- Copying the reference site's identity, “CodeBucks” assets, headlines, or visual artwork.

## 4. Design tokens — starting direction

Implement tokens centrally in the existing theme/global styles, adapting names to the repository's CSS/Tailwind conventions. These are **proposed design defaults**, not verified color values from the reference.

| Token | Default | Purpose |
| --- | --- | --- |
| `--color-bg` | `#F8F8F6` | Warm near-white page canvas |
| `--color-surface` | `#FFFFFF` | Light image captions / select surfaces |
| `--color-ink` | `#171717` | Headings, strong copy, borders |
| `--color-muted` | `#656565` | Metadata, descriptions, secondary text |
| `--color-line` | `#DEDEDA` | Hairline dividers |
| `--color-accent` | `#D04C38` | **Optional** carefully used editorial accent |
| `--color-ink-inverse` | `#FFFFFF` | Text on dark action surfaces |
| `--radius-sm` | `6px` | Controls, small objects |
| `--radius-md` | `12px` | Select image frames only |
| `--radius-pill` | `999px` | Floating contact button / tags |
| `--container-max` | `1440px` | Maximum content width |

A monochrome-first experience is preferred. The accent must remain secondary and adjustable from a single token; avoid introducing multiple competing accent colors. Dark mode is optional, not an excuse to weaken the light-theme design. If enabled, ensure **every** surface and interaction is accounted for.

### Typography

- Use **one strong geometric / neo-grotesk sans family** consistently. Prefer `Manrope` or `Space Grotesk` for headings paired with `Inter` for utility text **only when the combination demonstrably improves hierarchy**; otherwise use one family with variable weights.
- Respect already approved brand fonts if supplied later. Use `next/font` or locally hosted fonts supported by the current codebase; provide robust fallbacks and avoid unsupported Google-font variants.
- H1: `clamp(3.25rem, 7.5vw, 8rem)` with tight line-height (about `0.95–1.05`) and intentional tracking. Adjust for words and narrow screens.
- H2: `clamp(2.5rem, 5vw, 5rem)`; section labels `0.75–0.875rem` with restrained tracking.
- Body: `1rem–1.125rem`, line-height around `1.55–1.7`, readable text measures (`55–70ch` for long copy).
- Use type scale, whitespace, and alignment for hierarchy — not arbitrary font-weight changes in every paragraph.
- Avoid forcing editorial headings into fixed-height boxes; prevent clipping when copy changes.

### Spacing and geometry

- Use a consistent 4/8px spacing rhythm; avoid one-off values unless composition calls for them.
- Main content gutters: **mobile 20–24px**, **tablet 32–48px**, **desktop 64–96px**, never compromising narrow-screen width.
- Section rhythm: approximately **72–112px mobile** and **120–200px desktop**, tuned to content density.
- Use a **12-column desktop grid**, with deliberate asymmetric spans where beneficial; switch to 4 or 6 conceptual columns for smaller breakpoints.
- Borders should be subtle hairlines; default to no drop shadows.

## 5. Site architecture and page treatments

Match the project's existing routing convention. Design page layouts below as a flexible structure, not a requirement to manufacture content. Routes that have no real content may show tasteful states or remain unlinked until populated.

### 5.1 Shared shell and navigation

- Place the Rehan wordmark/monogram at the left with an easy link to home.
- Keep navigation short: **Home / Work / About / Journal** (actual names and routes remain configurable).
- Use minimal text links with a refined active indication and visible hover/focus states.
- Desktop navigation should feel spacious, clean, and aligned to the main grid.
- On mobile use an accessible menu button with an uncluttered full-height or compact overlay/panel. Restore focus and scroll behavior correctly on close.
- Header may become subtly more solid after scroll; avoid sudden jumps or sticky layout shifts.
- Include a discreet high-contrast contact action if a valid link is available.

### 5.2 Home: editorial hero

**Goal:** Immediately communicate the designer's creative identity through scale, composition, and image direction rather than blocks of explanatory text.

- Large, asymmetric hero layout: headline as the primary anchor; profile/illustrative visual balancing the composition.
- Desktop starting composition: about **55–60% typographic area** and **40–45% visual area**. Tune visually instead of hard-coding an exact 50/50 split.
- Keep a small eyebrow/label, a large replaceable headline, an optional short supporting sentence, and no more than two primary actions.
- Place one **large, high-quality artwork slot** for a portrait, creative self-portrait, stylized editorial image, or avatar. Respect transparency and subject cropping.
- Reserve space to prevent layout shifts. Prefer `object-fit: contain` for transparent avatar illustrations; use `cover` only for image types intended to be cropped.
- Integrate a **floating circular “Let's Talk” / contact CTA** as a distinct brand motif, inspired by the reference, without tracing its exact lettering or treatment. If no contact route/link exists yet, show a non-interactive visual placeholder or omit it rather than presenting a dead button.
- Use a small scroll cue or section index if it materially improves orientation.
- Avoid generic pill badges, irrelevant technology logos, excessive cards, or overloaded above-the-fold content.
- Target excellent composition at **1440×900**, **1280×800**, **768×1024**, and **390×844**.

### 5.3 Selected Work / Projects

- Make visuals the first-class content: **large project covers**, ample margins, clear titles and restrained metadata.
- Start with a strong featured project area; then use an **asymmetric two-column editorial grid** on desktop, with occasional full-bleed or wide-span work to create rhythm.
- Never repeat identical cards endlessly. Alternate proportions such as **16:10**, **4:5**, and **3:2** when actual images justify it.
- A project tile should support: image, title, discipline/category, year (optional), description (optional), and destination (optional). Do **not** fabricate any of these values.
- Use subtle media zoom (`~1.02–1.05`) or image reveal and a minimal directional affordance on hover. Don't obscure project imagery with heavy overlays.
- On mobile use one clean column, preserve readable metadata and adequate image size.
- Provide a polished empty/unpublished state while projects await real content, using labeled **visual placeholders** instead of pretend case studies.

### 5.4 About

- Open with an oversized editorial statement/title, not a generic centered card.
- Pair a portrait/illustration region with a considered text column; let the typography and proportions carry the design.
- Reserve configurable sections for **Biography**, **Capabilities / Services**, **Experience**, and **Process**. Render only the sections with supplied data or an explicitly requested placeholder mode.
- Favor service labels, small typographic lists, or grouped descriptions instead of percentages, radial charts, or unsupported metrics.
- If experience data is eventually supplied, an understated vertical timeline with hairline rules is appropriate.
- Use visual breathing room and occasional contrasting full-width panels sparingly.

### 5.5 Journal / Articles (optional until content is provided)

- Reference-inspired typographic article listing: substantial titles, supporting metadata, subtle dividing lines, and a clear reading order.
- Featured content can use a larger visual/editorial block when real imagery exists; remaining items can use lean list rows.
- Article cards must not display invented publishing dates, reading times, or external links.
- Build a reusable empty state now if this route is part of the current architecture; otherwise defer it.

### 5.6 Contact and footer

- Finish with a visually strong but simple CTA section and an oversized, replaceable closing headline.
- Keep contact mechanisms real: links must point to valid URLs, mailto addresses, or existing routes, not `href="#"`.
- Footer includes optional social links, navigation, and copyright/attribution supplied via config. Never invent social profiles.
- Repeat the editorial graphic language from the hero, rather than introducing a completely different footer style.

## 6. Interaction and motion language

The reference uses movement to support personality. Rehan's version should have **controlled, high-quality motion**, never performative motion for its own sake.

| Element | Motion guideline |
| --- | --- |
| Initial hero heading | Gentle staggered line/word reveal, roughly `500–850ms` total |
| Supporting text and actions | Short fade + `12–24px` translate, offset from heading reveal |
| Hero artwork | Smooth fade/translate/scale entrance; no infinite bobbing |
| Section headings | Reveal once on scroll using intersection-based triggers |
| Project imagery | Very light reveal, hover zoom, optional arrow movement |
| Navigation | Quick underline / opacity transition around `150–250ms` |
| Circular contact CTA | Subtle rotation or orbit **only if readable, performant, and reduced-motion safe** |
| Route changes | Optional restrained fade; preserve navigation semantics and avoid delays |

- Use Framer Motion / Motion **only if already present or justified**; prefer native CSS for simple transitions.
- Prefer opacity and transform for animation; don't animate layout dimensions when avoidable.
- Provide full `prefers-reduced-motion: reduce` support, including nonmoving equivalents and immediate reveal states.
- Do not animate every item in long lists, attach expensive scroll listeners, or create background animation loops.
- Ensure no flash of invisible text when JavaScript is delayed/disabled.
- Avoid mouse-following interactions that break touch devices or keyboard navigation.

## 7. Imagery and placeholders

Content is still pending. Establish a stable, editable **asset-slot system** now:

- Hero portrait/illustration: `heroPortrait` (supports transparent AVIF/WebP/PNG).
- About portrait/image: `aboutPortrait`.
- Work thumbnail: `coverImage` plus meaningful `alt` when supplied.
- Optional article cover: `articleImage`.

Use a reusable `MediaFrame` / placeholder component with predictable intrinsic aspect ratio. Default placeholder aesthetic: neutral monochrome or softly warm surface, small label such as **“Project image — pending”**, and fine border; do not present fabricated artwork as completed work. Existing user-provided imagery takes precedence over generated placeholder art.

For each slot, document suggested dimensions: hero portrait ~`1200×1500` or transparent, project landscape ~`1600×1000`, project portrait ~`1200×1500`, about portrait ~`1200×1500`. Use `next/image` when supported by the repo and prioritize actual above-the-fold imagery appropriately.

Do not pull unlicensed photographs, reuse the reference's avatar, or hotlink unstable third-party images in production.

## 8. Content contract (content will be provided later)

Separate data from presentation. Follow any current data architecture; otherwise propose a small, type-safe, centralized content module with optional fields. Suggested shape **for illustration, not mandatory file paths**:

```ts
type PortfolioContent = {
  brand: { name: string; logoSrc?: string };
  navigation: Array<{ label: string; href: string }>;
  hero: {
    eyebrow?: string;
    headline?: string;
    description?: string;
    portraitSrc?: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
  };
  about?: {
    heading?: string;
    biography?: string[];
    portraitSrc?: string;
    capabilities?: string[];
  };
  projects?: Array<{
    id: string;
    title?: string;
    category?: string;
    year?: string;
    description?: string;
    coverImage?: string;
    imageAlt?: string;
    href?: string;
    featured?: boolean;
    published?: boolean;
  }>;
  articles?: Array<{
    id: string;
    title?: string;
    date?: string;
    summary?: string;
    href?: string;
    coverImage?: string;
    published?: boolean;
  }>;
  contact?: { email?: string; links?: Array<{ label: string; href: string }> };
};
```

- The design must tolerate both **zero entries and long real-world titles**.
- Unpublished data must not appear as fabricated finished work.
- In a placeholder preview, make pending sections visibly illustrative and avoid indexing fake content.
- Real editorial text, image captions, numbers, brands, links, and project descriptions may be added only when provided or specifically approved.
- Build real metadata/SEO from supplied content once available; don't use invented credentials or keyword stuffing in titles or OG images.

## 9. Implementation approach

1. **Audit before coding:** Read existing instructions, inspect app structure, routes, assets, lint/build scripts, existing colors and fonts, and current layouts. Check that the appropriate `dev` branch exists.
2. **Plan changes around the design system:** identify reusable primitives such as `Container`, `SectionHeading`, `Reveal`, `MediaFrame`, `ProjectTile`, `SiteHeader`, `SiteFooter`, and `ContactOrbit`.
3. **Establish typography, tokens, and grid** before styling individual pages. The first milestone is a visibly stronger composition — not color swaps.
4. **Build mobile-first** and refine tablet / desktop layouts deliberately.
5. **Use actual repo conventions:** do not upgrade Next.js/React, change the package manager, add a UI framework, or install animation dependencies without a clear necessity.
6. **Keep client-side JS small.** Static content/layout should remain server-rendered where appropriate; client components are for actual interactions.
7. **Maintain semantic HTML** (`header`, `nav`, `main`, `section`, `article`, `footer`) and logical heading hierarchy.
8. **No broken affordances:** a control must perform the promised action. Do not use decorative buttons with dead click handlers.
9. **Avoid regression:** preserve actual routes, navigation, images, and content while redesigning styling and layout.

## 10. Responsive and accessibility contract

- Test widths: **320, 375/390, 430, 768, 1024, 1280, and 1440px**. Also inspect at 200% zoom where feasible.
- Never allow horizontal page overflow or clipped hero typography.
- Mobile hero uses a purposeful stacked composition; do **not** merely shrink desktop headings and force the artwork offscreen.
- Touch targets should generally be at least **44×44px**.
- All interactive elements support keyboard focus; focus rings are visible against both dark and light surfaces.
- Accessible menu state is announced; focus is managed and escape closes menus/dialogs.
- Body text contrast meets **WCAG AA** (4.5:1 typical text, 3:1 large text and essential visual UI).
- Image alt text describes meaningful work; decorative visual treatment uses empty alt / appropriate hiding.
- Maintain predictable reading order and skip-link navigation.
- Reduced-motion preferences override entrances, rotations, and scroll effects.
- Respect screen readers, mobile safe areas, and logical DOM ordering.

## 11. Performance and quality gates

- Aim for excellent Lighthouse outcomes **without claiming a score that has not been measured**.
- Use responsive image sizes, explicit aspect ratios, optimized formats, and lazy-load imagery outside the initial viewport.
- Minimize layout shift from fonts, headers, floating UI, and image placeholders.
- Prefer CSS to runtime-heavy animation for small interactions.
- Limit font weights and avoid oversized animation libraries or redundant packages.
- Verify link destinations, dark/light contrast if applicable, keyboard navigation, and no browser-console or runtime errors.
- Run the project's **actual** lint and production-build commands before **every commit**, and TypeScript/type-check if configured. Do not report checks as passed without running them.
- After any design iteration inspect actual rendered pages in desktop and mobile view, preferably with screenshots and a visual comparison against these art-direction goals.

## 12. Git, review, and Vercel workflow

Repository: `https://github.com/sanukhandev/rehan-portfolio`

- **Development baseline:** `dev`. Verify the branch is present and current before working; if absent, report the blocker rather than inventing repository state.
- Work on a descriptive feature branch from `dev` unless explicitly instructed otherwise.
- Do not push directly to `main`; **never merge a pull request**.
- Run lint and build checks before creating a commit, even when modifications seem small. Record which commands ran and their outputs.
- When changes are ready for review, open a **pull request targeting `main`** per project policy. Do not auto-merge it.
- Use Vercel's existing automatic deployment workflow. On site changes, provide the **verified actual preview-deployment URL** after it exists; never guess the URL or represent a commit/PR page as a deployed preview.
- Document outstanding content placeholders and design decisions in the PR description.
- For instructions-only/documentation requests, prepare the requested file; **do not modify the website or create a PR unless asked**.

## 13. Definition of done — visual design phase

A design pass is ready for review only when all of the following are true:

- [ ] Hero composition is visibly rethought and premium at desktop and mobile sizes.
- [ ] Typography, whitespace, grid, and imagery form a consistent visual language.
- [ ] The work section feels gallery-first rather than like a list of SaaS cards.
- [ ] About and optional Journal pages use distinct but coherent editorial compositions.
- [ ] Header, footer, and contact affordances are deliberate, accessible, and responsive.
- [ ] Motion is subtle, smooth, consistent, and reduced-motion compatible.
- [ ] Existing real content/assets have not been altered without authorization.
- [ ] Pending content is modeled cleanly and shown as clearly labeled placeholders or omitted.
- [ ] No invented projects, biographies, awards, metrics, logos, or dead links are visible.
- [ ] Layouts work across small phones, tablets, laptops, and wide desktop screens.
- [ ] Lint and production build checks pass **before commit** (or blockers are reported; no commit if checks fail).
- [ ] If implementation changes were requested: PR targets `main`, remains **unmerged**, and a verified Vercel preview link is supplied when available.

## 14. Default agent response for future design work

Before implementation, report briefly: (a) current layout issues, (b) concrete layout changes planned, (c) components/routes affected, and (d) how existing content and assets will be preserved.

After implementation, report: changed files and user-visible improvements, mobile and desktop checks, lint/build results, any remaining placeholder slots, PR URL (when created), and verified Vercel preview URL (when available). Never claim to have inspected, tested, built, committed, deployed, or merged something without actual evidence.

---

**Guiding principle:** Make Rehan's design work the hero. Layout before decoration. Typography before effects. Motion with restraint. Real content later, without rework.
