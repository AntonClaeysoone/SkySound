import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SkyLoader from '../components/SkyLoader';
import logoImage from '../public/Logo_SKYSOUND.png';
import './SkySoundComingSoon.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SkySoundComingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, 7, 8, 12, 0, 0); // August 8th, 12:00 (month is 0-indexed, so 7 = August)
      
      // If the date has passed this year, use next year
      if (targetDate < now) {
        targetDate.setFullYear(currentYear + 1);
      }

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

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className={`sky-coming-soon ${isVisible ? 'sky-coming-soon--visible' : ''}`}>
      <div className="sky-coming-soon__content">
        <motion.img 
          src={logoImage} 
          alt="SkySound Festival Logo" 
          className="sky-coming-soon__logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <SkyLoader />
        <motion.p 
          className="sky-coming-soon__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Coming Soon
        </motion.p>
        <motion.div 
          className="sky-coming-soon__countdown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="sky-countdown__container">
            {countdownItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="sky-countdown__item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                <motion.div
                  className="sky-countdown__value"
                  key={item.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(item.value).padStart(2, '0')}
                </motion.div>
                <div className="sky-countdown__label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.p 
          className="sky-coming-soon__description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          August 8th, 12:00
        </motion.p>
      </div>
    </div>
  );
};

export default SkySoundComingSoon;

