import type { Money } from '@/lib/money';

export type CommissionType = {
  id: string;
  name: string;
  /** Short Thai description shown under the name. */
  detail: string;
  thb: Money;
  /** null until Akimo sets a USD price (set by hand, not FX-converted). */
  usd: Money | null;
  /** Price starts from this amount (e.g. Background depends on complexity). */
  startingAt?: boolean;
};

const thb = (baht: number): Money => ({ amountMinor: baht * 100, currency: 'THB' });

/** Prices as-is from Akimo's current commission sheet (2026-11-09). */
export const commissionTypes: CommissionType[] = [
  { id: 'close-up', name: 'Close Up', detail: 'ช่วงหน้าและไหล่', thb: thb(1500), usd: null },
  { id: 'bust-up', name: 'Bust Up', detail: 'ครึ่งบนถึงหน้าอก', thb: thb(2000), usd: null },
  { id: 'half-body', name: 'Half Body', detail: 'ครึ่งตัวถึงเอว', thb: thb(3000), usd: null },
  { id: 'full-body', name: 'Full Body', detail: 'เต็มตัว', thb: thb(4900), usd: null },
  { id: 'background', name: 'Background', detail: 'ฉากหลัง ราคาตามความละเอียด', thb: thb(1300), usd: null, startingAt: true },
];

export const commissionTerms = {
  commercialMultiplier: 2,
  depositPercent: 50,
  deliveryDays: { min: 14, max: 30 },
  output: { width: 2880, height: 3840 },
} as const;
