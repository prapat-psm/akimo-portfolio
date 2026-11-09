import type { ReactNode } from 'react';

/** Peach pill that opens another site. Ink text on peach (white fails contrast). */
export function ExternalButton({
  href,
  children,
  size = 'md',
}: {
  href: string;
  children: ReactNode;
  size?: 'sm' | 'md';
}) {
  const pad = size === 'sm' ? 'px-4 py-1.5 text-sm' : 'px-6 py-3 text-base';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-peach font-display font-medium text-ink transition-colors hover:bg-peach-soft ${pad}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
