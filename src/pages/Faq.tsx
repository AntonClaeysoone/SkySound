import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './Faq.css';

const refundSteps = [
  {
    title: 'Scan de QR-code op je bandje',
    text: 'Scan met je smartphone de QR-code op je festivalbandje. Je wordt automatisch naar de refund-pagina gestuurd.',
  },
  {
    title: 'Geef je pincode in',
    text: 'Wordt er om een pincode gevraagd? Die vind je op de achterkant van de tag op je bandje — aan de andere kant van de QR-code dus.',
  },
  {
    title: 'Kies voor "Refund"',
    text: 'Selecteer de optie "Refund" en druk daarna op "Verdergaan".',
  },
  {
    title: 'Vul je gegevens in',
    text: 'Vul de naam van de rekeninghouder en je IBAN-rekeningnummer in, en druk op "Refund aanvragen".',
  },
  {
    title: 'Klaar!',
    text: 'Je refund wordt binnen 3 werkdagen teruggestort op je rekening.',
  },
];

const faqItems = [
  {
    question: 'Tot wanneer kan ik mijn refund aanvragen?',
    answer: (
      <>
        Je kan je refund aanvragen <strong>tot 15 augustus 2026</strong>. Daarna is het niet meer
        mogelijk om het resterende saldo op je bandje terug te vragen, dus wacht niet te lang!
      </>
    ),
  },
  {
    question: 'Wanneer wordt mijn refund teruggestort?',
    answer: (
      <>
        Zodra je je aanvraag hebt ingediend, wordt je refund <strong>binnen 3 werkdagen</strong>{' '}
        teruggestort op het rekeningnummer dat je hebt opgegeven.
      </>
    ),
  },
  {
    question: 'Waar vind ik de pincode voor mijn refund?',
    answer: (
      <>
        De pincode staat op de <strong>achterkant van de tag</strong> op je festivalbandje — aan de
        andere kant van de QR-code.
      </>
    ),
  },
  {
    question: 'Mijn QR-code werkt niet of ik ben mijn bandje kwijt. Wat nu?',
    answer: (
      <>
        Geen paniek! Stuur een mailtje naar{' '}
        <a href="mailto:info@skysoundfestival.com" className="content-section__link">
          info@skysoundfestival.com
        </a>{' '}
        en we helpen je zo snel mogelijk verder.
      </>
    ),
  },
  {
    question: "Wanneer komen de foto's online?",
    answer: (
      <>
        De foto's van SkySound 2026 worden momenteel verzameld en komen binnenkort online. Hou de{' '}
        <Link to="/photos" className="content-section__link">
          foto-pagina
        </Link>{' '}
        in de gaten!
      </>
    ),
  },
  {
    question: 'Wanneer is de volgende editie van SkySound?',
    answer: (
      <>
        De volgende vlucht is al aangekondigd: SkySound landt opnieuw in Erps-Kwerps op{' '}
        <strong>zaterdag 7 augustus 2027</strong>. Save the date!
      </>
    ),
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <h1 className="page__title">FAQ</h1>
        </motion.div>

        <motion.div className="page__body" variants={itemVariants}>
          {/* Refund - prominent uitgelicht */}
          <section className="content-section refund-section">
            <div className="refund-section__badge">Aanvragen kan tot 15 augustus 2026</div>
            <h2 className="content-section__title">Zo vraag je je refund aan</h2>
            <p className="content-section__text">
              Nog saldo over op je bandje? Dat vraag je in een paar minuten terug. Volg gewoon deze
              stappen:
            </p>
            <ol className="refund-steps">
              {refundSteps.map((step, index) => (
                <li key={step.title} className="refund-steps__item">
                  <span className="refund-steps__number">{index + 1}</span>
                  <div className="refund-steps__content">
                    <h3 className="refund-steps__title">{step.title}</h3>
                    <p className="refund-steps__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Veelgestelde vragen - accordion */}
          <section className="content-section">
            <h2 className="content-section__title">Veelgestelde vragen</h2>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                    <button
                      className="faq-item__question"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <motion.span
                        className="faq-item__icon"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-item__answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="faq-item__answer">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="content-section">
            <h2 className="content-section__title">Nog een andere vraag?</h2>
            <p className="content-section__text">
              Staat je vraag er niet tussen? Stuur ons een mailtje via{' '}
              <a href="mailto:info@skysoundfestival.com" className="content-section__link">
                info@skysoundfestival.com
              </a>{' '}
              en we antwoorden zo snel mogelijk.
            </p>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Faq;
