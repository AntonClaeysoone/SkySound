import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const Terms = () => {
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

  return (
    <div className="legal-page">
      <Navbar />
      <motion.main
        className="legal-page__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="legal-page__header" variants={itemVariants}>
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div className="legal-page__body" variants={itemVariants}>
          <section className="legal-section">
            <h2 className="legal-section__title">1. Acceptance of Terms</h2>
            <p className="legal-section__text">
              By accessing and using the SkySound Festival website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. Use License</h2>
            <p className="legal-section__text">
              Permission is granted to temporarily download one copy of the materials on SkySound Festival's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="legal-section__list">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. Ticket Purchase and Refund Policy</h2>
            <p className="legal-section__text">
              All ticket sales are final. Refunds will only be issued in the event of festival cancellation. In case of postponement, tickets will remain valid for the rescheduled date. SkySound Festival reserves the right to refuse admission or eject any person whose conduct is deemed by management to be disorderly or who fails to comply with the terms and conditions herein.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Event Terms and Conditions</h2>
            <p className="legal-section__text">
              By attending SkySound Festival, you agree to:
            </p>
            <ul className="legal-section__list">
              <li>Follow all festival rules and regulations</li>
              <li>Respect other attendees and festival staff</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not bring prohibited items into the festival grounds</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Limitation of Liability</h2>
            <p className="legal-section__text">
              SkySound Festival shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service or attendance at the festival.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. Contact Information</h2>
            <p className="legal-section__text">
              If you have any questions about these Terms of Service, please contact us through our official channels.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Terms;
