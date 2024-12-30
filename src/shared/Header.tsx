import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header bg-dark text-white">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <div className="logo">
          <h1 className="m-0 text-uppercase">Marvel</h1>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list d-flex list-unstyled m-0">
            <li className="nav-item mx-3">
              <a
                onClick={() => navigate("/home")}
                className={`nav-link text-white ${
                  location.pathname === "/home" ? "active" : ""
                }`}
              >
                Characters
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                onClick={() => navigate("/series")}
                className={`nav-link text-white ${
                  location.pathname === "/series" ? "active" : ""
                }`}
              >
                Series
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                onClick={() => navigate("/comics")}
                className={`nav-link text-white ${
                  location.pathname === "/comics" ? "active" : ""
                }`}
              >
                Comics
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
