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
    return { name, src, file };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Pyramid layout: VIKTOR headlines on top, supporting artists fill the rows below.
const headliner =
  artists.find((a) => a.file.toUpperCase().includes('VIKTOR')) ?? artists[0];
const supporting = artists.filter((a) => a !== headliner);

const SECOND_ROW_SLOTS = 2;
const THIRD_ROW_SLOTS = 3;

const secondRow = Array.from({ length: SECOND_ROW_SLOTS }, (_, i) => supporting[i] ?? null);
const thirdRow = Array.from(
  { length: THIRD_ROW_SLOTS },
  (_, i) => supporting[SECOND_ROW_SLOTS + i] ?? null
);

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
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  // Each pyramid tier reveals with a staggered slide-up as it scrolls into view.
  const rowVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const rowInView = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.4 },
    variants: rowVariants,
  } as const;

  return (
    <div className="page">
      <Navbar />
      <motion.main
        className="page__content lineup-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page__body" variants={itemVariants}>
          <section className="lineup-cards-section">
            <div className="lineup-pyramid">
              {/* Top — headliner */}
              <motion.div className="lineup-row lineup-row--headliner" {...rowInView}>
                {headliner && (
                  <motion.div
                    className="lineup-card lineup-card--artist"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={headliner.src}
                      alt={headliner.name}
                      className="lineup-card__image"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Second row — 2 slots */}
              <motion.div className="lineup-row lineup-row--second" {...rowInView}>
                {secondRow.map((artist, i) =>
                  artist ? (
                    <motion.div
                      key={artist.name}
                      className="lineup-card lineup-card--artist"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={artist.src} alt={artist.name} className="lineup-card__image" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`row2-tba-${i}`}
                      className="lineup-card"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="lineup-card__text">COMING SOON</span>
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* Third row — 3 slots */}
              <motion.div className="lineup-row lineup-row--third" {...rowInView}>
                {thirdRow.map((artist, i) =>
                  artist ? (
                    <motion.div
                      key={artist.name}
                      className="lineup-card lineup-card--artist"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={artist.src} alt={artist.name} className="lineup-card__image" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`row3-tba-${i}`}
                      className="lineup-card"
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="lineup-card__text">COMING SOON</span>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
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
