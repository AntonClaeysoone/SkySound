import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Practical from './pages/Practical';
import Lineup from './pages/Lineup';
import Tickets from './pages/Tickets';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Photos from './pages/Photos';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practical" element={<Practical />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

