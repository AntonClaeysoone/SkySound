import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoImage from '../public/Assets/03 LOGO SKYSOUND 2026 3.(Sise Small).png';
import './Partners.css';

const partnerLogoModules = import.meta.glob('../public/Partners - logos/PNG/*.png', { eager: true, import: 'default' }) as Record<string, string>;

const priorityOrder = [
  'Kom Op Tegen Kanker',
  'KBC',
  'Vinco',
  'We Invest Leuven',
  'Hertog Jan',
  'Abihome',
  'De Wasstraat',
];

const allPartners = Object.entries(partnerLogoModules)
  .filter(([path]) => !path.includes('NOG NIET'))
  .map(([path, src]) => ({
    name: path.split('/').pop()!.replace('.png', ''),
    src,
  }))
  .sort((a, b) => {
    const aIdx = priorityOrder.findIndex((p) => a.name.toLowerCase().includes(p.toLowerCase()));
    const bIdx = priorityOrder.findIndex((p) => b.name.toLowerCase().includes(p.toLowerCase()));
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return 0;
  });

const Partners = () => {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="partners-page">
      <Navbar />

      <main className="partners-page__content">
        <motion.h1
          className="partners-page__title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TROTSE PARTNERS<br />VAN ONZE VLUCHT
        </motion.h1>

        <motion.div
          className="partners-page__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allPartners.map((partner) => (
            <motion.div
              key={partner.name}
              className="partners-page__card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="partners-page__card-logo"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partner worden? */}
        <motion.div
          className="partner-worden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="partner-worden__title">PARTNER WORDEN?</h2>
          <img src={logoImage} alt="SkySound" className="partner-worden__logo" />
          <p className="partner-worden__subtitle">LAAT HIER JE GEGEVENS ACHTER:</p>
          <form
            className="partner-worden__form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:contact@skysoundfestival.com?subject=Partner worden&body=Email: ${email}`;
            }}
          >
            <input
              type="email"
              placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="partner-worden__input"
              required
            />
            <button type="submit" className="partner-worden__submit">
              Verstuur
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
