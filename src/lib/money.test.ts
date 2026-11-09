import { describe, expect, it } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
  it('formats THB without decimals', () => {
    expect(formatMoney({ amountMinor: 150000, currency: 'THB' })).toBe('1,500 บาท');
  });

  it('marks a starting price with +', () => {
    expect(formatMoney({ amountMinor: 130000, currency: 'THB' }, { startingAt: true })).toBe('1,300+ บาท');
  });

  it('formats whole and fractional USD', () => {
    expect(formatMoney({ amountMinor: 4500, currency: 'USD' })).toBe('$45');
    expect(formatMoney({ amountMinor: 4550, currency: 'USD' })).toBe('$45.50');
  });

  it('rejects negative or fractional minor units', () => {
    expect(() => formatMoney({ amountMinor: -1, currency: 'THB' })).toThrow(RangeError);
    expect(() => formatMoney({ amountMinor: 1.5, currency: 'USD' })).toThrow(RangeError);
  });
});
