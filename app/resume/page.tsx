import Link from 'next/link';

export default function ResumePage() {
  return (
    <section>
      <h1>Resume</h1>
      <p>Your resume can be hosted in <code>/public/resume.pdf</code> and downloaded from below.</p>
      <Link className="button primary" href="/resume.pdf" target="_blank">
        Open Resume PDF
      </Link>
      <p className="muted">Replace placeholder by adding your latest resume file as <code>public/resume.pdf</code>.</p>
    </section>
  );
}
