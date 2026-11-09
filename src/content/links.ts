export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  /** null = waiting for Akimo to confirm the URL; the link is hidden until set. */
  href: string | null;
  primary?: boolean;
};

export const socialLinks: SocialLink[] = [
  { id: 'vgen', label: 'VGen', handle: 'akimoP423', href: 'https://vgen.co/akimoP423/portfolio', primary: true },
  { id: 'x', label: 'X (Twitter)', handle: '@AkimoP423', href: 'https://x.com/AkimoP423' },
  { id: 'waiting-list', label: 'Waiting List', handle: 'คิวงานปัจจุบัน', href: 'https://akimowaitinglist.carrd.co/' },
  { id: 'facebook', label: 'Facebook', handle: 'Akimo', href: null },
];

export const visibleLinks = socialLinks.filter((l): l is SocialLink & { href: string } => l.href !== null);

export const hireLink = visibleLinks.find((l) => l.primary)!;
