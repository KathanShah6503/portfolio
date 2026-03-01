import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Kathan Shah | Full-Stack Developer',
  description: 'Portfolio of Kathan Shah, Full-Stack Developer focused on scalable web applications.'
};

const themeInitializer = `(() => {
  try {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = initialTheme;
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <Navbar />
        <main className="container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
