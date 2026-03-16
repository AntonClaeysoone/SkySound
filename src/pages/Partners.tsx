import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './Partners.css';

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

  // Placeholder partner data - replace with actual partner logos/data
  const partners = [
    { name: 'Partner 1', logo: 'P1' },
    { name: 'Partner 2', logo: 'P2' },
    { name: 'Partner 3', logo: 'P3' },
    { name: 'Partner 4', logo: 'P4' },
    { name: 'Partner 5', logo: 'P5' },
    { name: 'Partner 6', logo: 'P6' },
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners];

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
          {/* Partners Marquee Section */}
          <section className="partners-marquee-section">
            <h2 className="partners-marquee__title">Our Partners & Sponsors</h2>
            <div className="partners-marquee">
              <motion.div
                className="partners-marquee__track"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop' as const,
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="partners-marquee__item">
                    <div className="partners-marquee__logo">
                      {partner.logo}
                    </div>
                    <span className="partners-marquee__name">{partner.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Become a Partner Section */}
          <section className="become-partner-section">
            <div className="become-partner__content">
              <h2 className="become-partner__title">Wil je partneren met SKYSOUND?</h2>
              <p className="become-partner__text">
                Je voelt het wel – SKYSOUND is meer dan een festival. Het is een gemeenschap, een ervaring, een moment waar alles samenkomt. Als je je hierin herkent en samen met ons iets moois wilt creëren, dan zijn we benieuwd naar jou.
              </p>
              <p className="become-partner__text">
                We zoeken partners die net als wij geloven in kwaliteit, zorg en intentie. Of je nu actief bent in food & beverage, media, of gewoon een passie hebt voor wat we bouwen – we staan open voor een gesprek.
              </p>
              <a href="mailto:contact@skysoundfestival.com" className="become-partner__button">
                Meld je hier aan
              </a>
            </div>
          </section>

          {/* Additional Info */}
          <section className="content-section">
            <h2 className="content-section__title">Partner Categories</h2>
            <ul className="content-section__list">
              <li><strong>Food & Beverage:</strong> Curated selection of quality options</li>
              <li><strong>Media Partners:</strong> Supporting quality coverage and documentation</li>
              <li><strong>Local Supporters:</strong> Community partners who believe in the vision</li>
            </ul>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Partners;
