import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-base font-bold !text-white">Muskan Hospital</span>
            </div>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Caring for Little Smiles, Every Step of the Way.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4 !text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4 !text-white/40">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <FaPhoneAlt className="w-3 h-3 mt-1 shrink-0 text-[var(--color-accent)]" />
                <a href="tel:+919823482576" className="hover:text-white transition-colors">
                  +91 9823482576
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <FaEnvelope className="w-3 h-3 mt-1 shrink-0 text-[var(--color-accent)]" />
                <span>info@muskanhospital.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <FaMapMarkerAlt className="w-3 h-3 mt-1 shrink-0 text-[var(--color-accent)]" />
                <span>Khadka Chowk, Bhusawal — 425201</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4 !text-white/40">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Mon-Sat: 8AM – 8PM</li>
              <li>Sunday: 9AM – 2PM</li>
              <li className="text-[var(--color-accent-light)] font-medium">Emergency: 24/7</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-center text-xs text-white/30">
          © 2025 Muskan Children's Hospital and Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
