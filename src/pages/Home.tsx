import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroLogo from '../public/Assets/01 LOGO SKYSOUND 2026 3.0(Sise Large).png';
import heroVideo from '../public/Assets/vlaggen in de wind Resolutie.mp4';
import logoSmall from '../public/Assets/03 LOGO SKYSOUND 2026 3.(Sise Small).png';
import ticketLayout from '../public/Assets/TICKET LAY OUT - 2026.png';
import komOpTegenKanker from '../public/Assets/Kom Op Tegen Kanker.png';
import teamBanner from '../public/Assets/TEAM BANNER - SKYSOUND 26.jpg';
import gemeenteKortenberg from '../public/Assets/Gemeente Kortenberg.png';
import thePowerShop from '../public/Assets/The Power Shop.png';
import uitleendienst from '../public/Assets/Uitleendienst - Vlaamsbrabant.png';
import events4 from '../public/Assets/4-Events.png';
import dreamSupport from '../public/Assets/Dream Support.png';
import kbc from '../public/Assets/KBC.png';
import leonidas from '../public/Assets/Leonidas.png';
import './Home.css';

const TICKET_URL = 'https://shop.ticket.monster/event/skysound-festival-jzuhmm?useEmbed=true';

const partnerLogos = [
  { name: 'Gemeente Kortenberg', src: gemeenteKortenberg },
  { name: 'The Power Shop', src: thePowerShop },
  { name: 'Uitleendienst Vlaams-Brabant', src: uitleendienst },
  { name: '4-Events', src: events4 },
  { name: 'Dream Support', src: dreamSupport },
  { name: 'KBC', src: kbc },
  { name: 'Leonidas', src: leonidas },
];

const Home = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section - Video background (vlaggen in de wind) */}
      <section className="hero" id="home">
        <div className="hero__video-wrap">
          <video
            className="hero__video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
          />
          <div className="hero__video-overlay" aria-hidden />
        </div>

        <motion.div
          className="hero__content"
          style={{ opacity, scale }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__logo-container" variants={itemVariants}>
            <motion.img
              src={heroLogo}
              alt="SkySound Festival 2026"
              className="hero__logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          <motion.div className="hero__info-composition" variants={itemVariants}>
            <p className="hero__date-location">8 August 2026 · Erps-Kwerps, Belgium</p>
          </motion.div>

          {/* Hero CTAs - Over Ons + Boarding Pass */}
          <motion.div className="hero__buttons" variants={itemVariants}>
            <Link to="/about" className="hero__btn hero__btn--secondary">
              Over ons
            </Link>
            <a
              href={TICKET_URL}
              className="hero__btn hero__btn--primary vivenu-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Koop je boarding pass hier!
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Wat is SkySound? - White section */}
      <section className="home-section home-section--white" id="wat-is-skysound">
        <div className="home-section__container">
          <div className="wat-is">
            <div className="wat-is__text">
              <h2 className="wat-is__title">WAT IS SKYSOUND?</h2>
              <p className="wat-is__body">
                SkySound is een intiem openluchtfestival waar muziek, ruimte en gemeenschap samenkomen. We kiezen bewust voor kwaliteit boven kwantiteit: elk artiest gekozen met intentie, een setting voor 800–1500 mensen, en de focus op de muziek en het moment. Dit is ons eerste jaar—zonder legacy-verwachtingen bouwen we aan één uitzonderlijke dag in Erps-Kwerps.
              </p>
            </div>
            <div className="wat-is__graphic">
              <img src={logoSmall} alt="" aria-hidden className="wat-is__logo-graphic" />
            </div>
          </div>
        </div>
      </section>

      {/* Goede Doel - White section with Kom op tegen Kanker */}
      <section className="home-section home-section--white" id="goede-doel">
        <div className="home-section__container">
          <div className="goede-doel">
            <div className="goede-doel__logo-wrap">
              <img src={komOpTegenKanker} alt="Kom op tegen Kanker" className="goede-doel__logo" />
            </div>
            <div className="goede-doel__content">
              <h2 className="goede-doel__title">GOEDE DOEL.</h2>
              <p className="goede-doel__text">
                SkySound steunt Kom op tegen Kanker. Een deel van de opbrengst gaat naar dit goede doel. Samen maken we van onze vlucht niet alleen een feest, maar ook een steun voor wie het nodig heeft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Boarding pass button */}
      <section className="home-section home-section--white home-section--cta">
        <div className="home-section__container">
          <a
            href={TICKET_URL}
            className="home-cta-button vivenu-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koop je boarding pass hier!
          </a>
        </div>
      </section>

      {/* Boarding pass - ticket as separator between white (above) and red (below) */}
      <section className="home-section home-section--boarding-pass" id="boarding-pass">
        <div className="home-section__container">
          <div className="boarding-pass-wrap">
            <img src={ticketLayout} alt="SkySound Boarding Pass 08/08/2026 Kasteelstraat Erps-Kwerps" className="boarding-pass-img" />
          </div>
        </div>
      </section>

      {/* Meer comfort?! - Red section + VIP CTA */}
      <section className="home-section home-section--red" id="meer-comfort">
        <div className="home-section__container">
          <h2 className="comfort__title">MEER COMFORT?!</h2>
          <p className="comfort__text">
            Geniet van het festival met extra comfort. Met een VIP boarding pass krijg je toegang tot een aparte zone, betere voorzieningen en een vleugje extra service. Upgrade je ervaring.
          </p>
          <a
            href={TICKET_URL}
            className="comfort__button vivenu-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comfort VIP boarding pass hier!
          </a>
        </div>
      </section>

      {/* Partners - White section, red title */}
      <section className="home-section home-section--white" id="partners">
        <div className="home-section__container">
          <h2 className="partners-title">TROTSE PARTNERS VAN ONZE VLUCHT</h2>
          <div className="partners-grid">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="partner-logo">
                <img src={partner.src} alt={partner.name} className="partner-logo__img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Red section */}
      <section className="home-section home-section--red" id="ons-team">
        <div className="home-section__container">
          <h2 className="team-title">SKYSOUND</h2>
          <p className="team-subtitle">Ons team</p>
          <div className="team-banner-wrap">
            <img src={teamBanner} alt="SkySound team" className="team-banner" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
