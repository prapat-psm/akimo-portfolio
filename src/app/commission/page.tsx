import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalButton } from '@/components/external-button';
import { PriceTable } from '@/components/price-table';
import { commissionTerms, commissionTypes } from '@/content/commissions';
import { hireLink } from '@/content/links';

export const metadata: Metadata = { title: 'ราคา' };

export default function CommissionPage() {
  const t = commissionTerms;
  const steps = [
    'ส่งรายละเอียดงานผ่าน VGen หรือ DM',
    'Akimo ส่ง rough sketch ให้ดู',
    `โอนมัดจำ ${t.depositPercent}% แล้วเริ่มลงสี`,
    `ชำระส่วนที่เหลือ แล้วรับไฟล์ ${t.output.width}×${t.output.height} px`,
  ];

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium">ราคาค่าจ้าง</h1>
        <p className="max-w-[60ch] text-ink-muted">
          ราคาต่อ 1 ตัวละคร งานใช้เชิงพาณิชย์คิด ×{t.commercialMultiplier} ระยะเวลา {t.deliveryDays.min}–
          {t.deliveryDays.max} วัน
        </p>
      </section>

      <PriceTable items={commissionTypes} />

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">ขั้นตอนการจ้าง</h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-2xl bg-page/60 px-4 py-3">
              <span className="font-display text-peach-ink">{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-ink-muted">
          อ่าน<Link href="/tos" className="text-peach-ink underline">เงื่อนไขการจ้าง</Link>ก่อนส่งงานทุกครั้ง
        </p>
        <div>
          <ExternalButton href={hireLink.href}>จ้างงานผ่าน VGen</ExternalButton>
        </div>
      </section>
    </div>
  );
}
