import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FlapText from '../components/FlapText';
import heroLogo from '../public/Assets/01 LOGO SKYSOUND 2026 3.0(Sise Large).png';
import heroImage from '../public/SkySound2026/web/hero-31.jpg';
import photoPlane from '../public/SkySound2026/web/20260808_Skysound-12.jpg';
import photoVipDeck from '../public/SkySound2026/web/20260808_Skysound-27.jpg';
import beltLasers from '../public/SkySound2026/web/20260808_Skysound-23.jpg';
import beltCrew from '../public/SkySound2026/web/20260808_Skysound-41.jpg';
import beltStage from '../public/SkySound2026/web/20260808_Skysound-34.jpg';
import beltVenue from '../public/SkySound2026/web/20260808_Skysound-14.jpg';
import beltFriends from '../public/SkySound2026/web/20260808_Skysound-26.jpg';
import beltBirthday from '../public/SkySound2026/web/20260808_Skysound-39.jpg';
import beltShoulders from '../public/SkySound2026/web/20260808_Skysound-37.jpg';
import beltLights from '../public/SkySound2026/web/20260808_Skysound-22.jpg';
import ticketLayout from '../public/Assets/TICKET LAY OUT - 2026.png';
import komOpTegenKanker from '../public/Assets/Kom Op Tegen Kanker.png';
import teamBanner from '../public/Assets/TEAM BANNER - SKYSOUND 26.jpg';
import './Home.css';

const TICKET_URL = 'https://shop.ticket.monster/event/skysound-festival-jzuhmm?useEmbed=true';

const departureRows: Array<{
  flight: string;
  dest: string;
  date: string;
  status: string;
  to?: string;
}> = [
  { flight: 'SKY26', dest: 'Erps-Kwerps', date: '08 AUG 2026', status: 'Geland', to: '/photos' },
  { flight: 'SKY27', dest: 'Erps-Kwerps', date: '07 AUG 2027', status: 'Save the date' },
];

const beltPhotos = [
  beltLasers,
  beltCrew,
  beltStage,
  beltVenue,
  beltFriends,
  beltBirthday,
  beltShoulders,
  beltLights,
];

const partnerLogoModules = import.meta.glob('../public/Partners - logos/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const priorityOrder = [
  'Kom Op Tegen Kanker',
  'KBC',
  'Vinco',
  'We Invest Leuven',
  'Hertog Jan',
  'Abihome',
  'De Wasstraat',
];

const allPartnerLogos = Object.entries(partnerLogoModules)
  .filter(([path]) => !path.includes('NOG NIET'))
  .map(([path, src]) => ({
    path,
    name: path
      .split('/')
      .pop()!
      .replace(/\.(png|jpg|jpeg)$/i, '')
      .trim(),
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

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const boardRef = useRef<HTMLDivElement>(null);
  const boardInView = useInView(boardRef, { once: true, margin: '-80px' });
  const beltRef = useRef<HTMLElement>(null);
  const beltInView = useInView(beltRef, { once: true, margin: '-120px' });
  const [beltLanded, setBeltLanded] = useState(false);
  const beltRolling = prefersReducedMotion ? false : beltLanded;

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
      
      {/* Hero Section - SkySound 2026 crowd shot, slow Ken Burns drift */}
      <section className="hero" id="home">
        <div className="hero__video-wrap">
          <motion.img
            className="hero__image"
            src={heroImage}
            alt=""
            aria-hidden
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.07] }}
            transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
            {...({ fetchpriority: 'high' } as Record<string, string>)}
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
          <motion.p className="hero__tagline" variants={itemVariants}>
            Time for take-off
          </motion.p>

          <motion.div className="hero__logo-container" variants={itemVariants}>
            <motion.img
              src={heroLogo}
              alt="SkySound Festival"
              className="hero__logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          <motion.div className="hero__info-composition" variants={itemVariants}>
            <p className="hero__date-location">SKY27 · 07 AUG 2027 · Erps-Kwerps</p>
          </motion.div>

          {/* Hero CTAs - Foto's van de vorige vlucht + Over ons */}
          <motion.div className="hero__buttons" variants={itemVariants}>
            <a
              href="#wat-is-skysound"
              className="hero__btn hero__btn--secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('wat-is-skysound')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Over ons
            </a>
            <Link to="/photos" className="hero__btn hero__btn--primary">
              Bekijk de foto's
            </Link>
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

      {/* Teaser volgende editie - departures board */}
      <section className="home-section home-section--teaser" id="skysound-2027">
        <div className="home-section__container">
          <motion.div
            ref={boardRef}
            className="teaser-board"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="teaser-board__header">
              <span className="teaser-board__header-label">Skysound Intl · Departures</span>
              <span className="teaser-board__header-dot" aria-hidden />
            </div>
            <div className="teaser-board__row teaser-board__row--labels" aria-hidden>
              <span>Vlucht</span>
              <span>Bestemming</span>
              <span>Vertrek</span>
              <span>Status</span>
            </div>
            {departureRows.map((row, index) => {
              const rowDelay = index * 14;
              const cells = (
                <>
                  <span className="teaser-board__cell">
                    <FlapText text={row.flight} active={boardInView} startDelayTicks={rowDelay} />
                  </span>
                  <span className="teaser-board__cell">
                    <FlapText
                      text={row.dest}
                      active={boardInView}
                      startDelayTicks={rowDelay + 4}
                    />
                  </span>
                  <span className="teaser-board__cell">
                    <FlapText
                      text={row.date}
                      active={boardInView}
                      startDelayTicks={rowDelay + 8}
                    />
                  </span>
                  <span
                    className={`teaser-board__cell ${
                      row.to ? 'teaser-board__cell--landed' : 'teaser-board__cell--status'
                    }`}
                  >
                    <FlapText
                      text={row.status}
                      active={boardInView}
                      startDelayTicks={rowDelay + 12}
                    />
                  </span>
                </>
              );
              return row.to ? (
                <Link
                  key={row.flight}
                  to={row.to}
                  className="teaser-board__row teaser-board__row--link"
                  aria-label={`Vlucht ${row.flight} is geland — bekijk de foto's`}
                >
                  {cells}
                </Link>
              ) : (
                <div key={row.flight} className="teaser-board__row">
                  {cells}
                </div>
              );
            })}
            <p className="teaser-board__tagline">
              Vlucht <strong>SKY26</strong> is geland —{' '}
              <Link to="/photos" className="teaser-board__link">
                bekijk de foto's
              </Link>
              . En de volgende vlucht is al aangekondigd: zet zaterdag{' '}
              <strong>7 augustus 2027</strong> alvast in je agenda!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Baggage claim - een vliegtuig dropt de foto's van SKY26 op de bagageband */}
      <section className="home-section home-section--baggage" id="baggage-claim" ref={beltRef}>
        <div className="home-section__container">
          <p className="gate-tag">Baggage claim · Band 08</p>
          <h2 className="baggage__title">DE VLUCHT IS GELAND.</h2>
          <p className="baggage__text">Pik hier je herinneringen aan SKY26 op.</p>
        </div>
        <div className="baggage-belt-stage">
          {/* Het vliegtuig dat de foto's komt droppen */}
          <motion.div
            className="baggage-plane"
            aria-hidden
            initial={{ x: '-20vw', y: 0 }}
            animate={
              beltInView && !prefersReducedMotion
                ? { x: '115vw', y: 30 }
                : undefined
            }
            transition={{ duration: 3.2, ease: [0.35, 0, 0.65, 1] }}
            onAnimationComplete={() => setBeltLanded(true)}
          >
            <svg viewBox="0 0 120 40" focusable="false">
              <path
                className="baggage-plane__tail"
                d="M8 22 L16 2 L28 2 L19 22 Z"
              />
              <path
                className="baggage-plane__body"
                d="M4 27 Q3 20 12 20 L82 20 Q100 20 112 27 Q100 34 82 34 L12 34 Q3 34 4 27 Z"
              />
              <path className="baggage-plane__wing" d="M50 26 L80 40 L62 26 Z" />
            </svg>
          </motion.div>
          <Link
            to="/photos"
            className="baggage-belt"
            aria-label="Bekijk alle foto's van SkySound 2026 op de fotopagina"
          >
            <motion.div
              className="baggage-belt__track"
              animate={beltRolling ? { x: ['0%', '-50%'] } : undefined}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop' as const,
                  duration: 60,
                  ease: 'linear',
                },
              }}
            >
              {[...beltPhotos, ...beltPhotos].map((src, index) => {
                const dropIndex = index % beltPhotos.length;
                const even = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    className="baggage-belt__item"
                    initial={
                      prefersReducedMotion
                        ? false
                        : { y: -150, scale: 0.22, opacity: 0, rotate: even ? -9 : 7 }
                    }
                    animate={
                      beltInView && !prefersReducedMotion
                        ? { y: even ? 0 : 6, scale: 1, opacity: 1, rotate: even ? -1.5 : 1.5 }
                        : undefined
                    }
                    transition={{
                      delay: 0.55 + dropIndex * 0.42,
                      type: 'spring',
                      stiffness: 170,
                      damping: 17,
                      opacity: { duration: 0.18, delay: 0.55 + dropIndex * 0.42 },
                    }}
                  >
                    <img src={src} alt="" aria-hidden loading="lazy" decoding="async" />
                    <span className="baggage-belt__tag" aria-hidden>
                      SKY26/{String(dropIndex + 1).padStart(3, '0')}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Wat is SkySound? - White section */}
      <section className="home-section home-section--white" id="wat-is-skysound">
        <div className="home-section__container">
          <div className="wat-is">
            <div className="wat-is__text">
              <p className="gate-tag">Gate 01 · Over ons</p>
              <h2 className="wat-is__title">WAT IS SKYSOUND?</h2>
              <p className="wat-is__body">
                SKYSOUND is een themafestival met als centraal thema luchtvaart. Het event zet in op muziek, ruimte en community. Zo nemen we je mee in een beleving die al start vóór het event zelf: je ticket is een boarding pass, waarmee je virtueel op reis vertrekt in eigen land, naar SKYSOUND Festival. Op het terrein trekken we dit thema uiteraard volledig door als rode draad, maar daarvoor kom je best zelf ontdekken!
              </p>
            </div>
            <div className="wat-is__graphic">
              <figure className="wat-is__photo-card">
                <img
                  src={photoPlane}
                  alt="DJ-duo viert achter de decks terwijl een lijnvliegtuig laag overvliegt"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="mono-label">Erps-Kwerps · Under the flight path</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Goede Doel - White section with Kom op tegen Kanker */}
      <section className="home-section home-section--white" id="goede-doel">
        <div className="home-section__container">
          <hr className="flight-divider flight-divider--on-white home-divider" aria-hidden />
          <div className="goede-doel">
            <div className="goede-doel__logo-wrap">
              <img src={komOpTegenKanker} alt="Kom op tegen Kanker" className="goede-doel__logo" />
            </div>
            <div className="goede-doel__content">
              <p className="gate-tag">Gate 02 · Goede doel</p>
              <h2 className="goede-doel__title">GOEDE DOEL.</h2>
              <p className="goede-doel__text">
                SkySound steunt Kom op tegen Kanker. Samen maken we van onze vlucht niet alleen een feest, maar ook een steun voor wie het nodig heeft.
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
          <div className="comfort">
            <div className="comfort__content">
              <p className="gate-tag">Gate 03 · Comfort class</p>
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
            <div className="comfort__cabin">
              <div className="comfort__fuselage" title="Zicht op het VIP-deck">
                <img
                  src={photoVipDeck}
                  alt="Verhoogd VIP-deck met loungezone op het festivalterrein, gezien door vliegtuigraampjes"
                  className="comfort__fuselage-photo"
                  loading="lazy"
                  decoding="async"
                />
                <svg
                  className="comfort__fuselage-frames"
                  viewBox="0 0 640 300"
                  aria-hidden
                  focusable="false"
                >
                  <rect x="25" y="35" width="175" height="230" rx="70" />
                  <rect x="232" y="35" width="175" height="230" rx="70" />
                  <rect x="440" y="35" width="175" height="230" rx="70" />
                </svg>
              </div>
              {/* Stoelen in zijaanzicht: je zit ín het vliegtuig en kijkt naar buiten */}
              <svg className="comfort__seats" viewBox="0 0 640 230" aria-hidden focusable="false">
                <defs>
                  <g id="cabin-seat">
                    {/* rugleuning + geïntegreerde hoofdsteun */}
                    <rect x="96" y="0" width="42" height="158" rx="20" transform="rotate(5 117 79)" />
                    {/* zitkussen */}
                    <rect x="18" y="128" width="112" height="42" rx="18" />
                    {/* armleuning */}
                    <rect x="26" y="106" width="84" height="15" rx="7.5" />
                    {/* vaste voet tot de vloer */}
                    <rect x="34" y="162" width="84" height="52" rx="8" />
                  </g>
                </defs>
                <use href="#cabin-seat" x="99" />
                <use href="#cabin-seat" x="306" />
                <use href="#cabin-seat" x="510" />
                <rect x="0" y="216" width="640" height="10" rx="5" className="comfort__seats-floor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Red section, infinite scrolling marquee */}
      <section className="home-section home-section--red" id="partners">
        <div className="home-section__container">
          <p className="gate-tag">Gate 04 · Partners</p>
          <h2 className="partners-title partners-title--white">TROTSE PARTNERS VAN ONZE VLUCHT</h2>
        </div>
        <div className="home-partners-marquee">
          <motion.div
            className="home-partners-marquee__track"
            animate={prefersReducedMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop' as const,
                duration: 120,
                ease: 'linear',
              },
            }}
          >
            {[...allPartnerLogos, ...allPartnerLogos].map((partner, index) => (
              <div key={`${partner.path}-${index}`} className="home-partners-marquee__item">
                <img src={partner.src} alt={partner.name} className="home-partners-marquee__img" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team - Red section, full width, flush to footer */}
      <section className="home-section home-section--red home-section--team" id="ons-team">
        <hr className="flight-divider flight-divider--on-red home-divider" aria-hidden />
        <h2 className="team-title">SKYSOUND</h2>
        <p className="team-subtitle">Ons team</p>
        <div className="team-banner-wrap">
          <img src={teamBanner} alt="SkySound team" className="team-banner" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
