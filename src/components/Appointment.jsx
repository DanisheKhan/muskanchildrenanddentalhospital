import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const doctors = {
  Pediatrics: 'Dr. Tosif Khan',
  Dental: 'Dr. Ramiz Khan',
};

export default function Appointment() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    department: 'Pediatrics',
    date: '',
    time: '',
    notes: '',
  });

  const doctor = doctors[form.department];
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumbers = {
      Pediatrics: '919860833576',
      Dental: '917030162446',
    };
    const targetNumber = whatsappNumbers[form.department];
    const msg = `*New Appointment Request — Muskan Hospital*%0A%0A*Patient Name:* ${form.name}%0A*Contact Number:* ${form.phone}%0A*Department:* ${form.department}%0A*Consulting Doctor:* ${doctor}%0A*Preferred Date:* ${form.date}%0A*Preferred Time:* ${form.time}%0A*Additional Notes:* ${form.notes || 'N/A'}`;
    window.open(`https://wa.me/${targetNumber}?text=${msg}`, '_blank');
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition placeholder:text-[var(--color-muted)]';

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
            Schedule a Visit
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-heading)] tracking-tight">
            Book an Appointment
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8">
              <p className="text-4xl mb-4">📋</p>
              <h3 className="text-lg font-bold text-[var(--color-heading)]">How it works</h3>
              <p className="mt-2 text-sm text-[var(--color-body)] leading-relaxed">
                Fill in your details and submit. Your booking request will be sent via WhatsApp and our team will confirm your appointment within minutes.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { time: 'Mon-Sat', hours: '8:00 AM – 8:00 PM' },
                  { time: 'Sunday', hours: '9:00 AM – 2:00 PM' },
                  { time: 'Emergency', hours: '24/7' },
                ].map((h) => (
                  <div
                    key={h.time}
                    className="flex items-center justify-between py-2.5 border-b border-[var(--color-border-light)] last:border-0"
                  >
                    <span className="text-sm font-medium text-[var(--color-heading)]">{h.time}</span>
                    <span className="text-sm text-[var(--color-body)]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 space-y-4"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClasses}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98234 82576"
                className={inputClasses}
              />
            </div>

            {/* Department & Doctor */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                  Department
                </label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option>Pediatrics</option>
                  <option>Dental</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                  Doctor
                </label>
                <input
                  type="text"
                  readOnly
                  value={doctor}
                  className={`${inputClasses} bg-[var(--color-bg-muted)] cursor-default`}
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  min={today}
                  value={form.date}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-sm font-semibold text-[var(--color-heading)] mb-1.5 block">
                Additional Notes <span className="text-[var(--color-muted)] font-normal">(optional)</span>
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="Any specific concerns or requirements..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--color-heading)] text-white font-semibold text-base rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
            >
              <FaWhatsapp size={18} />
              Book via WhatsApp
              <HiArrowRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
