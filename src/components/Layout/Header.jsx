import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { themes } from "../../context/ThemeProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cart">
                  <i className="bi bi-cart"></i>

                  <span className="position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item fs-4">
                <span className="nav-link" onClick={toggleTheme}>
                  {theme === themes.light ? (
                    <i className="bi bi-toggle-off"></i>
                  ) : (
                    <i className="bi bi-toggle-on"></i>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  cartItems: PropTypes.array,
};

export default Header;
