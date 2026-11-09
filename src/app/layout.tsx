import type { Metadata } from 'next';
import { Kanit, Noto_Sans_Thai } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

// Phase 1 has no request-time data: fail the build if a route stops being static,
// so the Workers free plan (10 ms CPU per request) only serves prerendered HTML.
export const dynamic = 'error';

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600'],
});

const notoThai = Noto_Sans_Thai({
  variable: '--font-noto-thai',
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: { default: 'Akimo Commission', template: '%s · Akimo Commission' },
  description: 'ผลงาน ราคา และช่องทางจ้างงานวาดของ Akimo',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="th" className={`${kanit.variable} ${notoThai.variable} antialiased`}>
      <body className="min-h-dvh px-4 py-6 sm:py-10">
        <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl border border-peach-soft/60 bg-surface">
          <SiteHeader />
          <main className="flex-1 px-5 py-10 sm:px-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
