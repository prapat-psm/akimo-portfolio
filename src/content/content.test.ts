import { describe, expect, it } from 'vitest';
import { commissionTypes } from './commissions';
import { artworks } from './gallery';
import { hireLink, socialLinks, visibleLinks } from './links';

describe('commission prices', () => {
  it('keeps the current THB prices as-is', () => {
    const prices = Object.fromEntries(commissionTypes.map((c) => [c.id, c.thb.amountMinor / 100]));
    expect(prices).toEqual({
      'close-up': 1500,
      'bust-up': 2000,
      'half-body': 3000,
      'full-body': 4900,
      background: 1300,
    });
  });

  it('has unique ids and THB/USD in the right currency', () => {
    expect(new Set(commissionTypes.map((c) => c.id)).size).toBe(commissionTypes.length);
    for (const c of commissionTypes) {
      expect(c.thb.currency).toBe('THB');
      if (c.usd) expect(c.usd.currency).toBe('USD');
    }
  });
});

describe('links', () => {
  it('hides links without a URL and only uses https', () => {
    expect(visibleLinks.length).toBe(socialLinks.filter((l) => l.href).length);
    for (const l of visibleLinks) expect(l.href).toMatch(/^https:\/\//);
  });

  it('sends "hire" to VGen', () => {
    expect(hireLink.id).toBe('vgen');
  });
});

describe('gallery', () => {
  it('only lists web-sized images with a known commission type', () => {
    const types = new Set(commissionTypes.map((c) => c.id));
    for (const a of artworks) {
      expect(types.has(a.type)).toBe(true);
      expect(Math.max(a.width, a.height)).toBeLessThanOrEqual(1600);
    }
  });
});
