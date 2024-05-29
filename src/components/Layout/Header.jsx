import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/slices/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    toast.success("Çıkış başarılı. Lütfen giriş yap.", {
      autoClose: 1500,
      position: "bottom-right"
    });
    setTimeout(() => {
      navigate("/login");
    }, 1300);
  }

  return (
    <header className="position-fixed w-100 container p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Website
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive && "active"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
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
                <span
                  className="nav-link"
                  onClick={() => dispatch(toggleTheme())}
                >
                  {theme === "light" ? (
                    <i className="bi bi-toggle-off"></i>
                  ) : (
                    <i className="bi bi-toggle-on"></i>
                  )}
                </span>
              </li>
              <li
                className="nav-item fs-4"
                style={{
                  cursor: "pointer",
                }}
              >
                {user ? (
                  <span className="nav-link" onClick={handleLogout}>
                    Logout
                  </span>
                ) : (
                  <span className="nav-link" onClick={() => navigate("/login")}>
                    Login
                  </span>
                )}
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
