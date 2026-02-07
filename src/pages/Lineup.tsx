import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const Lineup = () => {
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="page">
      <Navbar />
      <motion.main
        className="page__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page__header" variants={itemVariants}>
          <h1 className="page__title">Line-Up</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
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
            <h2 className="content-section__title">Line-Up Status</h2>
            <p className="content-section__text">
              <strong>Announcement coming soon.</strong>
            </p>
            <p className="content-section__text">
              We're finalizing the line-up and will share it when it's ready. No teasers, no partial reveals—just a complete announcement when we have something meaningful to share.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">What to Expect</h2>
            <p className="content-section__text">
              When the line-up is announced, you'll see a carefully curated selection of artists. The focus will be on quality and cohesion, not on how many names we can list. Each artist has been chosen because they fit the SkySound vision.
            </p>
          </section>

          <section className="content-section">
            <div className="lineup-placeholders">
              <div className="lineup-placeholder">
                <div className="lineup-placeholder__image"></div>
                <div className="lineup-placeholder__name">Artist</div>
              </div>
              <div className="lineup-placeholder">
                <div className="lineup-placeholder__image"></div>
                <div className="lineup-placeholder__name">Artist</div>
              </div>
              <div className="lineup-placeholder">
                <div className="lineup-placeholder__image"></div>
                <div className="lineup-placeholder__name">Artist</div>
              </div>
              <div className="lineup-placeholder">
                <div className="lineup-placeholder__image"></div>
                <div className="lineup-placeholder__name">Artist</div>
              </div>
            </div>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Lineup;
