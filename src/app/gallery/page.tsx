import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery-grid';
import { artworks } from '@/content/gallery';

export const metadata: Metadata = { title: 'ผลงาน' };

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">ผลงาน</h1>
      <GalleryGrid items={artworks} />
    </div>
  );
}
