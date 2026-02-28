import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Kathan Shah | Full-Stack Developer',
  description: 'Portfolio of Kathan Shah, Full-Stack Developer focused on scalable web applications.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
