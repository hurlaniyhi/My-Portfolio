import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AosInit from '@/components/layout/AosInit';
import { siteConfig } from '@/data/site';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: { icon: '/myLogo.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
