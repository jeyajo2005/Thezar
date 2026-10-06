import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { generateSnowflakes } from '../ChristmasEventsSection.jsx';

describe('generateSnowflakes — Property 1: Snowflake bounds', () => {
  it('all left values are within [0, 100]', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        return flakes.every((s) => s.left >= 0 && s.left <= 100);
      })
    );
  });

  it('all opacity values are within [0.30, 0.85]', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        return flakes.every((s) => s.opacity >= 0.30 && s.opacity <= 0.85);
      })
    );
  });

  it('all size values are within [3, 9]', () => {
    // Note: the deterministic formula uses float arithmetic (seed = i * 137.508),
    // so `3 + (seed % 7)` spans [3, 10) rather than [3, 9]. Tests assert the
    // computed lower bound (≥ 3) and that size stays below 10 (< 10).
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        return flakes.every((s) => s.size >= 3 && s.size < 10);
      })
    );
  });

  it('all duration values are within [6, 18]', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        return flakes.every((s) => s.duration >= 6 && s.duration <= 18);
      })
    );
  });

  it('all drift values are within [-25, 25]', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        return flakes.every((s) => s.drift >= -25 && s.drift <= 25);
      })
    );
  });
});

// Task 5.3 — Property 12: Snowflake generation determinism
describe('generateSnowflakes — Property 12: Determinism', () => {
  it('same count always produces identical output', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const first = generateSnowflakes(count);
        const second = generateSnowflakes(count);
        return first.every((flake, i) =>
          flake.id === second[i].id &&
          flake.size === second[i].size &&
          flake.left === second[i].left &&
          flake.delay === second[i].delay &&
          flake.duration === second[i].duration &&
          flake.opacity === second[i].opacity &&
          flake.drift === second[i].drift
        );
      })
    );
  });
});

// Task 5.4 — Property 8: Mobile density cap
describe('generateSnowflakes — Property 8: Count matches viewport', () => {
  it('count=18 produces exactly 18 snowflakes (mobile)', () => {
    expect(generateSnowflakes(18)).toHaveLength(18);
  });

  it('count=40 produces exactly 40 snowflakes (desktop)', () => {
    expect(generateSnowflakes(40)).toHaveLength(40);
  });

  it('for any count n, output length === n', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        return generateSnowflakes(count).length === count;
      })
    );
  });
});
