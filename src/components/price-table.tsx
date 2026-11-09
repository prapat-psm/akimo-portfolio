import type { CommissionType } from '@/content/commissions';
import { formatMoney } from '@/lib/money';

export function PriceTable({ items }: { items: CommissionType[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-peach-soft/70">
      <table className="w-full border-collapse text-left tabular-nums">
        <caption className="sr-only">ราคาค่าจ้างวาด</caption>
        <thead className="font-display text-sm text-ink-muted">
          <tr>
            <th scope="col" className="px-3 py-3 sm:px-5 font-normal">แบบงาน</th>
            <th scope="col" className="px-3 py-3 sm:px-5 text-right font-normal">บาท</th>
            <th scope="col" className="px-3 py-3 sm:px-5 text-right font-normal">USD</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c) => (
            <tr key={c.id} className="border-t border-dotted border-peach-soft">
              <th scope="row" className="px-3 py-4 sm:px-5 font-normal">
                <span className="block font-display text-lg font-medium">{c.name}</span>
                <span className="text-sm text-ink-muted">{c.detail}</span>
              </th>
              <td className="px-3 py-4 sm:px-5 whitespace-nowrap text-right font-display text-lg">
                {formatMoney(c.thb, { startingAt: c.startingAt })}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-right sm:px-5">
                {c.usd ? (
                  <span className="font-display text-lg">{formatMoney(c.usd, { startingAt: c.startingAt })}</span>
                ) : (
                  <span className="text-sm text-ink-muted">เร็ว ๆ นี้</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
