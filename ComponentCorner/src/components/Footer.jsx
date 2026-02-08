import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title">{props.title}</h3>
          <p className="footer-email">{props.email}</p>
          <p className="footer-phonenumber">{props.phonenumber}</p>
          <p className="footer-address">{props.address}</p>
        </div>
        <ul className="footer-links footer-right">
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
          <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
          <li><a href="#terms" className="footer-link">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
