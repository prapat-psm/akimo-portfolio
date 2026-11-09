import type { Metadata } from 'next';
import { visibleLinks } from '@/content/links';

export const metadata: Metadata = { title: 'ลิงก์' };

export default function LinksPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 text-center">
      <h1 className="text-3xl font-medium">ติดตาม Akimo</h1>
      <ul className="flex flex-col gap-3">
        {visibleLinks.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between rounded-full border-2 px-6 py-3 transition-colors ${
                l.primary ? 'border-peach bg-peach hover:bg-peach-soft' : 'border-dotted border-peach-soft hover:bg-page/60'
              }`}
            >
              <span className="font-display font-medium">{l.label}</span>
              <span className="text-sm text-ink-muted">{l.handle} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
