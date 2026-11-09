import Link from 'next/link';
import { ExternalButton } from '@/components/external-button';
import { GalleryGrid } from '@/components/gallery-grid';
import { commissionTerms, commissionTypes } from '@/content/commissions';
import { artworks } from '@/content/gallery';
import { hireLink } from '@/content/links';
import { formatMoney } from '@/lib/money';

export default function HomePage() {
  const from = commissionTypes.reduce((min, c) => (c.thb.amountMinor < min.thb.amountMinor ? c : min));
  const { deliveryDays } = commissionTerms;

  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-5">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-peach-ink">Illustration commission</p>
        <h1 className="text-4xl font-medium leading-tight sm:text-5xl">Akimo รับวาดภาพตัวละครตามสั่ง</h1>
        <p className="max-w-[60ch] text-lg text-ink-muted">
          ดูผลงาน ราคา และเงื่อนไขได้ในเว็บนี้ เริ่มต้นที่ {formatMoney(from.thb)} ใช้เวลาประมาณ {deliveryDays.min}–
          {deliveryDays.max} วัน
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ExternalButton href={hireLink.href}>จ้างงานผ่าน VGen</ExternalButton>
          <Link href="/commission" className="font-display text-peach-ink underline underline-offset-4">
            ดูราคาทั้งหมด
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-medium">ผลงานล่าสุด</h2>
          {artworks.length > 0 && (
            <Link href="/gallery" className="text-sm text-peach-ink underline underline-offset-4">
              ดูทั้งหมด
            </Link>
          )}
        </div>
        <GalleryGrid items={artworks.slice(0, 6)} />
      </section>
    </div>
  );
}
