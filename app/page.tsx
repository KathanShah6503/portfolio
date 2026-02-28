import Link from 'next/link';
import { siteData, skills } from '@/data/site';

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Open to opportunities</p>
      <h1>{siteData.name}</h1>
      <h2>{siteData.title}</h2>
      <p>{siteData.bio}</p>
      <div className="cta-row">
        <Link href="/projects" className="button primary">View Projects</Link>
        <Link href="/resume" className="button secondary">Download Resume</Link>
      </div>
      <div className="card-grid">
        <article className="card">
          <h3>What I build</h3>
          <p>{siteData.summary}</p>
        </article>
        <article className="card">
          <h3>Core Stack</h3>
          <p>{skills.frontend.slice(0, 4).join(' • ')}</p>
        </article>
      </div>
    </section>
  );
}
