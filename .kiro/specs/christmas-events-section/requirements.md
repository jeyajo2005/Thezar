# Requirements Document

## Introduction

This document defines requirements for the **Christmas Events Section** — a premium, festive section added to the Thezar React frontend's Home page. The section is positioned immediately above the existing "Upcoming Events" (`EventsGrid`) section and delivers an animated, cinematic experience via CSS snowfall, scroll-reveal event cards, sparkle decorations, and a festive section header. All requirements are derived from the approved design document and must be satisfied without introducing new npm dependencies.

## Glossary

- **ChristmasEventsSection**: The root React component that orchestrates the entire Christmas Events section, rendering snowfall, the section header, sparkle decorations, and three event cards.
- **SnowfallLayer**: A sub-component responsible for rendering animated CSS snowflakes positioned absolutely over the section.
- **SectionHeader**: A sub-component rendering the festive label pill, main heading, subtitle, and decorative sparkle elements.
- **ChristmasEventCard**: A sub-component rendering a single premium event card with image, metadata badge, and a CTA button.
- **CTAButton**: The call-to-action button within each `ChristmasEventCard`, with an action of either `register` or `scroll`.
- **RegistrationModal**: The existing modal component in `src/Component/Modals/RegistrationModal.jsx` that is opened when a user registers.
- **SnowflakeConfig**: A data object describing a single snowflake's visual and animation properties (size, left offset, delay, duration, opacity, drift).
- **IntersectionObserver**: The browser API used to detect when the section enters the viewport and trigger card reveal animations.
- **EventsGrid**: The existing "Upcoming Events" section component in `Home.jsx`, which must remain unmodified.
- **Home.jsx**: The existing top-level page component where `ChristmasEventsSection` is inserted above `EventsGrid`.
- **christmas-events.css**: The new isolated CSS file containing all Christmas-specific styles and `@keyframes` animations.
- **prefers-reduced-motion**: A CSS media query that indicates the user prefers minimal animation.

---

## Requirements

### Requirement 1: Section Placement and Integration

**User Story:** As a site visitor, I want to see a Christmas Events section immediately above the Upcoming Events grid, so that seasonal content is prominently featured on the Home page.

#### Acceptance Criteria

1. THE `ChristmasEventsSection` SHALL be rendered inside `Home.jsx` immediately before `EventsGrid` in DOM order.
2. THE `ChristmasEventsSection` root element SHALL have `id="christmas-events"` as its HTML attribute.
3. WHEN `ChristmasEventsSection` is added to `Home.jsx`, THE `Home.jsx` SHALL preserve all existing section components in their original order without modification.
4. THE `ChristmasEventsSection` SHALL accept a single prop `onOpenRegister` of type function, which it receives from `Home.jsx`.

---

### Requirement 2: Snowfall Animation

**User Story:** As a site visitor, I want to see animated falling snowflakes over the Christmas Events section, so that the section feels festive and immersive.

#### Acceptance Criteria

1. WHEN the section renders on a desktop viewport (width ≥ 768px), THE `SnowfallLayer` SHALL render exactly 40 snowflake elements.
2. WHEN the section renders on a mobile viewport (width < 768px), THE `SnowfallLayer` SHALL render exactly 18 snowflake elements.
3. THE `SnowfallLayer` container SHALL have `pointer-events: none` applied, so that snowflake elements never intercept user interactions with underlying content.
4. THE `SnowfallLayer` container SHALL be positioned absolutely over the section and SHALL have `aria-hidden="true"` set.
5. WHEN `prefers-reduced-motion` is active, THE `SnowfallLayer` SHALL render snowflakes with all CSS animations paused or removed.
6. THE `SnowfallLayer` SHALL generate snowflake configurations deterministically so that the same viewport width always produces the same snowflake layout.

---

### Requirement 3: Snowflake Configuration Bounds

**User Story:** As a developer, I want generated snowflake parameters to stay within defined visual bounds, so that all snowflakes remain visible and aesthetically appropriate within the section.

#### Acceptance Criteria

1. FOR ALL generated `SnowflakeConfig` objects, THE `SnowfallLayer` SHALL produce a `left` value within the range [0, 100] (inclusive, representing percentage).
2. FOR ALL generated `SnowflakeConfig` objects, THE `SnowfallLayer` SHALL produce an `opacity` value within the range [0.30, 0.85] (inclusive).
3. FOR ALL generated `SnowflakeConfig` objects, THE `SnowfallLayer` SHALL produce a `size` value within the range [3, 9] (inclusive, in pixels).
4. FOR ALL generated `SnowflakeConfig` objects, THE `SnowfallLayer` SHALL produce a `duration` value within the range [6, 18] (inclusive, in seconds).
5. FOR ALL generated `SnowflakeConfig` objects, THE `SnowfallLayer` SHALL produce a `drift` value within the range [-25, 25] (inclusive, in pixels).

---

### Requirement 4: Section Header

**User Story:** As a site visitor, I want to see a festive section header with a label, heading, subtitle, and sparkle decorations, so that the Christmas Events section has clear visual identity and hierarchy.

#### Acceptance Criteria

1. THE `SectionHeader` SHALL render a label pill with the text "✦ CHRISTMAS SPECIAL ✦" using the brand color `#9e0804`.
2. THE `SectionHeader` SHALL render a main heading containing the text "Christmas Events" in the project's existing `Plus Jakarta Sans` font, extra-bold uppercase, with white text.
3. THE `SectionHeader` SHALL apply a red-to-gold gradient on the accent word within the heading, consistent with the existing hero gradient pattern.
4. THE `SectionHeader` SHALL render a subtitle with the text "Celebrate the season with food, creativity and unforgettable moments."
5. THE `SectionHeader` SHALL render 3–4 floating SVG star or sparkle decorative elements animated via a CSS `@keyframes float` animation.
6. THE `SectionHeader` SHALL render a thin decorative line using the `decorative-maroon-line` CSS class present in `index.css`.

---

### Requirement 5: Christmas Event Cards

**User Story:** As a site visitor, I want to see three curated Christmas cooking and food event cards with rich imagery and event details, so that I can explore the seasonal offerings.

#### Acceptance Criteria

1. THE `ChristmasEventsSection` SHALL render exactly three `ChristmasEventCard` components arranged in a responsive CSS Grid (3 columns on desktop, 1 column on mobile).
2. EACH `ChristmasEventCard` SHALL display the event title, subtitle, date, time, badge, and a CTA button.
3. EACH `ChristmasEventCard` SHALL render an image using only locally imported asset files (`christmas_cake.jpg`, `christmas_decor.jpg`, `christmas_gifts.jpg`).
4. EACH `ChristmasEventCard` image SHALL include an `alt` attribute describing the image content.
5. EACH `ChristmasEventCard` SHALL render a badge pill positioned in the top-left of the image area.
6. EACH `ChristmasEventCard` image area SHALL have a gradient overlay fading from dark at the bottom to transparent at the top, ensuring card body text remains legible even when the image fails to load.
7. THE three event cards SHALL use the following data: "Christmas Cooking Celebration" (22 Dec 2026), "Christmas Special Cooking Challenge" (23 Dec 2026), and "Christmas Family Food Festival" (24–25 Dec 2026).

---

### Requirement 6: Scroll-Reveal Entrance Animation

**User Story:** As a site visitor, I want the event cards to animate into view as I scroll down to the section, so that the reveal feels cinematic and engaging.

#### Acceptance Criteria

1. WHEN `ChristmasEventsSection` first mounts, THE `ChristmasEventsSection` SHALL set `inView` to `false` and cards SHALL be in their pre-animation (hidden/translated) state.
2. WHEN the `ChristmasEventsSection` root element enters the browser viewport at a threshold of 15%, THE `IntersectionObserver` SHALL set `inView` to `true`.
3. WHEN `inView` becomes `true`, THE `ChristmasEventCard` at index 0 SHALL trigger its entrance animation with 0ms delay, index 1 with 120ms delay, and index 2 with 240ms delay.
4. WHEN `inView` is set to `true`, THE `ChristmasEventsSection` SHALL disconnect the `IntersectionObserver` so it fires at most once per component lifecycle.
5. IF the browser does not support `IntersectionObserver`, THEN THE `ChristmasEventsSection` SHALL set `inView` to `true` immediately so all cards are visible without animation.
6. WHEN `ChristmasEventsSection` unmounts, THE `ChristmasEventsSection` SHALL disconnect the `IntersectionObserver` to prevent memory leaks.

---

### Requirement 7: Card Hover Interactions

**User Story:** As a site visitor, I want event cards to respond visually when I hover over them, so that the interface feels interactive and premium.

#### Acceptance Criteria

1. WHEN a user hovers over a `ChristmasEventCard`, THE card SHALL lift by 6px via a `translateY` transform.
2. WHEN a user hovers over a `ChristmasEventCard`, THE card SHALL deepen its box-shadow to reinforce the lift effect.
3. WHEN a user hovers over a `ChristmasEventCard`, THE card image SHALL scale to 108% of its original size via a CSS `transform: scale(1.08)` transition.
4. WHEN a user hovers over a `ChristmasEventCard` CTA button, THE button SHALL display a background sweep animation and the arrow icon SHALL translate to the right.

---

### Requirement 8: CTA Button — Register Action

**User Story:** As a site visitor, I want clicking a "Register Now" CTA to open the registration modal, so that I can sign up for a Christmas event without navigating away from the page.

#### Acceptance Criteria

1. WHEN a user clicks a `CTAButton` with `ctaAction === 'register'`, THE `ChristmasEventCard` SHALL call `onOpenRegister()` exactly once.
2. WHEN a user clicks a `CTAButton` with `ctaAction === 'register'`, THE `ChristmasEventCard` SHALL NOT trigger any scroll behavior.
3. THE `RegistrationModal` SHALL open as a result of the `onOpenRegister()` call propagated from `ChristmasEventsSection` through `Home.jsx`.

---

### Requirement 9: CTA Button — Scroll Action

**User Story:** As a site visitor, I want clicking an "Explore Event" or "View Details" CTA to smoothly scroll me to the Upcoming Events section, so that I can see more event details without manual scrolling.

#### Acceptance Criteria

1. WHEN a user clicks a `CTAButton` with `ctaAction === 'scroll'`, THE `ChristmasEventCard` SHALL smooth-scroll the viewport to the element with `id="events"`, offset by 70px to account for the sticky navbar.
2. WHEN a user clicks a `CTAButton` with `ctaAction === 'scroll'`, THE `ChristmasEventCard` SHALL NOT call `onOpenRegister()`.
3. IF `document.getElementById('events')` returns `null`, THEN THE `ChristmasEventCard` SHALL perform no scroll action and SHALL NOT throw an error.

---

### Requirement 10: Accessibility

**User Story:** As a user with motion sensitivity or assistive technology needs, I want the Christmas Events section to respect my preferences and expose appropriate ARIA attributes, so that I can use the section comfortably.

#### Acceptance Criteria

1. WHEN `prefers-reduced-motion` is active, THE `SnowfallLayer` SHALL ensure all snowflake CSS animations have `animation-play-state: paused` or `animation: none`.
2. THE `SnowfallLayer` container SHALL have `aria-hidden="true"` so screen readers skip decorative snowflake elements.
3. THE glow background decorative element SHALL have `aria-hidden="true"` so screen readers skip it.
4. EACH `ChristmasEventCard` image `<img>` element SHALL have a descriptive `alt` attribute.
5. EACH `CTAButton` SHALL be a `<button>` element with visible, meaningful label text.

---

### Requirement 11: Style Isolation and No New Dependencies

**User Story:** As a developer, I want all Christmas-specific styles isolated in a dedicated CSS file with no new npm dependencies, so that the rest of the site is unaffected and the bundle size does not increase.

#### Acceptance Criteria

1. THE `ChristmasEventsSection` SHALL be the only component that imports `christmas-events.css`.
2. ALL Christmas-specific `@keyframes` animations and CSS class definitions SHALL reside exclusively in `christmas-events.css`.
3. THE implementation SHALL use only existing project dependencies: `react`, `lucide-react`, `tailwindcss`, and local asset imports.
4. THE implementation SHALL NOT introduce any new entries to `frontend/package.json` dependencies or devDependencies.
5. THE `ChristmasEventsSection` component file SHALL be located at `frontend/src/Component/Events/ChristmasEventsSection.jsx`.
6. THE `christmas-events.css` file SHALL be located at `frontend/src/Component/Events/christmas-events.css`.

---

### Requirement 12: SSR and Test Environment Safety

**User Story:** As a developer, I want the component to render safely in Node.js test environments where `window` is not defined, so that unit and integration tests do not throw runtime errors.

#### Acceptance Criteria

1. WHEN rendering in an environment where `window` is not defined, THE `ChristmasEventsSection` SHALL guard all `window` accesses with `typeof window !== 'undefined'` checks.
2. IF `typeof window === 'undefined'`, THEN THE `ChristmasEventsSection` SHALL default `isMobile` to `false` and `prefersReducedMotion` to `false`.
3. WHEN `IntersectionObserver` is not available in the environment, THE `ChristmasEventsSection` SHALL call `setInView(true)` immediately as a graceful fallback.
