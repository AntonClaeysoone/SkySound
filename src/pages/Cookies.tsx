import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const Cookies = () => {
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
        ease: 'easeOut',
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
          <h1 className="legal-page__title">Cookie Policy</h1>
          <p className="legal-page__last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div className="legal-page__body" variants={itemVariants}>
          <section className="legal-section">
            <h2 className="legal-section__title">1. What Are Cookies</h2>
            <p className="legal-section__text">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. How We Use Cookies</h2>
            <p className="legal-section__text">
              SkySound Festival uses cookies to enhance your experience on our website. We use cookies for the following purposes:
            </p>
            <ul className="legal-section__list">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off</li>
              <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. Types of Cookies We Use</h2>
            <div className="legal-section__subsection">
              <h3 className="legal-section__subtitle">Session Cookies</h3>
              <p className="legal-section__text">
                These are temporary cookies that are deleted when you close your browser. They help maintain your session while you navigate through the website.
              </p>
            </div>
            <div className="legal-section__subsection">
              <h3 className="legal-section__subtitle">Persistent Cookies</h3>
              <p className="legal-section__text">
                These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Third-Party Cookies</h2>
            <p className="legal-section__text">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may set their own cookies to collect information about your online activities.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Managing Cookies</h2>
            <p className="legal-section__text">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting the ability of websites to set cookies may worsen your overall user experience. You can:
            </p>
            <ul className="legal-section__list">
              <li>Delete cookies that are already on your device</li>
              <li>Set your browser to refuse cookies</li>
              <li>Set your browser to notify you when cookies are being set</li>
            </ul>
            <p className="legal-section__text">
              Please note that if you choose to disable cookies, some features of our website may not function properly.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. Updates to This Policy</h2>
            <p className="legal-section__text">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">7. Contact Us</h2>
            <p className="legal-section__text">
              If you have any questions about our use of cookies, please contact us through our official channels.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Cookies;
