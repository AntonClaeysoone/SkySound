import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const Contact = () => {
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
          <h1 className="page__title">Contact</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <h2 className="content-section__title">Get in Touch</h2>
            <p className="content-section__text">
              <a href="mailto:contact@skysoundfestival.com" className="content-section__link content-section__link--large">
                contact@skysoundfestival.com
              </a>
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">For Artists</h2>
            <p className="content-section__text">
              Artists interested in performing at SkySound can reach out via email. We're always open to discovering new music that fits our curation philosophy.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">For Partners</h2>
            <p className="content-section__text">
              Brands, organizations, and collaborators interested in partnering with SkySound are welcome to get in touch. We're looking for partners who share our values and vision.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">General Inquiries</h2>
            <p className="content-section__text">
              Questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </section>

          <section className="content-section">
            <p className="content-section__text" style={{ fontStyle: 'italic', opacity: 0.7 }}>
              Social media links coming soon.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;
