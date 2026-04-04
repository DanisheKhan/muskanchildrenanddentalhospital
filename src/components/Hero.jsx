import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-[var(--color-bg-soft)]"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-20 sm:py-28">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-sm font-semibold rounded-full border border-[var(--color-accent)]/10">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
              Trusted since 15+ years
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--color-heading)] leading-[1.15] sm:leading-[1.1] tracking-tight"
          >
            Muskan Children's Hospital{' '}
            <span className="text-[var(--color-accent)]">&</span> Dental Care
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-[var(--color-body)] max-w-lg leading-relaxed"
          >
            Caring for Little Smiles, Every Step of the Way
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="https://wa.me/919823482576"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 bg-[var(--color-heading)] text-white text-base font-medium rounded-xl hover:bg-[var(--color-primary-light)] transition-colors w-full sm:w-auto"
            >
              <FaWhatsapp size={18} />
              Book via WhatsApp
              <HiArrowRight size={14} />
            </a>
            <a
              href="tel:+919823482576"
              className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 border border-[var(--color-border)] text-[var(--color-heading)] text-base font-medium rounded-xl hover:bg-[var(--color-bg-muted)] transition-colors w-full sm:w-auto"
            >
              <MdPhone size={18} className="text-[var(--color-emergency)]" />
              Emergency Call
            </a>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
