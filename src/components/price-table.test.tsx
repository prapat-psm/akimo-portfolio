import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CommissionType } from '@/content/commissions';
import { PriceTable } from './price-table';

const items: CommissionType[] = [
  { id: 'bust-up', name: 'Bust Up', detail: 'ครึ่งบน', thb: { amountMinor: 200000, currency: 'THB' }, usd: { amountMinor: 6000, currency: 'USD' } },
  { id: 'background', name: 'Background', detail: 'ฉากหลัง', thb: { amountMinor: 130000, currency: 'THB' }, usd: null, startingAt: true },
];

describe('PriceTable', () => {
  it('shows THB and USD for each type', () => {
    render(<PriceTable items={items} />);
    const row = screen.getByRole('row', { name: /Bust Up/ });
    expect(within(row).getByText('2,000 บาท')).toBeInTheDocument();
    expect(within(row).getByText('$60')).toBeInTheDocument();
  });

  it('shows "coming soon" when Akimo has not set a USD price, and + for starting prices', () => {
    render(<PriceTable items={items} />);
    const row = screen.getByRole('row', { name: /Background/ });
    expect(within(row).getByText('1,300+ บาท')).toBeInTheDocument();
    expect(within(row).getByText('เร็ว ๆ นี้')).toBeInTheDocument();
  });
});
