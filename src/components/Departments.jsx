import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaClock, FaCheckCircle } from 'react-icons/fa';

const pediatricServices = [
  'General Pediatric Consultations',
  'Vaccination & Immunization',
  'Growth & Development Monitoring',
  'Pediatric Emergency Care',
  'Newborn & Infant Care',
  'Childhood Nutrition Counseling',
];

const dentalServices = [
  'Preventive Dental Care',
  'Dental Fillings & Restorations',
  'Root Canal Treatment',
  'Dental Crowns & Bridges',
  'Teeth Whitening',
  'Orthodontic Consultations',
  'Oral Surgery',
  'Pediatric Dentistry',
];

const pediatricReasons = [
  'Child-friendly environment designed for comfort',
  'Comprehensive care from newborn to adolescence',
  'Expert guidance on nutrition and development',
  'Emergency pediatric care available 24/7',
];

const dentalTech = [
  'Digital X-rays for precise diagnosis',
  'Modern sterilization equipment',
  'Pain-free treatment options',
  'Family-friendly dental care',
];

function ServiceItem({ service, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05, duration: 0.3 }}
      className="flex items-center gap-3 px-4 py-3 bg-white border border-[var(--color-border-light)] rounded-xl hover:border-[var(--color-border)] transition-colors"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
      <span className="text-base text-[var(--color-heading)]">{service}</span>
    </motion.div>
  );
}

function DoctorCard({ name, title, years, bio, availability }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-8"
    >
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-[var(--color-bg-muted)] border border-[var(--color-border)] flex items-center justify-center mx-auto mb-5">
        <FaUserMd className="w-9 h-9 text-[var(--color-muted)]" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-[var(--color-heading)]">{name}</h3>
        <p className="text-base text-[var(--color-accent)] font-medium mt-0.5">{title}</p>

        <span className="inline-block mt-3 px-3 py-1 bg-[var(--color-bg-muted)] text-[var(--color-heading)] text-xs font-semibold rounded-full">
          {years}+ Years Experience
        </span>

        <p className="mt-4 text-base text-[var(--color-body)] leading-relaxed">{bio}</p>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[var(--color-muted)]">
          <FaClock className="w-3 h-3" />
          <span>{availability}</span>
        </div>

        <a
          href="#appointment"
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-heading)] text-white text-base font-medium rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </motion.div>
  );
}

export default function Departments() {
  const [tab, setTab] = useState('pediatrics');

  return (
    <section id="departments" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-[var(--color-accent)] font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Our Departments
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[var(--color-heading)] tracking-tight">
            Specialized care for your family
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12 px-2" id="doctors">
          <div className="flex w-full max-w-sm bg-[var(--color-bg-muted)] rounded-xl p-1 gap-1">
            <button
              onClick={() => setTab('pediatrics')}
              className={`flex-1 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                tab === 'pediatrics'
                  ? 'bg-white text-[var(--color-heading)] shadow-sm'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-body)]'
              }`}
            >
              <span className="text-base sm:text-sm">👶</span> Pediatrics
            </button>
            <button
              onClick={() => setTab('dental')}
              className={`flex-1 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                tab === 'dental'
                  ? 'bg-white text-[var(--color-heading)] shadow-sm'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-body)]'
              }`}
            >
              <span className="text-base sm:text-sm">🦷</span> Dental
            </button>
          </div>
        </div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          {tab === 'pediatrics' && (
            <motion.div
              key="pediatrics"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:grid lg:grid-cols-5 gap-8"
            >
              {/* Doctor — 2 cols */}
              <div className="lg:col-span-2 lg:order-last">
                <DoctorCard
                  name="Dr. Tosif Khan"
                  title="MD, Pediatrician"
                  years={15}
                  bio="Specializes in comprehensive pediatric care from newborn to adolescent, preventive medicine, and family-centered care."
                  availability="Mon-Sat, 9:00 AM – 6:00 PM"
                />
              </div>

              {/* Services — 3 cols */}
              <div className="lg:col-span-3 space-y-6 lg:order-first">
                <h3 className="text-lg font-bold text-[var(--color-heading)]">Pediatric Services</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {pediatricServices.map((s, i) => (
                    <ServiceItem key={s} service={s} i={i} />
                  ))}
                </div>

                <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-xl p-5">
                  <h4 className="font-semibold text-sm text-[var(--color-heading)] mb-3">
                    Why Choose Our Pediatrics?
                  </h4>
                  <ul className="space-y-2">
                    {pediatricReasons.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-[var(--color-body)]">
                        <FaCheckCircle className="text-[var(--color-accent)] w-3.5 h-3.5 mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'dental' && (
            <motion.div
              key="dental"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:grid lg:grid-cols-5 gap-8"
            >
              {/* Doctor — 2 cols */}
              <div className="lg:col-span-2 lg:order-last">
                <DoctorCard
                  name="Dr. Ramiz Khan"
                  title="MDS, Dental Surgeon"
                  years={12}
                  bio="Provides comprehensive oral healthcare with a focus on gentle treatments for all ages. Committed to preventive care and patient comfort."
                  availability="Mon-Sat, 10:00 AM – 7:00 PM"
                />
              </div>

              {/* Services — 3 cols */}
              <div className="lg:col-span-3 space-y-6 lg:order-first">
                <h3 className="text-lg font-bold text-[var(--color-heading)]">Dental Services</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {dentalServices.map((s, i) => (
                    <ServiceItem key={s} service={s} i={i} />
                  ))}
                </div>

                <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-xl p-5">
                  <h4 className="font-semibold text-sm text-[var(--color-heading)] mb-3">
                    Advanced Technology
                  </h4>
                  <ul className="space-y-2">
                    {dentalTech.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-[var(--color-body)]">
                        <FaCheckCircle className="text-[var(--color-accent)] w-3.5 h-3.5 mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
