import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { end: 15, suffix: '+', label: 'Years Serving', desc: 'Trusted by Bhusawal families' },
  { end: 2, suffix: '', label: 'Expert Doctors', desc: 'Specialized practitioners' },
  { end: 2, suffix: '', label: 'Specialties', desc: 'Pediatrics & Dental' },
  { end: 24, suffix: '/7', label: 'Emergency Care', desc: 'Always available' },
];

function Counter({ end, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(1200 / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white border-y border-[var(--color-border-light)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-5xl font-extrabold text-[var(--color-heading)]">
              <Counter end={s.end} suffix={s.suffix} inView={inView} />
            </p>
            <p className="text-sm sm:text-base font-semibold text-[var(--color-heading)] mt-1">{s.label}</p>
            <p className="text-[11px] sm:text-sm text-[var(--color-muted)] mt-0.5 leading-snug sm:leading-normal">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
