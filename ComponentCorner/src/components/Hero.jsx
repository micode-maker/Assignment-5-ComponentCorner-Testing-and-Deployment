import heroImage from '../assets/hero-image.jpg';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero(props) {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <img 
        src={heroImage} 
        alt="Hero Banner" 
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-subtitle">{props.subtitle}</p>
        <button className="hero-cta" onClick={() => navigate('/products')}>{props.ctaText}</button>
      </div>
    </section>
  );
}

export default Hero;
