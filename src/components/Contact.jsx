import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
            Reach Out
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-heading)] tracking-tight">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — Get In Touch */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-[var(--color-heading)]">Get In Touch</h3>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-[var(--color-accent)] w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-heading)]">Address</p>
                  <p className="text-sm text-[var(--color-body)] leading-relaxed mt-0.5">
                    1st Floor, Sunrise Apartment, Khadka Chowk, Gadkari Nagar, Khadka Road,
                    Infront Of Kali Mitti Ground, Mohammdi Nagar, Bhusawal — 425201, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-[var(--color-accent)] w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-heading)]">Phone</p>
                  <p className="text-sm text-[var(--color-body)] mt-0.5">
                    <a href="tel:+919823482576" className="hover:text-[var(--color-heading)] transition-colors">
                      +91 9823482576
                    </a>{' '}
                    <span className="text-[var(--color-muted)] block sm:inline mt-0.5 sm:mt-0">(Main / Emergency / Pediatrics)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[var(--color-accent)] w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-heading)]">Email</p>
                  <p className="text-sm text-[var(--color-body)] mt-0.5 break-all">
                    info@muskanhospital.com
                    <br />
                    appointments@muskanhospital.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <FaClock className="text-[var(--color-accent)] w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-heading)]">Hours</p>
                  <p className="text-sm text-[var(--color-body)] mt-0.5">
                    Mon-Sat: 8:00 AM – 8:00 PM · Sunday: 9:00 AM – 2:00 PM · Emergency: 24/7
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-[var(--color-emergency)]/20 bg-[var(--color-emergency-light)] rounded-2xl p-5 text-center"
            >
              <h4 className="font-bold text-[var(--color-emergency)] text-base">Emergency Care</h4>
              <p className="text-xs text-[var(--color-body)] mt-1">
                For life-threatening emergencies, call immediately:
              </p>
              <a
                href="tel:+919823482576"
                className="block text-xl font-extrabold text-[var(--color-emergency)] mt-2 hover:underline"
              >
                +91 9823482576
              </a>
              <span className="inline-block mt-2 px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[10px] font-bold rounded-full">
                Available 24/7
              </span>
            </motion.div>
          </div>

          {/* Right — Find Us */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center mx-auto mb-5">
                <FaMapMarkerAlt className="text-[var(--color-accent)] w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-heading)]">Find Us</h3>
              <p className="text-sm font-medium text-[var(--color-accent)] mt-1">
                Muskan Children's Hospital and Dental Care
              </p>
              <p className="text-sm text-[var(--color-body)] mt-3 leading-relaxed max-w-sm mx-auto">
                1st Floor, Sunrise Apartment, Khadka Chowk, Gadkari Nagar, Khadka Road,
                Infront Of Kali Mitti Ground, Mohammdi Nagar, Bhusawal — 425201, Maharashtra
              </p>
              <a
                href="https://www.google.com/maps/search/Muskan+Children+Hospital+Dental+Care+Bhusawal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-heading)] text-white text-sm font-medium rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                View on Google Maps
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-2xl p-5 text-center">
                <span className="text-3xl font-extrabold text-[var(--color-heading)]">15+</span>
                <p className="mt-1 text-xs text-[var(--color-muted)]">Years Serving</p>
              </div>
              <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] rounded-2xl p-5 text-center">
                <span className="text-3xl font-extrabold text-[var(--color-heading)]">24/7</span>
                <p className="mt-1 text-xs text-[var(--color-muted)]">Emergency Care</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
