import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import photoPlane from '../public/SkySound2026/web/20260808_Skysound-12.jpg';
import './Page.css';
import './About.css';

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
          <h1 className="page__title">WAT IS SKYSOUND?</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <p className="content-section__text">
              SKYSOUND is een vernieuwend themafestival dat muziek, beleving en community samenbrengt in één totaalervaring, met luchtvaart als centraal thema.
            </p>
            <p className="content-section__text">
              Vanaf het moment dat je je ticket ontvangt, start de beleving. Je ticket fungeert als een boarding pass, waarmee je symbolisch vertrekt op reis. Geen klassieke festivalervaring, maar een doordachte journey waarin bezoekers van begin tot einde worden ondergedompeld in het thema. Op het terrein zelf wordt deze lijn volledig doorgetrokken, met oog voor detail in aankleding, sfeer en concept.
            </p>
            <p className="content-section__text">
              SKYSOUND wil méér zijn dan enkel een festival. Het is een plek waar mensen samenkomen, verbinden en herinneringen creëren. Tegelijk draagt het event een duidelijke maatschappelijke missie: met de organisatie steunen we Kom op tegen Kanker.
            </p>
            <p className="content-section__text">
              De roots van SKYSOUND liggen in de covidperiode, waarin het concept ontstond als livestreamplatform. In een tijd waarin live events stil lagen, bood SKYSOUND artiesten een podium vanuit unieke locaties in Leuven, zoals M Leuven, OPEK aan de Vaart en de Velodroom. Artiesten zoals Amber Broos, Voltage en Tola OG maakten hier deel van uit en bereikten zo toch hun publiek.
            </p>
            <p className="content-section__text">
              Vandaag zet SKYSOUND de volgende stap, met zijn allereerste fysieke editie. Deze gaat door in Erps-Kwerps, op een unieke locatie onder de aanvliegroute van Zaventem. Dit zorgt voor een uitzonderlijke setting waarbij vliegtuigen op lage hoogte overvliegen terwijl bezoekers genieten van muziek en sfeer op het terrein.
            </p>
            <motion.figure className="about-photo" variants={itemVariants}>
              <img
                src={photoPlane}
                alt="Dj-duo viert achter de decks terwijl een lijnvliegtuig laag overvliegt"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mono-label">
                Overhead pass · Approach BRU · SKY26
              </figcaption>
            </motion.figure>
            <hr className="flight-divider about-divider" aria-hidden />
            <p className="content-section__text">
              Met een zorgvuldig gecureerde line-up, een sterk uitgewerkt thema en een duidelijke visie wil SKYSOUND een ervaring neerzetten die blijft hangen — een festival dat je niet alleen bezoekt, maar écht beleeft.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
