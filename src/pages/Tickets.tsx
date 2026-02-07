import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

const Tickets = () => {
  const [email, setEmail] = useState('');

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
        ease: 'easeOut',
      },
    },
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email signup logic would go here
    console.log('Email signup:', email);
    setEmail('');
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
          <h1 className="page__title">Tickets</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          <section className="content-section">
            <h2 className="content-section__title">Tickets Not Live Yet</h2>
            <p className="content-section__text">
              Ticket sales will open in <strong>Summer 2026</strong>. We're taking our time to get everything right before tickets go on sale.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Early Access</h2>
            <p className="content-section__text">
              Sign up below to be notified when tickets become available. Early access subscribers will get first priority when sales open.
            </p>
            <form className="tickets-email-form" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                className="tickets-email-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className="tickets-email-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access
              </motion.button>
            </form>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Limited Capacity</h2>
            <p className="content-section__text">
              SkySound is designed for <strong>800–1500 people</strong>. This intimate scale is intentional—it's what makes the experience special. Tickets will be limited, so early access subscribers will have the best chance of securing a spot.
            </p>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Transparency</h2>
            <p className="content-section__text">
              We'll announce ticket prices and release timing well in advance. No surprises, no hidden fees. Just clear information when we're ready to share it.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Tickets;
