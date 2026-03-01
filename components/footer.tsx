import { siteData } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {siteData.name}. Built with Next.js.</p>
      </div>
    </footer>
  );
}
