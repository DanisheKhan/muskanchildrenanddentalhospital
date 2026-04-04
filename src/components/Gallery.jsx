import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlay, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'hospital', label: 'Hospital' },
  { id: 'dental', label: 'Dental' },
  { id: 'ot', label: 'Operation Theatre' },
  { id: 'pediatrics', label: 'Pediatrics' },
];

const images = [
  // Hospital images
  { src: '/hospital/IMG-20260404-WA0013.jpg', category: 'hospital', alt: 'Hospital View' },
  { src: '/hospital/IMG-20260404-WA0014.jpg', category: 'hospital', alt: 'Hospital Interior' },
  { src: '/hospital/IMG-20260404-WA0015.jpg', category: 'hospital', alt: 'Hospital Facility' },
  { src: '/hospital/IMG-20260404-WA0016.jpg', category: 'hospital', alt: 'Hospital Ward' },
  { src: '/hospital/IMG-20260404-WA0018.jpg', category: 'hospital', alt: 'Hospital Equipment' },
  { src: '/hospital/IMG-20260404-WA0022.jpg', category: 'hospital', alt: 'Hospital Lobby' },
  { src: '/hospital/IMG-20260404-WA0023.jpg', category: 'hospital', alt: 'Hospital Reception' },
  { src: '/hospital/IMG-20260404-WA0026.jpg', category: 'hospital', alt: 'Hospital Care' },
  { src: '/hospital/IMG-20260404-WA0029.jpg', category: 'hospital', alt: 'Hospital Room' },
  { src: '/hospital/IMG-20260404-WA0030.jpg', category: 'hospital', alt: 'Hospital Staff' },
  { src: '/hospital/IMG-20260404-WA0038.jpg', category: 'hospital', alt: 'Hospital Services' },
  { src: '/hospital/IMG-20260404-WA0041.jpg', category: 'hospital', alt: 'Hospital Entrance' },
  { src: '/hospital/IMG-20260404-WA0047.jpg', category: 'hospital', alt: 'Hospital Overview' },

  // Dental images
  { src: '/dental/IMG-20260404-WA0006.jpg', category: 'dental', alt: 'Dental Care' },
  { src: '/dental/IMG-20260404-WA0009.jpg', category: 'dental', alt: 'Dental Treatment' },
  { src: '/dental/IMG-20260404-WA0011.jpg', category: 'dental', alt: 'Dental Equipment' },
  { src: '/dental/IMG-20260404-WA0032.jpg', category: 'dental', alt: 'Dental Room' },

  // OT images
  { src: '/ot/IMG-20260404-WA0049.jpg', category: 'ot', alt: 'Operation Theatre' },
  { src: '/ot/IMG-20260404-WA0050.jpg', category: 'ot', alt: 'OT Equipment' },
  { src: '/ot/IMG-20260404-WA0051.jpg', category: 'ot', alt: 'OT Setup' },

  // Pediatrics images
  { src: '/pediatrics/IMG-20260404-WA0028.jpg', category: 'pediatrics', alt: 'Pediatric Care' },
];

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [showVideo, setShowVideo] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const videoRef = useRef(null);

  const filtered = activeTab === 'all'
    ? images
    : images.filter((img) => img.category === activeTab);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + dir + filtered.length) % filtered.length,
    }));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest">
            Gallery & Tour
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--color-heading)] tracking-tight">
            Take a look inside our facility
          </h2>
          <p className="mt-4 text-[var(--color-body)] max-w-xl mx-auto">
            Explore our state-of-the-art facilities and see why families trust us with their care.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-black aspect-video max-w-4xl mx-auto shadow-lg">
            {!showVideo ? (
              /* Thumbnail overlay */
              <button
                onClick={() => setShowVideo(true)}
                className="group absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/80 to-[var(--color-primary)]/60 cursor-pointer z-10"
                aria-label="Play hospital tour video"
              >
                {/* Background poster — first hospital image */}
                <img
                  src="/hospital/IMG-20260404-WA0023.jpg"
                  alt="Hospital Tour"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HiPlay className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" />
                  </div>
                  <span className="text-white/80 text-sm font-medium tracking-wide">
                    Watch Hospital Tour
                  </span>
                </div>
              </button>
            ) : (
              <video
                ref={videoRef}
                src="/video/VID-20250906-WA0002.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[var(--color-bg-muted)] rounded-xl p-1 flex-wrap gap-0.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setShowAll(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-white text-[var(--color-heading)] shadow-sm'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-body)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative aspect-square rounded-xl overflow-hidden border border-[var(--color-border)] cursor-pointer bg-[var(--color-bg-muted)]"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-heading)] text-sm font-semibold rounded-xl hover:bg-[var(--color-bg-muted)] transition-colors"
            >
              {showAll ? (
                <>Show Less</>  
              ) : (
                <>Show More ({filtered.length - INITIAL_COUNT} more photos)</>  
              )}
            </button>
          </motion.div>
        )}

        {/* Photo count */}
        <div className="mt-4 text-center">
          <p className="text-sm text-[var(--color-muted)]">
            Showing {visible.length} of {filtered.length} photos
            {activeTab !== 'all' && (
              <button
                onClick={() => { setActiveTab('all'); setShowAll(false); }}
                className="ml-2 text-[var(--color-accent)] hover:underline font-medium"
              >
                View all →
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <HiX className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-2 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-2 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label="Next image"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={filtered[lightbox.index]?.src}
              src={filtered[lightbox.index]?.src}
              alt={filtered[lightbox.index]?.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/80 text-sm font-medium">
                {filtered[lightbox.index]?.alt}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightbox.index + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
