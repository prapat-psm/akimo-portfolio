import type { Metadata } from 'next';
import { commissionTerms } from '@/content/commissions';

export const metadata: Metadata = { title: 'เงื่อนไขการจ้าง' };

export default function TosPage() {
  const t = commissionTerms;
  const terms = [
    { title: 'การใช้งาน', body: `งานส่วนตัวใช้ราคาปกติ งานเชิงพาณิชย์คิดราคา ×${t.commercialMultiplier}` },
    { title: 'การชำระเงิน', body: `มัดจำ ${t.depositPercent}% หลังได้ดู rough sketch และชำระส่วนที่เหลือก่อนรับไฟล์เต็ม` },
    { title: 'ระยะเวลา', body: `ประมาณ ${t.deliveryDays.min}–${t.deliveryDays.max} วันหลังได้รับมัดจำ` },
    { title: 'ไฟล์ที่ได้รับ', body: `ขนาด ${t.output.width}×${t.output.height} px` },
    // TODO(akimo): replace with the cancellation / deposit refund text from the original TOS.
    { title: 'การยกเลิกและคืนมัดจำ', body: 'กรุณาสอบถาม Akimo ก่อนจ้างงาน' },
  ];

  return (
    <div className="flex max-w-[65ch] flex-col gap-6">
      <h1 className="text-3xl font-medium">เงื่อนไขการจ้าง</h1>
      <dl className="flex flex-col divide-y divide-dotted divide-peach-soft">
        {terms.map((term) => (
          <div key={term.title} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-display font-medium">{term.title}</dt>
            <dd className="text-ink-muted">{term.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
