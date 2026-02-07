import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoImage from '../public/Logo_SKYSOUND.png';
import './Home.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState('');

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const targetDate = new Date(2026, 7, 8, 12, 0, 0); // August 8th, 2026, 12:00

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email signup logic would go here
    console.log('Email signup:', email);
    setEmail('');
  };

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
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero__background">
          <motion.div
            className="hero__gradient"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(214, 33, 43, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(214, 33, 43, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(214, 33, 43, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(214, 33, 43, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__logo-container" variants={itemVariants}>
            <motion.img
              src={logoImage}
              alt="SkySound Festival"
              className="hero__logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          <motion.h1 className="hero__title" variants={itemVariants}>
            SkySound Festival
          </motion.h1>

          <motion.div className="hero__info" variants={itemVariants}>
            <p className="hero__date-location">8 August 2026 · Erps-Kwerps, Belgium</p>
            <p className="hero__edition">First Edition</p>
          </motion.div>

          <motion.p className="hero__positioning" variants={itemVariants}>
            An intimate open-air electronic music experience. Curated sound, intentional atmosphere, community-first.
          </motion.p>

          {/* Highlight Blocks */}
          <motion.div className="hero__highlights" variants={itemVariants}>
            <div className="highlight-block">
              <h3 className="highlight-block__title">Curated Sound</h3>
              <p className="highlight-block__text">Quality over quantity. Every artist selected with intention.</p>
            </div>
            <div className="highlight-block">
              <h3 className="highlight-block__title">Intimate Setting</h3>
              <p className="highlight-block__text">Open-air experience for 800–1500. Space to connect.</p>
            </div>
            <div className="highlight-block">
              <h3 className="highlight-block__title">Community First</h3>
              <p className="highlight-block__text">Built for those who value atmosphere and care.</p>
            </div>
          </motion.div>

          {/* Email Signup CTA */}
          <motion.div className="hero__cta-section" variants={itemVariants}>
            <h2 className="hero__cta-title">Get Notified</h2>
            <p className="hero__cta-subtitle">Early access to tickets and line-up announcements</p>
            <form className="hero__email-form" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                className="hero__email-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className="hero__cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>
          </motion.div>

          {/* Line-up Teaser */}
          <motion.div className="hero__lineup-teaser" variants={itemVariants}>
            <p className="hero__lineup-text">Line-up announcement coming soon</p>
            <Link to="/lineup" className="hero__lineup-link">
              Learn more about our curation
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

      <Footer />
    </div>
  );
};

export default Home;
