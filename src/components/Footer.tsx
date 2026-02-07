import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '../public/Logo_SKYSOUND.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Tickets', href: '/tickets' },
    { name: 'Line-Up', href: '/lineup' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
    { name: 'Practical Info', href: '/practical' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="footer__container">
        <div className="footer__content">
          {/* Logo Section */}
          <motion.div className="footer__section" variants={itemVariants}>
            <Link to="/" className="footer__logo">
              <img src={logoImage} alt="SkySound Festival" />
            </Link>
            <p className="footer__description">
              Belgium's Premier Electronic Music Festival
            </p>
          </motion.div>

          {/* Navigation Section */}
          <motion.div className="footer__section" variants={itemVariants}>
            <h3 className="footer__title">Navigation</h3>
            <nav className="footer__nav">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link
                    to={link.href}
                    className="footer__link"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Legal Section */}
          <motion.div className="footer__section" variants={itemVariants}>
            <h3 className="footer__title">Legal</h3>
            <nav className="footer__nav">
              {legalLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link
                    to={link.href}
                    className="footer__link"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact/Info Section */}
          <motion.div className="footer__section" variants={itemVariants}>
            <h3 className="footer__title">Info</h3>
            <p className="footer__text">8 August 2026</p>
            <p className="footer__text">Erps-Kwerps, Belgium</p>
            <p className="footer__text">
              <a href="mailto:contact@skysoundfestival.com" className="footer__link">
                contact@skysoundfestival.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="footer__bottom"
          variants={itemVariants}
        >
          <p className="footer__copyright">
            © {currentYear} SkySound Festival. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
