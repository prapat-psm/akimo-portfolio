import Link from 'next/link';
import { hireLink } from '@/content/links';
import { ExternalButton } from './external-button';

const nav = [
  { href: '/gallery', label: 'ผลงาน' },
  { href: '/commission', label: 'ราคา' },
  { href: '/tos', label: 'เงื่อนไข' },
  { href: '/links', label: 'ลิงก์' },
] as const;

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dotted border-peach-soft px-5 py-4 sm:px-10">
      <Link href="/" className="font-display text-2xl font-medium tracking-wide">
        Akimo
      </Link>
      <nav aria-label="เมนูหลัก" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-peach-ink">
            {item.label}
          </Link>
        ))}
        <ExternalButton href={hireLink.href} size="sm">
          จ้างงาน
        </ExternalButton>
      </nav>
    </header>
  );
}
