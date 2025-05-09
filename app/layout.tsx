import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STierProgrammer',
  description: 'It\'s me STierProgrammer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}