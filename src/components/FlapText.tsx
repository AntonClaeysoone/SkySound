import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './FlapText.css';

// Volgorde bepaalt het "doorbladeren" van elke flap, zoals op een Solari-bord.
const FLAP_CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·-!';

const TICK_MS = 45; // tempo van het tikken
const COLUMN_STAGGER_TICKS = 2; // elke kolom start iets later dan de vorige

interface FlapTextProps {
  text: string;
  /** Start de animatie (bv. wanneer het bord in beeld komt). */
  active: boolean;
  /** Extra tikken voordat deze regel begint (voor rij-na-rij effect). */
  startDelayTicks?: number;
  className?: string;
}

const FlapText = ({ text, active, startDelayTicks = 0, className }: FlapTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const target = text.toUpperCase();
  const [display, setDisplay] = useState<string[]>(() => target.split('').map(() => ' '));
  const [settled, setSettled] = useState(false);
  const tickRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion) {
      setDisplay(target.split(''));
      setSettled(true);
      return;
    }

    const chars = target.split('');
    // Elke kolom begint op een willekeurige flap zodat het bord "door elkaar" start.
    const positions = chars.map(() => Math.floor(Math.random() * FLAP_CHARS.length));
    tickRef.current = 0;

    const interval = window.setInterval(() => {
      tickRef.current += 1;
      let done = true;

      const next = chars.map((targetChar, i) => {
        const startAt = startDelayTicks + i * COLUMN_STAGGER_TICKS;
        if (tickRef.current < startAt) {
          done = false;
          return ' ';
        }
        const wanted = FLAP_CHARS.indexOf(targetChar) === -1 ? 0 : FLAP_CHARS.indexOf(targetChar);
        if (positions[i] !== wanted) {
          positions[i] = (positions[i] + 1) % FLAP_CHARS.length;
          done = false;
        }
        return FLAP_CHARS[positions[i]];
      });

      setDisplay(next);
      if (done) {
        window.clearInterval(interval);
        setSettled(true);
      }
    }, TICK_MS);

    return () => window.clearInterval(interval);
  }, [active, target, startDelayTicks, prefersReducedMotion]);

  return (
    <span
      className={`flap-text${settled ? ' flap-text--settled' : ''}${className ? ` ${className}` : ''}`}
    >
      <span className="sr-only">{text}</span>
      {display.map((char, i) => (
        <span key={i} className="flap-char" aria-hidden>
          {char}
        </span>
      ))}
    </span>
  );
};

export default FlapText;
