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
            <h2 className="content-section__title">WAT IS SKYSOUND?</h2>
            <p className="content-section__text">
              SKYSOUND is een themafestival met als centraal thema luchtvaart. Het event zet in op muziek, ruimte en community. Zo nemen we je mee in een beleving die al start vóór het event zelf: je ticket is een boarding pass, waarmee je virtueel op reis vertrekt in eigen land, naar SKYSOUND Festival. Op het terrein trekken we dit thema uiteraard volledig door als rode draad, maar daarvoor kom je best zelf ontdekken!
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
