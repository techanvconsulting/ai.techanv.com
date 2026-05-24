# Techanv AI Design System

> Category: AI Platform / Developer Tools
> Surface: web
> Base lineage: Supabase (dark-emerald, code-first, open-source DNA)
> Live target: ai.techanv.com

Brand pillars: **Open Source · AI-First · Security · Transparent**.

---

## 1. Visual Theme & Atmosphere

Techanv AI is a **dark-mode-native AI platform** that looks like it was born in a
terminal and grew into a trustworthy product surface. The mood is engineered,
quiet, and confident — never hype, never glowing-brain AI cliché. Deep near-black
canvases let content emerge; a single **emerald** accent carries the entire brand
signal: emerald reads simultaneously as *open-source* (PostgreSQL-green developer
heritage), *security* (safe / verified / pass), and *AI-active* (live, streaming).

Every emerald mark means "this is Techanv and it is working." Monospace markers
(uppercase, wide-tracked) act as developer-console signposts that tie the marketing
surface to the actual product. Transparency is expressed literally — hairline
borders, translucent surfaces, and visible structure rather than heavy shadows.

**Key characteristics**
- Dark-mode-native: near-black with a faint green-cool undertone, never pure black.
- Emerald (`#3ECF8E`) used *sparingly* as identity/working signal, not decoration.
- Inter for display/body (tight negative tracking at large sizes); JetBrains Mono
  for uppercase technical labels and code (developer-console markers).
- Depth through hairline borders + translucency, not drop shadows.
- Pill (9999px) primary CTAs; 6–8px radius for secondary/cards/inputs.
- Streaming/typing motion reserved for live-AI affordances.

## 2. Color

### Brand
- **Emerald** `#3ECF8E` — primary brand, CTAs, active/working state, focus ring.
- **Green Link** `#2BD480` / `#00C573` — interactive links, hovers.
- **Emerald Border** `rgba(62,207,142,0.30)` — accent borders, selected outlines.
- **Emerald Glow** `rgba(62,207,142,0.12)` — subtle fill behind badges/active cards.

### Background surfaces (dark)
- **Canvas** `#0D0F0E` — page background (near-black, faint green undertone).
- **Surface** `#151917` — cards, panels.
- **Surface Elevated** `#1B211E` — dropdowns, modals, hover surfaces.
- **Surface Translucent** `rgba(27,33,30,0.84)` — sticky header / overlays.

### Borders
- **Border** `#232927` — default card/section border.
- **Border Strong** `#2F3733` — buttons, dividers, inputs.
- **Border Subtle** `rgba(255,255,255,0.06)` — hairline structure.

### Text
- **Primary** `#F2F5F4` — headings, key copy (off-white, never pure white).
- **Secondary** `#B7C0BC` — body, descriptions.
- **Muted** `#7C8884` — captions, metadata, mono labels.
- **Quaternary** `#4E5853` — disabled, timestamps.

### Semantic states
- **Success** `#3ECF8E` (emerald, doubles as brand).
- **Info** `#4FD1C5` — teal, secondary AI/data accent.
- **Warning** `#F5A623` — amber.
- **Danger** `#FF6B6B` — coral red.

> Rule: emerald is the *only* chromatic brand color in normal use. Teal/amber/coral
> appear **only** in status, data-viz, and alert contexts.

## 3. Typography

- **Display / Headings:** Inter (var), fallback `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.
  - 72px / lh 1.02 / tracking -2.0px (hero)
  - 56px / lh 1.04 / -1.5px · 40px / lh 1.08 / -1.0px · 28px / lh 1.2 / -0.4px
  - Weight 600 for display, 500 for subheads.
- **Body:** Inter 400/450, 16–18px, lh 1.6, secondary text color.
- **Caption:** Inter 400, 13–14px, muted.
- **Mono / Labels / Code:** JetBrains Mono, fallback `"Source Code Pro", ui-monospace, "SF Mono", Menlo, monospace`.
  - Eyebrows: 12px, **UPPERCASE**, letter-spacing 1.2px, emerald or muted.
  - Code/terminal: 14px, lh 1.6, surface-elevated bg.

## 4. Spacing

4px base scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
- Radius: `pill 9999px` (primary CTA, badges), `8px` cards, `6px` inputs/secondary, `12px` large panels.
- Section vertical rhythm: 96–128px between major sections; 24–32px intra-section.
- Density: generous marketing density; tighter in product/console UI.

## 5. Layout & Composition

- Max content width **1200px**, centered; 24px gutters mobile.
- 12-col grid; hero is asymmetric (copy left, live terminal/preview right).
- Sticky translucent header (`Surface Translucent` + hairline bottom border + backdrop blur).
- Section pattern: mono **eyebrow** → display headline → secondary lead → content.
- Mobile-first responsive; stack at <1024px, single-col cards at <640px.

## 6. Components

- **Primary button:** emerald fill `#3ECF8E`, near-black text `#0D0F0E`, pill 9999px, weight 550; hover slightly brighter + emerald glow.
- **Secondary button:** transparent fill, `Border Strong` outline, primary text; 6px radius; hover surface-elevated.
- **Card:** `Surface` bg, `Border` hairline, 8px radius; active/featured card gets `Emerald Border` + `Emerald Glow` inner fill.
- **Badge / pill:** tinted `Emerald Glow` bg, emerald text, mono uppercase, 9999px.
- **Eyebrow label:** mono uppercase, 1.2px tracking, emerald.
- **Code / terminal block:** `Surface Elevated`, mono, optional emerald `>` prompt + blinking caret.
- **Input:** `Surface` bg, `Border Strong`, 6px radius; focus = emerald ring `rgba(62,207,142,0.4)`.
- **AI chat widget:** dark bubble (assistant) on `Surface Elevated`, emerald user bubble; streaming dots in emerald.
- **Nav:** mono-flavored links, muted → primary on hover, emerald underline for active hash route.

## 7. Motion & Interaction

- Transitions 150–250ms, `cubic-bezier(0.2,0,0,1)`.
- Hover: brightness/translate-y(-1px) on cards & buttons; emerald glow ramp.
- Focus: always-visible emerald ring (a11y).
- **AI-specific:** streaming token reveal, 3-dot typing pulse, scanning shimmer on "thinking" — emerald, subtle.
- Respect `prefers-reduced-motion`: disable parallax, shimmer, blink; keep opacity fades.

## 8. Voice & Brand

- Tone: confident, technical-but-clear, zero fluff. Engineer-to-engineer.
- Signature line: **"Open. Secure. Transparent."**
- Capitalization: sentence case for copy; UPPERCASE mono for eyebrows/labels only.
- Lead with the differentiator: open-source + self-hostable + security-first AI.
- Terminology: "agent", "deploy", "self-host", "knowledge base", "transparent".
- No emoji in product copy. No exclamation spam. Numbers > adjectives.

## 9. Anti-patterns (do NOT)

- ❌ Pure black `#000` backgrounds or pure white `#fff` text.
- ❌ Light mode for the marketing site.
- ❌ Glowing-brain / neural-network / robot-face AI clichés.
- ❌ Multiple competing accent colors — emerald is the brand; teal/amber/coral are status-only.
- ❌ Heavy drop shadows for depth — use hairline borders + translucency.
- ❌ Gradient-soup hero backgrounds; keep emerald as a precise signal.
- ❌ Hype copy ("revolutionary", "game-changing") — show specifics and numbers.
