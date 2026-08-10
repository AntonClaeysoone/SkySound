import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './Photos.css';

// Foto's die in src/public/Photos/ worden geplaatst, verschijnen hier automatisch.
const photoModules = import.meta.glob('../public/Photos/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const photos = Object.entries(photoModules).map(([path, src]) => ({
  path,
  src,
  name: path.split('/').pop() ?? 'SkySound 2026',
}));

const Photos = () => {
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
          <h1 className="page__title">Foto's</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          {photos.length > 0 ? (
            <section className="content-section">
              <h2 className="content-section__title">SkySound 2026</h2>
              <div className="photos-grid">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.path}
                    className="photos-grid__item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                  >
                    <img src={photo.src} alt={`SkySound 2026 - ${photo.name}`} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </section>
          ) : (
            <section className="content-section">
              <h2 className="content-section__title">Binnenkort online</h2>
              <p className="content-section__text">
                Wat een vlucht was dat! De foto's van <strong>SkySound 2026</strong> worden
                momenteel verzameld en verschijnen hier binnenkort. Kom dus zeker nog eens terug —
                of hou onze socials in de gaten voor de eerste beelden.
              </p>
              <div className="photos-placeholder-grid" aria-hidden>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="photos-placeholder">
                    <span className="photos-placeholder__icon">✈</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Photos;
