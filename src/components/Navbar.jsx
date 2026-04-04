import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border-light)]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-base font-bold text-[var(--color-heading)] tracking-tight hidden sm:inline">
            Muskan Hospital
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg-muted)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#appointment"
          className="hidden md:inline-flex px-4 py-2 bg-[var(--color-heading)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
        >
          Book Appointment
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[var(--color-heading)] hover:bg-[var(--color-bg-muted)] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? 'max-h-[400px] border-t border-[var(--color-border-light)]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-3 gap-0.5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg-muted)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-4 pb-2">
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-2.5 bg-[var(--color-heading)] text-white text-sm font-medium rounded-lg"
            >
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
