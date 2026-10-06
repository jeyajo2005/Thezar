# Implementation Plan: Christmas Events Section

## Overview

Add a self-contained, premium Christmas Events section to the Thezar Home page. The work is split into: test-runner setup, CSS animations file, the main `ChristmasEventsSection` component (with `SnowfallLayer`, `SectionHeader`, and `ChristmasEventCard` sub-components), Home.jsx integration, and a property-based + unit test suite.

All new code lives in `frontend/src/Component/Events/` and one CSS file. The only new devDependencies are `vitest` and `fast-check`; no runtime dependencies are added.

## Tasks

- [x] 1. Install and configure Vitest + fast-check test runner
  - Add `vitest`, `@vitest/ui`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, and `fast-check` as devDependencies in `frontend/package.json`
  - Create `frontend/vitest.config.js` with jsdom environment, global test flag, and setup file pointing to `src/test-setup.js`
  - Create `frontend/src/test-setup.js` that imports `@testing-library/jest-dom`
  - Add a `"test": "vitest --run"` script to `frontend/package.json`
  - _Requirements: 11.4 (devDependencies only), 12.1 (test environment safety)_

- [x] 2. Create `christmas-events.css` with all keyframes and component styles
  - [x] 2.1 Write `@keyframes` blocks and base section styles
    - Define `@keyframes snowfall` (vertical drop + horizontal drift via CSS custom property `--drift`)
    - Define `@keyframes float` (used by sparkle decorations, gentle up-down oscillation)
    - Define `@keyframes sweepBg` (CTA button hover background sweep)
    - Add `.xmas-section` base styles: `position: relative`, `overflow: hidden`, background `#071426`, padding, `z-index` stacking context
    - Add `.xmas-snow-layer`: `position: absolute`, `inset: 0`, `pointer-events: none`, `overflow: hidden`
    - Add `.xmas-snowflake`: `position: absolute`, `top: -10px`, `border-radius: 50%`, `background: white`, `animation: snowfall var(--duration) var(--delay) linear infinite`
    - Add `.xmas-glow-bg`: absolute-positioned radial gradient overlays for emerald/gold ambient glow
    - _Requirements: 2.3, 2.4, 2.5, 11.1, 11.2_

  - [x] 2.2 Write header, card grid, and card component styles
    - Add `.xmas-header` centering and spacing styles
    - Add `.xmas-label` pill styles: brand color `#9e0804` background, rounded, letter-spacing, uppercase
    - Add `.xmas-heading` styles: `Plus Jakarta Sans`, extra-bold, uppercase, white
    - Add `.xmas-heading-accent` gradient text: red-to-gold via `background-clip: text`
    - Add `.xmas-subtitle` styles
    - Add `.xmas-sparkle` floating SVG decoration styles using `animation: float`
    - Add `.xmas-cards-grid`: CSS Grid, 3-column desktop / 1-column mobile via `@media`
    - Add `.xmas-card` base styles: `border-radius`, `overflow: hidden`, `background`, `transition`, `will-change: transform`
    - Add `.xmas-card:hover` styles: `translateY(-6px)`, deeper `box-shadow`
    - Add `.xmas-card--visible` entrance animation class (fade + slide-up, stagger via CSS custom property `--delay`)
    - Add `.xmas-card__img-wrap` and `.xmas-card__img` with `transition: transform 0.4s`, hover rule `scale(1.08)`
    - Add `.xmas-card__overlay`: gradient overlay (`dark → transparent` bottom to top) on image
    - Add `.xmas-card__badge` pill styles: top-left absolute, accent-color background
    - Add `.xmas-card__body` padding and text styles
    - Add `.xmas-cta-btn` and `.xmas-cta-btn:hover` styles including sweep animation and arrow translate
    - _Requirements: 4.1–4.6, 5.5, 5.6, 7.1–7.4, 11.1, 11.2_

- [x] 3. Implement `generateSnowflakes` utility and `ChristmasEventsSection` skeleton
  - [x] 3.1 Implement `generateSnowflakes(count)` deterministic utility
    - Create `frontend/src/Component/Events/ChristmasEventsSection.jsx` with `generateSnowflakes` as a named function (not exported, used internally)
    - Implement the golden-angle-based deterministic algorithm: `seed = i * 137.508`, derive `size`, `left`, `delay`, `duration`, `opacity`, `drift` from `seed` using the modulo formulas from the design
    - Ensure all output values stay within the specified ranges: `left ∈ [0,100]`, `opacity ∈ [0.30, 0.85]`, `size ∈ [3, 9]`, `duration ∈ [6, 18]`, `drift ∈ [-25, 25]`
    - _Requirements: 2.1, 2.2, 2.6, 3.1–3.5_

  - [x] 3.2 Implement `ChristmasEventsSection` root component with snowfall and IntersectionObserver
    - Import `useRef`, `useState`, `useEffect`, `useMemo` from react; import `christmas-events.css`
    - Declare `CHRISTMAS_EVENTS` constant array with the three event objects (title, subtitle, date, time, image, badge, ctaLabel, ctaAction, accentColor) as specified in the design
    - Compute `isMobile` and `prefersReducedMotion` with `typeof window !== 'undefined'` guards (default both `false` when `window` absent)
    - Memoize snowflake array via `useMemo`: 18 flakes on mobile, 40 on desktop
    - Implement `useEffect` for `IntersectionObserver` with threshold `0.15`, calling `setInView(true)` once then disconnecting; fallback to `setInView(true)` immediately if `IntersectionObserver` is unavailable
    - Return section JSX with `id="christmas-events"`, `ref={sectionRef}`, className `xmas-section`; render `SnowfallLayer`, glow div (aria-hidden), `SectionHeader`, and cards grid placeholder
    - _Requirements: 1.2, 1.4, 6.1–6.6, 12.1–12.3_

- [x] 4. Implement `SnowfallLayer` and `SectionHeader` sub-components
  - [x] 4.1 Implement `SnowfallLayer` inline sub-component
    - Define `SnowfallLayer` as a function inside `ChristmasEventsSection.jsx` (not exported)
    - Accept `snowflakes` array and `prefersReducedMotion` props
    - Render `<div className="xmas-snow-layer" aria-hidden="true">` with `pointer-events: none` (enforced by CSS)
    - Map each `SnowflakeConfig` to a `<span className="xmas-snowflake">` with inline style: `--drift`, `--duration`, `--delay`, `left`, `width`, `height`, `opacity`, and `animationPlayState: prefersReducedMotion ? 'paused' : 'running'`
    - _Requirements: 2.3, 2.4, 2.5, 10.2_

  - [x] 4.2 Implement `SectionHeader` inline sub-component
    - Define `SectionHeader` as a function inside `ChristmasEventsSection.jsx` (not exported)
    - Accept `label`, `heading`, `subtitle` props
    - Render label pill `<span className="xmas-label">` with text "✦ CHRISTMAS SPECIAL ✦"
    - Render `<h2 className="xmas-heading">Christmas <span className="xmas-heading-accent">Events</span></h2>`
    - Render subtitle `<p className="xmas-subtitle">`
    - Render 3–4 inline SVG sparkle/star `<span className="xmas-sparkle">` elements with `aria-hidden="true"`
    - Render `<div className="decorative-maroon-line">` from `index.css`
    - _Requirements: 4.1–4.6_

- [x] 5. Implement `ChristmasEventCard` sub-component and CTA handler
  - [x] 5.1 Implement `ChristmasEventCard` and `handleCtaClick`
    - Define `ChristmasEventCard` as a function inside `ChristmasEventsSection.jsx` (not exported)
    - Accept `event`, `onOpenRegister`, `inView`, `index` props
    - Compute entrance animation delay as `index * 120` ms; apply `.xmas-card--visible` class only when `inView === true`; pass `--delay` as inline CSS custom property
    - Render card structure: `.xmas-card__img-wrap` → `<img>` with descriptive `alt` + `.xmas-card__overlay` + `.xmas-card__badge`
    - Render `.xmas-card__body` with title, subtitle, date, time, and CTA button
    - Implement `handleCtaClick`: if `ctaAction === 'register'` call `onOpenRegister()` once; if `ctaAction === 'scroll'` get `document.getElementById('events')`, guard for null, compute `targetY = el.getBoundingClientRect().top + window.scrollY - 70`, call `window.scrollTo({ top: targetY, behavior: 'smooth' })`
    - Render `<button className="xmas-cta-btn">` with `ctaLabel` text and `<ArrowRight>` icon from lucide-react; button must have visible text (not icon-only)
    - _Requirements: 5.1–5.7, 7.1–7.4, 8.1–8.3, 9.1–9.3, 10.4, 10.5_

  - [x]* 5.2 Write property test — Property 1: Snowflake bounds
    - Create `frontend/src/Component/Events/__tests__/ChristmasEventsSection.test.js`
    - Import `generateSnowflakes` (export it for testing, or test via a re-exported helper)
    - Use `fc.integer({ min: 1, max: 100 })` as arbitrary for count
    - Assert every returned snowflake satisfies: `left ∈ [0,100]`, `opacity ∈ [0.30, 0.85]`, `size ∈ [3, 9]`, `duration ∈ [6, 18]`, `drift ∈ [-25, 25]`
    - **Property 1: Snowflake bounds**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

  - [x]* 5.3 Write property test — Property 12: Snowflake generation determinism
    - Use `fc.integer({ min: 1, max: 100 })` and assert `generateSnowflakes(n)` called twice returns arrays where each snowflake at the same index has identical field values
    - **Property 12: Snowflake generation determinism**
    - **Validates: Requirements 2.6**

  - [x]* 5.4 Write property test — Property 8: Mobile density cap
    - Use `fc.integer({ min: 1, max: 767 })` for width and `fc.integer({ min: 768, max: 1920 })` for desktop width
    - Assert mobile width → exactly 18 snowflakes; desktop width → exactly 40 snowflakes
    - **Property 8: Mobile density cap**
    - **Validates: Requirements 2.1, 2.2**

- [x] 6. Checkpoint — run tests and verify utility correctness
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Wire `ChristmasEventsSection` into `Home.jsx` and write integration tests
  - [x] 7.1 Update `Home.jsx` to use `ChristmasEventsSection`
    - Replace the `ChristmasEventsHero` import line with `import ChristmasEventsSection from '../Component/Events/ChristmasEventsSection';`
    - Insert `<ChristmasEventsSection onOpenRegister={() => setIsRegisterOpen(true)} />` immediately before the `<EventsGrid ...>` JSX block (before the `{/* 06. Upcoming Events */}` comment)
    - Do not remove, reorder, or modify any other existing section components or their props
    - _Requirements: 1.1, 1.3, 1.4_

  - [x]* 7.2 Write property test — Property 3: Idempotent reveal (inView)
    - Use `@testing-library/react` to render `ChristmasEventsSection` with a mocked `onOpenRegister`
    - Mock `IntersectionObserver` globally in the test; fire the callback multiple times with `isIntersecting: true`
    - Assert `setInView` (or the visible state of cards) flips to true exactly once and never reverts
    - **Property 3: Idempotent reveal**
    - **Validates: Requirements 6.4**

  - [x]* 7.3 Write property test — Property 5 & 6: CTA exclusivity
    - Use `fc.constantFrom('register', 'scroll')` as arbitrary for `ctaAction`
    - Render `ChristmasEventCard` with each action; simulate click; assert `onOpenRegister` called iff `ctaAction === 'register'` and `window.scrollTo` called iff `ctaAction === 'scroll'`
    - **Property 5: CTA register exclusivity; Property 6: CTA scroll exclusivity**
    - **Validates: Requirements 8.1, 8.2, 9.1, 9.2**

  - [x]* 7.4 Write unit tests for `ChristmasEventsSection` integration
    - Test: rendered root element has `id="christmas-events"` (Property 9)
    - Test: `SnowfallLayer` container has `aria-hidden="true"` and glow div has `aria-hidden="true"` (Requirements 2.4, 10.2, 10.3)
    - Test: when `IntersectionObserver` is undefined, `inView` defaults to `true` and all three cards are rendered visible (Requirements 6.5, 12.3)
    - Test: each card image has non-empty `alt` attribute (Requirements 5.3, 5.4, 10.4)
    - Test: each CTA is a `<button>` with non-empty text (Requirement 10.5)
    - _Requirements: 1.2, 2.4, 5.3, 5.4, 6.5, 10.2–10.5, 12.3_

  - [x]* 7.5 Write property test — Property 11: Card renders all required fields
    - Use `fc.record` to generate arbitrary valid `ChristmasEvent` objects (title, subtitle, date, time, badge, ctaLabel, ctaAction from `fc.constantFrom('register','scroll')`, accentColor from one of the three values)
    - Render `ChristmasEventCard` for each; assert title, subtitle, date, time, badge text are present in the DOM; assert `<img alt>` is non-empty; assert CTA button text is non-empty
    - **Property 11: Card renders all required fields**
    - **Validates: Requirements 5.2, 5.4, 5.5, 10.4, 10.5**

- [x] 8. Final checkpoint — Ensure all tests pass
  - Run `npm test` (or `vitest --run`) inside `frontend/`; ensure all property-based and unit tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation before integration
- `generateSnowflakes` should be exported (or re-exported via a test helper) to make it directly testable by the property tests in task 5.2–5.4
- The `ChristmasEventsHero.jsx` stub file is NOT deleted — it is simply superseded by removing its import from `Home.jsx`
- Property tests validate universal correctness properties; unit tests validate specific examples and edge cases
- Vitest + fast-check are devDependencies only — they do not affect the production bundle (satisfies Requirement 11.4)

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.2", "3.1"] },
    { "id": 2, "tasks": ["3.2"] },
    { "id": 3, "tasks": ["4.1", "4.2", "5.1"] },
    { "id": 4, "tasks": ["5.2", "5.3", "5.4"] },
    { "id": 5, "tasks": ["7.1"] },
    { "id": 6, "tasks": ["7.2", "7.3", "7.4", "7.5"] }
  ]
}
```
