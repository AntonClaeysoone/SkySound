import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const Practical = () => {
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
          <h1 className="page__title">Practical Info</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <h2 className="content-section__title">Date & Timetable</h2>
            <p className="content-section__text">
              <strong>8 August 2026</strong>
            </p>
            <p className="content-section__text">
              The festival runs throughout the day and into the evening. Exact set times and schedule will be announced closer to the event date.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Location</h2>
            <p className="content-section__text">
              <strong>Erps-Kwerps, Belgium</strong>
            </p>
            <p className="content-section__text">
              An open-air setting that balances accessibility with atmosphere. Specific venue details and directions will be provided to ticket holders ahead of the event.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Capacity & Crowd</h2>
            <p className="content-section__text">
              SkySound is designed for <strong>800–1500 people</strong>. This isn't a mass event—it's an intimate gathering where you'll have space to move, connect, and fully experience the music.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">What to Expect Musically</h2>
            <p className="content-section__text">
              Electronic music, broadly defined. We're curating a line-up that prioritizes quality and flow over genre labels. Expect a day of carefully selected artists whose sounds complement each other, creating a cohesive experience rather than a random collection of acts.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">More Details Coming</h2>
            <p className="content-section__text">
              As we get closer to August 2026, we'll share more specific information about logistics, facilities, and what to bring. For now, know that we're building this with care and attention to detail.
            </p>
            <p className="content-section__text">
              Sign up for notifications to be the first to know when new information is available.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Practical;
