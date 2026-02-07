import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Practical from './pages/Practical';
import Lineup from './pages/Lineup';
import Tickets from './pages/Tickets';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/practical" element={<Practical />} />
      <Route path="/lineup" element={<Lineup />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
}

export default App;

