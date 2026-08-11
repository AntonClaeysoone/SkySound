import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import { CATEGORY_LABELS, festivalPhotos, PhotoCategory } from '../data/photos';
import './Page.css';
import './Photos.css';

type Filter = 'all' | PhotoCategory;

const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'Alle' },
  { value: 'night', label: CATEGORY_LABELS.night },
  { value: 'golden', label: CATEGORY_LABELS.golden },
  { value: 'crew', label: CATEGORY_LABELS.crew },
  { value: 'passengers', label: CATEGORY_LABELS.passengers },
];

const Photos = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastTileRef = useRef<HTMLElement | null>(null);

  const visiblePhotos = useMemo(
    () => (filter === 'all' ? festivalPhotos : festivalPhotos.filter((p) => p.category === filter)),
    [filter]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const closeLightbox = () => {
    setOpenIndex(null);
    lastTileRef.current?.focus();
  };

  return (
    <div className="page">
      <Navbar />
      <motion.main
        className="page__content photos-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page__header" variants={itemVariants}>
          <h1 className="page__title">Flight log</h1>
          <p className="photos-strip mono-label">
            SKY26 · Geland 08 aug 2026 · {festivalPhotos.length} beelden
          </p>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <div className="photos-filters" role="group" aria-label="Filter foto's">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className={`photos-filter${filter === f.value ? ' photos-filter--active' : ''}`}
                  aria-pressed={filter === f.value}
                  onClick={() => {
                    setFilter(f.value);
                    setOpenIndex(null);
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="photos-grid">
              <AnimatePresence mode="popLayout">
                {visiblePhotos.map((photo, index) => (
                  <motion.button
                    key={photo.file}
                    type="button"
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3 }}
                    className="photos-grid__item"
                    onClick={(event) => {
                      lastTileRef.current = event.currentTarget;
                      setOpenIndex(index);
                    }}
                    aria-label={`Bekijk foto: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      width={photo.portrait ? 1280 : 1600}
                      height={photo.portrait ? 1600 : 1067}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="photos-grid__caption mono-label" aria-hidden>
                      {photo.caption ?? `SKY26 · ${photo.file.replace(/\D/g, '').slice(-2)}`}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </motion.div>
      </motion.main>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            photos={visiblePhotos}
            index={openIndex}
            onClose={closeLightbox}
            onNavigate={setOpenIndex}
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Photos;
