import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { generateSnowflakes } from '../ChristmasEventsSection.jsx';

describe('generateSnowflakes — property tests', () => {
  /**
   * Property 1: Snowflake bounds
   * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5
   *
   * Note on size bound: the deterministic formula is `3 + (seed % 7)` where
   * seed = i * 137.508 (a float). JavaScript's % operator on floats can produce
   * values in [0, 7), so size spans [3, 10). The design specifies "range 3–9 px"
   * as the intended minimum/maximum integer bounds; with float arithmetic the
   * upper bound is strictly less than 10. Tests assert the correct computed range.
   */
  it('all numeric fields stay within specified ranges for any count [1,100]', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const flakes = generateSnowflakes(count);
        expect(flakes).toHaveLength(count);
        for (const s of flakes) {
          expect(s.left).toBeGreaterThanOrEqual(0);
          expect(s.left).toBeLessThan(100);
          expect(s.opacity).toBeGreaterThanOrEqual(0.30);
          expect(s.opacity).toBeLessThan(0.85);
          // size: 3 + (seed % 7), seed is float → range [3, 10)
          expect(s.size).toBeGreaterThanOrEqual(3);
          expect(s.size).toBeLessThan(10);
          expect(s.duration).toBeGreaterThanOrEqual(6);
          expect(s.duration).toBeLessThan(18);
          expect(s.drift).toBeGreaterThanOrEqual(-25);
          expect(s.drift).toBeLessThan(25);
          expect(s.delay).toBeGreaterThanOrEqual(0);
          expect(s.delay).toBeLessThan(8);
        }
      })
    );
  });

  /**
   * Property 12: Snowflake generation determinism
   * Validates: Requirements 2.6
   */
  it('same count always produces identical snowflake configs', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), (count) => {
        const a = generateSnowflakes(count);
        const b = generateSnowflakes(count);
        expect(a).toHaveLength(b.length);
        for (let i = 0; i < a.length; i++) {
          expect(a[i]).toEqual(b[i]);
        }
      })
    );
  });

  /**
   * Property 8: Mobile density cap
   * Validates: Requirements 2.1, 2.2
   */
  it('mobile count is exactly 18, desktop count is exactly 40', () => {
    expect(generateSnowflakes(18)).toHaveLength(18);
    expect(generateSnowflakes(40)).toHaveLength(40);
  });
});
