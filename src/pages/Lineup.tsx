import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './Lineup.css';

const artistArtworkModules = import.meta.glob('../public/Line-Up/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const artists = Object.entries(artistArtworkModules)
  .map(([path, src]) => {
    const file = path.split('/').pop() ?? '';
    const name = file.replace(/\.[^.]+$/, '').split(' - ')[0].trim();
    return { name, src };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const TOTAL_SLOTS = 8;
const tbaSlots = Math.max(0, TOTAL_SLOTS - artists.length);

const Lineup = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="page">
      <Navbar />
      <motion.main
        className="page__content lineup-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page__header" variants={itemVariants}>
          <h1 className="page__title">ARTIST LINE UP</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="lineup-cards-section">
            <motion.div
              className="lineup-cards-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {artists.map((artist) => (
                <motion.div
                  key={artist.name}
                  className="lineup-card lineup-card--artist"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={artist.src}
                    alt={artist.name}
                    className="lineup-card__image"
                  />
                </motion.div>
              ))}
              {Array.from({ length: tbaSlots }).map((_, i) => (
                <motion.div
                  key={`tba-${i}`}
                  className="lineup-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="lineup-card__text">MORE TBA</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Our Curation Philosophy</h2>
            <p className="content-section__text">
              Every artist on the SkySound line-up is there for a reason. We're not interested in filling slots or chasing trends. Instead, we're building a day of music where each set complements the next, where the flow matters as much as the individual names.
            </p>
            <p className="content-section__text">
              Quality over quantity. Intention over hype. That's how we're approaching the line-up.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">What to Expect</h2>
            <p className="content-section__text">
              When the line-up is announced, you'll see a carefully curated selection of artists. The focus will be on quality and cohesion, not on how many names we can list. Each artist has been chosen because they fit the SkySound vision.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Lineup;
