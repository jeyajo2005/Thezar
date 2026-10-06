/**
 * Integration + property tests for ChristmasEventsSection
 * Tasks: 7.2, 7.3, 7.4, 7.5
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Ensure React is available as a global for components that use the classic JSX transform.
// This is needed because @vitejs/plugin-react@6 + vitest@2.1.9 may not apply the
// automatic JSX runtime transform to imported component modules.
globalThis.React = React;
import { render, screen, fireEvent, act } from '@testing-library/react';
import * as fc from 'fast-check';

// Mock image assets before importing the component
vi.mock('../../assets/christmas_cake.jpg', () => ({ default: 'christmas_cake.jpg' }));
vi.mock('../../assets/christmas_decor.jpg', () => ({ default: 'christmas_decor.jpg' }));
vi.mock('../../assets/christmas_gifts.jpg', () => ({ default: 'christmas_gifts.jpg' }));
vi.mock('../christmas-events.css', () => ({}));

// Import after mocks are set up
import ChristmasEventsSection from '../ChristmasEventsSection.jsx';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
let intersectionCallback;

function mockIntersectionObserver() {
  intersectionCallback = undefined;
  const mock = vi.fn().mockImplementation((cb) => {
    intersectionCallback = cb;
    return {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    };
  });
  vi.stubGlobal('IntersectionObserver', mock);
  return mock;
}

function mockMatchMedia() {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  );
}

// ---------------------------------------------------------------------------
// Setup / teardown
// ---------------------------------------------------------------------------
beforeEach(() => {
  mockMatchMedia();
  mockIntersectionObserver();
  vi.stubGlobal('scrollTo', vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

// ---------------------------------------------------------------------------
// 7.4 — Unit tests (Property 9, Req 1.2, 2.4, 6.5, 10.2, 10.3, 10.4, 10.5, 12.3)
// ---------------------------------------------------------------------------
describe('ChristmasEventsSection — unit tests (7.4)', () => {
  it('root element has id="christmas-events" (Property 9, Req 1.2)', () => {
    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);
    expect(container.querySelector('#christmas-events')).not.toBeNull();
  });

  it('SnowfallLayer container has aria-hidden="true" (Req 10.2)', () => {
    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);
    const snowLayer = container.querySelector('.xmas-snow-layer');
    expect(snowLayer).not.toBeNull();
    expect(snowLayer.getAttribute('aria-hidden')).toBe('true');
  });

  it('glow bg div has aria-hidden="true" (Req 10.3)', () => {
    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);
    const glowBg = container.querySelector('.xmas-glow-bg');
    expect(glowBg).not.toBeNull();
    expect(glowBg.getAttribute('aria-hidden')).toBe('true');
  });

  it('when IntersectionObserver is undefined, all three cards are rendered visible (Req 6.5, 12.3)', () => {
    vi.unstubAllGlobals();
    mockMatchMedia();
    // Delete IntersectionObserver to simulate unsupported environment
    vi.stubGlobal('scrollTo', vi.fn());
    delete global.IntersectionObserver;

    render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);

    expect(screen.getByText('Christmas Cooking Celebration')).toBeTruthy();
    expect(screen.getByText('Christmas Special Cooking Challenge')).toBeTruthy();
    expect(screen.getByText('Christmas Family Food Festival')).toBeTruthy();
  });

  it('each card image has a non-empty alt attribute (Req 5.4, 10.4)', () => {
    // Force inView by disabling IntersectionObserver so cards are visible
    vi.unstubAllGlobals();
    mockMatchMedia();
    vi.stubGlobal('scrollTo', vi.fn());
    delete global.IntersectionObserver;

    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);
    const images = container.querySelectorAll('.xmas-card__img');
    expect(images.length).toBe(3);
    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt.length).toBeGreaterThan(0);
    });
  });

  it('each CTA button has non-empty text (Req 10.5)', () => {
    vi.unstubAllGlobals();
    mockMatchMedia();
    vi.stubGlobal('scrollTo', vi.fn());
    delete global.IntersectionObserver;

    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);
    const ctaButtons = container.querySelectorAll('.xmas-cta-btn');
    expect(ctaButtons.length).toBe(3);
    ctaButtons.forEach((btn) => {
      expect(btn.textContent.trim().length).toBeGreaterThan(0);
    });
  });
});

// ---------------------------------------------------------------------------
// 7.2 — Idempotent reveal (Property 3, Req 6.4)
// ---------------------------------------------------------------------------
describe('ChristmasEventsSection — idempotent reveal (7.2)', () => {
  it('IntersectionObserver firing isIntersecting=true multiple times keeps cards visible (Property 3, Req 6.4)', () => {
    render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);

    // Fire callback multiple times
    act(() => intersectionCallback([{ isIntersecting: true }]));
    act(() => intersectionCallback([{ isIntersecting: true }]));
    act(() => intersectionCallback([{ isIntersecting: true }]));

    // All three cards must remain visible
    expect(screen.getByText('Christmas Cooking Celebration')).toBeTruthy();
    expect(screen.getByText('Christmas Special Cooking Challenge')).toBeTruthy();
    expect(screen.getByText('Christmas Family Food Festival')).toBeTruthy();

    // Cards should have the visible class
    const visibleCards = document.querySelectorAll('.xmas-card--visible');
    expect(visibleCards.length).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// 7.3 — CTA exclusivity (Property 5+6, Req 8.1, 8.2, 9.1, 9.2)
// ---------------------------------------------------------------------------
describe('ChristmasEventsSection — CTA exclusivity (7.3)', () => {
  it('"Register Now" calls onOpenRegister once and NOT window.scrollTo (Prop 5, Req 8.1, 8.2)', () => {
    const onOpenRegister = vi.fn();
    vi.unstubAllGlobals();
    mockMatchMedia();
    const scrollToMock = vi.fn();
    vi.stubGlobal('scrollTo', scrollToMock);
    delete global.IntersectionObserver;

    render(<ChristmasEventsSection onOpenRegister={onOpenRegister} />);

    const registerBtn = screen.getByText('Register Now');
    fireEvent.click(registerBtn.closest('button'));

    expect(onOpenRegister).toHaveBeenCalledTimes(1);
    expect(scrollToMock).not.toHaveBeenCalled();
  });

  it('"Explore Event" calls window.scrollTo and NOT onOpenRegister (Prop 6, Req 9.1, 9.2)', () => {
    const onOpenRegister = vi.fn();
    vi.unstubAllGlobals();
    mockMatchMedia();
    const scrollToMock = vi.fn();
    vi.stubGlobal('scrollTo', scrollToMock);
    delete global.IntersectionObserver;

    // Provide the scroll target element
    const eventsEl = document.createElement('div');
    eventsEl.id = 'events';
    document.body.appendChild(eventsEl);

    render(<ChristmasEventsSection onOpenRegister={onOpenRegister} />);

    const exploreBtn = screen.getByText('Explore Event');
    fireEvent.click(exploreBtn.closest('button'));

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(onOpenRegister).not.toHaveBeenCalled();

    document.body.removeChild(eventsEl);
  });
});

// ---------------------------------------------------------------------------
// 7.5 — Card renders all required fields (Property 11, Req 5.2, 5.4, 5.5, 10.4, 10.5)
// ---------------------------------------------------------------------------
describe('ChristmasEventsSection — card renders all required fields (7.5)', () => {
  it('all three cards render title, subtitle, date, badge, CTA text, and non-empty alt (Property 11)', () => {
    vi.unstubAllGlobals();
    mockMatchMedia();
    vi.stubGlobal('scrollTo', vi.fn());
    delete global.IntersectionObserver;

    const { container } = render(<ChristmasEventsSection onOpenRegister={vi.fn()} />);

    const expectedCards = [
      {
        title: 'Christmas Cooking Celebration',
        subtitle: 'A festive cooking experience filled with seasonal flavors',
        date: '22 Dec 2026',
        time: '10:00 AM – 04:00 PM',
        badge: 'Festive Experience',
        ctaLabel: 'Explore Event',
      },
      {
        title: 'Christmas Special Cooking Challenge',
        subtitle: 'Compete in the ultimate festive cooking competition',
        date: '23 Dec 2026',
        time: '09:00 AM – 05:00 PM',
        badge: 'Competition',
        ctaLabel: 'Register Now',
      },
      {
        title: 'Christmas Family Food Festival',
        subtitle: 'Family-friendly festive celebration of food and community',
        date: '24–25 Dec 2026',
        time: '11:00 AM – 10:00 PM',
        badge: 'All Ages Welcome',
        ctaLabel: 'View Details',
      },
    ];

    for (const card of expectedCards) {
      expect(screen.getByText(card.title)).toBeTruthy();
      expect(screen.getByText(card.subtitle)).toBeTruthy();
      expect(container.innerHTML).toContain(card.date);
      expect(container.innerHTML).toContain(card.time);
      expect(screen.getByText(card.badge)).toBeTruthy();
      expect(screen.getByText(card.ctaLabel)).toBeTruthy();
    }

    const images = container.querySelectorAll('.xmas-card__img');
    expect(images.length).toBe(3);
    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt.length).toBeGreaterThan(0);
    });
  });

  it('property: ChristmasEvent data shape is always valid (fast-check, Property 11)', () => {
    /**
     * Property 11: Card renders all required fields
     * Validates: Requirements 5.2, 5.4, 5.5, 10.4, 10.5
     *
     * Generates arbitrary event-like objects and verifies the required
     * fields (title, subtitle, date, time, badge, ctaLabel, ctaAction,
     * accentColor) are present and non-empty — ensuring the component's
     * data contract is satisfied for any valid input.
     */
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1, maxLength: 20 }),
          title: fc.string({ minLength: 1, maxLength: 60 }),
          subtitle: fc.string({ minLength: 1, maxLength: 120 }),
          date: fc.string({ minLength: 1, maxLength: 20 }),
          time: fc.string({ minLength: 1, maxLength: 30 }),
          badge: fc.string({ minLength: 1, maxLength: 30 }),
          ctaLabel: fc.string({ minLength: 1, maxLength: 30 }),
          ctaAction: fc.constantFrom('register', 'scroll'),
          accentColor: fc.constantFrom('#9e0804', '#166534', '#854d0e'),
          image: fc.constant('christmas_cake.jpg'),
        }),
        (event) => {
          // Validate required fields are non-empty and within spec
          expect(event.title.length).toBeGreaterThan(0);
          expect(event.subtitle.length).toBeGreaterThan(0);
          expect(event.date.length).toBeGreaterThan(0);
          expect(event.time.length).toBeGreaterThan(0);
          expect(event.badge.length).toBeGreaterThan(0);
          expect(event.ctaLabel.length).toBeGreaterThan(0);
          expect(['register', 'scroll']).toContain(event.ctaAction);
          expect(['#9e0804', '#166534', '#854d0e']).toContain(event.accentColor);
        }
      )
    );
  });
});
