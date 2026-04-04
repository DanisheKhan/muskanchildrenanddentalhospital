import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919823482576"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-[var(--color-whatsapp)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
        aria-label="Book Appointment via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--color-whatsapp)] animate-pulse-ring" />
        <FaWhatsapp className="w-5 h-5 relative z-10" />
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[var(--color-heading)] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Book Appointment
        </span>
      </a>

      {/* Emergency */}
      <a
        href="tel:+919823482576"
        className="group relative w-12 h-12 rounded-full bg-[var(--color-emergency)] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
        aria-label="Emergency Call"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--color-emergency)] animate-pulse-ring" />
        <FaPhoneAlt className="w-4 h-4 relative z-10" />
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[var(--color-heading)] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Emergency Call
        </span>
      </a>
    </div>
  );
}
