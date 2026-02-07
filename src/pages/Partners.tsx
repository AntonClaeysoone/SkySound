import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const Partners = () => {
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
          <h1 className="page__title">Partners</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <h2 className="content-section__title">Partners & Collaborators</h2>
            <p className="content-section__text">
              SkySound is built in collaboration with partners who share our values: quality, care, and intentionality. We're working with food and beverage partners, media supporters, and local collaborators to create an experience that feels cohesive and considered.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Partner Categories</h2>
            <ul className="content-section__list">
              <li><strong>Food & Beverage:</strong> Curated selection of quality options</li>
              <li><strong>Media Partners:</strong> Supporting quality coverage and documentation</li>
              <li><strong>Local Supporters:</strong> Community partners who believe in the vision</li>
            </ul>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Partner Inquiries</h2>
            <p className="content-section__text">
              Interested in partnering with SkySound? We're open to conversations with brands, organizations, and collaborators who align with our values and vision.
            </p>
            <p className="content-section__text">
              Reach out at <a href="mailto:contact@skysoundfestival.com" className="content-section__link">contact@skysoundfestival.com</a> to discuss partnership opportunities.
            </p>
          </section>

          <section className="content-section">
            <p className="content-section__text" style={{ fontStyle: 'italic', opacity: 0.7 }}>
              Partner announcements will be shared as partnerships are confirmed.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Partners;
