import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const About = () => {
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
        className="page__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page__header" variants={itemVariants}>
          <h1 className="page__title">About SkySound</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <h2 className="content-section__title">Why SkySound Exists</h2>
            <p className="content-section__text">
              SkySound was born from a simple observation: the best festival experiences happen when music, space, and community align. Too often, electronic music events prioritize scale over atmosphere, quantity over quality. We wanted to create something different.
            </p>
            <p className="content-section__text">
              Our vision is straightforward—an intimate open-air setting where every artist is chosen with intention, where the crowd size allows for genuine connection, and where the focus remains on the music and the moment.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">What Makes This Different</h2>
            <p className="content-section__text">
              We're not trying to be everything to everyone. SkySound is built for those who value:
            </p>
            <ul className="content-section__list">
              <li><strong>Quality curation:</strong> Every artist on the line-up is there for a reason, not to fill space.</li>
              <li><strong>Intimate scale:</strong> 800–1500 people means you can move, breathe, and actually experience the music.</li>
              <li><strong>Care in details:</strong> From sound quality to site layout, we're thinking about your experience, not just ticket sales.</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">First Edition, Clear Intention</h2>
            <p className="content-section__text">
              This is our first year. That's not a limitation—it's an opportunity. Without legacy expectations, we can focus purely on what matters: creating an exceptional day of music in an intimate setting.
            </p>
            <p className="content-section__text">
              We're building SkySound with intention, not hype. Every decision is made with the experience in mind. This first edition sets the foundation for what SkySound will become.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
