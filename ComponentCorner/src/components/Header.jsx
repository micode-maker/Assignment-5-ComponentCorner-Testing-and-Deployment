
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="app-header">
      <h1 className="store-name">ComponentCorner</h1>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-container">
          <span className="cart-icon">🛒</span>
          <span>{props.cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
