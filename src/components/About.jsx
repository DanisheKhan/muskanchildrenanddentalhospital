import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-bg-muted)] border border-[var(--color-border)] flex items-center justify-center">
            <div className="text-center px-8">
              <p className="text-6xl mb-3">🏥</p>
              <p className="text-base text-[var(--color-muted)]">Dedicated to your family&apos;s health</p>
            </div>
          </div>
          {/* Badge */}
          <div className="absolute -bottom-3 -right-3 bg-white border border-[var(--color-border)] rounded-xl shadow-sm px-4 py-2.5">
            <span className="text-sm font-bold text-[var(--color-heading)]">15+ Years</span>
            <p className="text-[10px] text-[var(--color-muted)]">of Trusted Care</p>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-heading)] leading-tight tracking-tight">
            Expert care for children & families
          </h2>
          <p className="mt-5 text-[var(--color-body)] leading-relaxed">
            Muskan Children's Hospital and Dental Care has been a cornerstone of healthcare
            in Bhusawal for over 15 years. Our team of dedicated specialists provides
            comprehensive pediatric and dental care in a warm, welcoming environment.
          </p>
          <p className="mt-4 text-[var(--color-body)] leading-relaxed">
            From routine check-ups and vaccinations to advanced dental treatments, we
            combine medical expertise with compassionate care to ensure the best outcomes
            for every patient — from newborns to adults.
          </p>

          <div className="mt-8 flex gap-3">
            <div className="flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-lg px-3.5 py-2.5">
              <span className="text-base">👶</span>
              <span className="text-sm font-semibold text-[var(--color-heading)]">Pediatrics</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-lg px-3.5 py-2.5">
              <span className="text-base">🦷</span>
              <span className="text-sm font-semibold text-[var(--color-heading)]">Dentistry</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
