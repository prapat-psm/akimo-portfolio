import Image from 'next/image';
import Link from 'next/link';
import { commissionTypes } from '@/content/commissions';
import type { Artwork } from '@/content/gallery';

const typeName = Object.fromEntries(commissionTypes.map((c) => [c.id, c.name]));

export function GalleryGrid({ items }: { items: Artwork[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-peach-soft px-6 py-12 text-center">
        <p className="font-display text-lg">กำลังจัดเตรียมผลงาน</p>
        <p className="mt-1 text-sm text-ink-muted">
          ระหว่างนี้ดูผลงานทั้งหมดได้ที่ <Link href="/links" className="text-peach-ink underline">VGen และ X</Link>
        </p>
      </div>
    );
  }

  return (
    <ul className="columns-2 gap-4 sm:columns-3 [&>li]:mb-4">
      {items.map((a) => (
        <li key={a.file} className="break-inside-avoid">
          <figure className="overflow-hidden rounded-2xl bg-page">
            <Image
              src={`/gallery/${a.file}`}
              alt={`${a.title} (${typeName[a.type]})`}
              width={a.width}
              height={a.height}
              className="h-auto w-full"
              sizes="(min-width: 640px) 30vw, 50vw"
            />
            <figcaption className="px-3 py-2 text-xs text-ink-muted">{typeName[a.type]}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
