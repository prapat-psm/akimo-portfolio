import Link from 'next/link';
import { visibleLinks } from '@/content/links';

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t-2 border-dotted border-peach-soft px-5 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {visibleLinks.map((l) => (
          <li key={l.id}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-peach-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Link href="/tos" className="hover:text-peach-ink">เงื่อนไขการจ้าง</Link>
        <Link href="/privacy" className="hover:text-peach-ink">ความเป็นส่วนตัว</Link>
        <span>© Akimo</span>
      </div>
    </footer>
  );
}
