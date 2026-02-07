import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const Privacy = () => {
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
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.div>

        <motion.div className="legal-page__body" variants={itemVariants}>
          <section className="legal-section">
            <h2 className="legal-section__title">1. Introduction</h2>
            <p className="legal-section__text">
              SkySound Festival ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or attend our festival.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">2. Information We Collect</h2>
            <p className="legal-section__text">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="legal-section__list">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and payment information when you purchase tickets</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, and access times</li>
              <li><strong>Financial Data:</strong> Payment information necessary to process your ticket purchase</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">3. How We Use Your Information</h2>
            <p className="legal-section__text">
              We use the information we collect to:
            </p>
            <ul className="legal-section__list">
              <li>Process your ticket purchases and manage your account</li>
              <li>Send you updates about the festival, including schedule changes and important announcements</li>
              <li>Improve our website and festival experience</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">4. Disclosure of Your Information</h2>
            <p className="legal-section__text">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="legal-section__list">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law or protect our rights</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, such as payment processing and email delivery</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with any merger or sale of company assets</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">5. Data Security</h2>
            <p className="legal-section__text">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">6. Your Rights</h2>
            <p className="legal-section__text">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="legal-section__list">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section__title">7. Contact Us</h2>
            <p className="legal-section__text">
              If you have questions or comments about this Privacy Policy, please contact us through our official channels.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Privacy;
