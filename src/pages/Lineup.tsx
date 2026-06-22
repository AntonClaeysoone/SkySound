import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './Lineup.css';

const artistArtworkModules = import.meta.glob('../public/Line-Up/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const findArtwork = (keyword: string) => {
  const entry = Object.entries(artistArtworkModules).find(([path]) =>
    path.toUpperCase().includes(keyword.toUpperCase())
  );
  return entry?.[1] ?? '';
};

// Explicit billing order. Only the revealed acts show a name + artwork;
// the rest stay locked as "secret" teasers until announced.
const artists = [
  { keyword: 'VIKTOR', name: 'Viktor', headliner: true, secret: false },
  { keyword: 'LICIOUS', name: 'DJ Licious', headliner: false, secret: false },
  { keyword: 'MANUALS', name: 'Manuals & Meaghan', headliner: false, secret: false },
  { keyword: 'SECRET-1', name: '', headliner: false, secret: true },
  { keyword: 'SECRET-2', name: '', headliner: false, secret: true },
  { keyword: 'SECRET-3', name: '', headliner: false, secret: true },
]
  .map((a) => ({ ...a, src: a.secret ? '' : findArtwork(a.keyword) }))
  .filter((a) => a.secret || a.src);

const Lineup = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Hovered artist drives the expand + dim-the-rest effect.
  const [active, setActive] = useState<number | null>(null);

  const rowVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
        <motion.div className="page__body" variants={itemVariants}>
          <section className="lineup-hover-section">
            <motion.ul
              className={`lineup-list ${active !== null ? 'is-hovering' : ''}`}
              onMouseLeave={() => setActive(null)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.08 }}
            >
              {artists.map((artist, i) => (
                <motion.li
                  key={artist.keyword}
                  className={`lineup-list__row ${artist.headliner ? 'is-headliner' : ''} ${
                    artist.secret ? 'is-secret' : ''
                  } ${active === i ? 'is-active' : ''}`}
                  variants={rowVariants}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="lineup-list__index">{String(i + 1).padStart(2, '0')}</span>

                  <div className="lineup-list__thumb">
                    {artist.secret ? (
                      <span className="lineup-list__lock" aria-hidden>
                        ?
                      </span>
                    ) : (
                      <img src={artist.src} alt={artist.name} />
                    )}
                  </div>

                  <span className="lineup-list__name">
                    {artist.secret ? 'Coming Soon' : artist.name}
                  </span>
                  <span className="lineup-list__arrow" aria-hidden>
                    →
                  </span>
                </motion.li>
              ))}
            </motion.ul>
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
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Lineup;
