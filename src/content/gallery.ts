export type Artwork = {
  /** File name inside public/gallery/, e.g. "rose-bust.webp". */
  file: string;
  title: string;
  /** Matches a CommissionType id, so clients see what each tier looks like. */
  type: 'close-up' | 'bust-up' | 'half-body' | 'full-body' | 'background';
  width: number;
  height: number;
};

/**
 * Add Akimo's works here (newest first) after copying the image to public/gallery/.
 * Use a resized web copy (about 1200px on the long side, .webp), never the full 2880×3840 file.
 */
export const artworks: Artwork[] = [];
