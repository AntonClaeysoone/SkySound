import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';
import './NotFound.css';

const NotFound = () => (
  <div className="page">
    <Navbar />
    <main className="page__content not-found">
      <p className="mono-label not-found__code">Gate not found · 404</p>
      <h1 className="page__title">VLUCHT ONBEKEND</h1>
      <p className="content-section__text not-found__text">
        Deze gate bestaat niet (meer). Check het vluchtschema en probeer opnieuw.
      </p>
      <Link to="/" className="not-found__button">
        Terug naar de terminal
      </Link>
    </main>
    <Footer />
  </div>
);

export default NotFound;
