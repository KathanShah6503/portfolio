import { projects } from '@/data/site';

export default function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <div className="row-between">
              <h2>{project.name}</h2>
              <span>{project.period}</span>
            </div>
            <p>{project.summary}</p>
            <p><strong>Tech:</strong> {project.stack.join(', ')}</p>
            <p className="muted">Project links can be added once provided.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
