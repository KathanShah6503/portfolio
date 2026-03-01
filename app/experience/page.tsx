import { experience } from '@/data/site';

export default function ExperiencePage() {
  return (
    <section>
      <h1>Work Experience</h1>
      {experience.map((item) => (
        <article className="experience-card" key={item.company}>
          <div className="row-between">
            <h2>{item.company}</h2>
            <span>{item.period}</span>
          </div>
          <p><strong>{item.role}</strong> · {item.location}</p>
          <ul>
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
