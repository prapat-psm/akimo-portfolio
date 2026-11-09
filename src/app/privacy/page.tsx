import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'ความเป็นส่วนตัว' };

// Phase 1 collects no personal data. Rewrite this page (PDPA) before phase 2 adds login and bookings.
export default function PrivacyPage() {
  return (
    <div className="flex max-w-[65ch] flex-col gap-4">
      <h1 className="text-3xl font-medium">นโยบายความเป็นส่วนตัว</h1>
      <p className="text-ink-muted">
        เว็บนี้เป็นเว็บแสดงผลงาน ไม่มีการสมัครสมาชิก ไม่มีฟอร์ม และไม่เก็บข้อมูลส่วนตัวของผู้เข้าชม
        ผู้ให้บริการโฮสติ้ง (Cloudflare) อาจบันทึกข้อมูลทางเทคนิค เช่น IP address เพื่อความปลอดภัยของระบบ
      </p>
      <p className="text-ink-muted">
        การจ้างงานและการชำระเงินทำผ่านแพลตฟอร์มภายนอก เช่น VGen ซึ่งมีนโยบายความเป็นส่วนตัวของตัวเอง
      </p>
      <p className="text-sm text-ink-muted">ปรับปรุงล่าสุด 9 พฤศจิกายน 2026</p>
    </div>
  );
}
