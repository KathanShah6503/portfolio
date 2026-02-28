import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link href="/" className="brand">Kathan Shah</Link>
        <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
