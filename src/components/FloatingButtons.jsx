import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 items-end">
      {/* WhatsApp Menu */}
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-end gap-2.5 mb-2.5"
            >
              {/* Pediatrics */}
              <a
                href="https://wa.me/919860833576"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-full bg-[var(--color-whatsapp)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
                aria-label="Pediatrics WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 relative z-10" />
                <span className="absolute right-[calc(100%+12px)] px-2.5 py-1.5 rounded-lg bg-[var(--color-heading)] text-white text-[11px] font-medium whitespace-nowrap shadow-md pointer-events-none">
                  Dr. Tausif (Pediatrics)
                </span>
              </a>

              {/* Dental Care */}
              <a
                href="https://wa.me/917030162446"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-full bg-[var(--color-whatsapp)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
                aria-label="Dental WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 relative z-10" />
                <span className="absolute right-[calc(100%+12px)] px-2.5 py-1.5 rounded-lg bg-[var(--color-heading)] text-white text-[11px] font-medium whitespace-nowrap shadow-md pointer-events-none">
                  Dr. Ramiz (Dental)
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-12 h-12 rounded-full bg-[var(--color-whatsapp)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 focus:outline-none"
          aria-label="Toggle WhatsApp Menu"
        >
          <span className="absolute inset-0 rounded-full bg-[var(--color-whatsapp)] animate-pulse-ring" />
          {isOpen ? (
            <FaTimes className="w-5 h-5 relative z-10" />
          ) : (
            <FaWhatsapp className="w-6 h-6 relative z-10" />
          )}
        </button>
      </div>

      {/* Emergency */}
      <a
        href="tel:+919823482576"
        className="group relative w-12 h-12 rounded-full bg-[var(--color-emergency)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 mt-1"
        aria-label="Emergency Call"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--color-emergency)] animate-pulse-ring" />
        <FaPhoneAlt className="w-4 h-4 relative z-10" />
      </a>
    </div>
  );
}
