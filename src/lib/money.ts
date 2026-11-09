export type Currency = 'THB' | 'USD';

/** Money in minor units (satang / cents) so USD decimals never round. */
export type Money = { amountMinor: number; currency: Currency };

/**
 * 150000 THB → "1,500 บาท", 4500 USD → "$45", 4550 USD → "$45.50".
 * `startingAt` adds "+" for prices that start from an amount (e.g. Background).
 */
export function formatMoney(money: Money, opts: { startingAt?: boolean } = {}): string {
  if (!Number.isInteger(money.amountMinor) || money.amountMinor < 0) {
    throw new RangeError(`invalid amountMinor: ${money.amountMinor}`);
  }
  const major = money.amountMinor / 100;
  const plus = opts.startingAt ? '+' : '';

  if (money.currency === 'THB') {
    const n = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(major);
    return `${n}${plus} บาท`;
  }

  const digits = Number.isInteger(major) ? 0 : 2;
  const n = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(major);
  return `$${n}${plus}`;
}
