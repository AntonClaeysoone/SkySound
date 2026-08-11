import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CATEGORY_LABELS, FestivalPhoto } from '../data/photos';
import './Lightbox.css';

interface LightboxProps {
  photos: FestivalPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ photos, index, onClose, onNavigate }: LightboxProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const photo = photos[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goPrev, goNext]);

  if (!photo) return null;

  const counter = `${String(index + 1).padStart(3, '0')} / ${String(photos.length).padStart(3, '0')}`;

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`Foto ${index + 1} van ${photos.length}: ${photo.alt}`}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <motion.img
          key={photo.file}
          src={photo.src}
          alt={photo.alt}
          width={photo.portrait ? 1280 : 1600}
          height={photo.portrait ? 1600 : 1067}
          className={`lightbox__img${photo.portrait ? ' lightbox__img--portrait' : ''}`}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="lightbox__footer">
          <span className="lightbox__meta mono-label">
            {counter} · {CATEGORY_LABELS[photo.category]}
            {photo.caption ? ` · ${photo.caption}` : ''}
          </span>
          <span className="lightbox__alt">{photo.alt}</span>
        </div>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Sluiten">
          ✕
        </button>
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={goPrev}
          aria-label="Vorige foto"
        >
          ‹
        </button>
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={goNext}
          aria-label="Volgende foto"
        >
          ›
        </button>
      </div>
    </motion.div>
  );
};

export default Lightbox;
