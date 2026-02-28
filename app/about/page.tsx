import { siteData, skills } from '@/data/site';

export default function AboutPage() {
  return (
    <section>
      <h1>About</h1>
      <p>{siteData.bio}</p>
      <p>I am based in {siteData.location} and currently focused on backend-heavy full-stack roles.</p>

      <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Frontend</h3>
          <p>{skills.frontend.join(', ')}</p>
        </div>
        <div>
          <h3>Backend</h3>
          <p>{skills.backend.join(', ')}</p>
        </div>
        <div>
          <h3>Databases</h3>
          <p>{skills.databases.join(', ')}</p>
        </div>
        <div>
          <h3>Cloud & DevOps</h3>
          <p>{skills.cloudDevops.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}
