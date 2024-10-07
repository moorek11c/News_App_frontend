import "./Footer.css";
import { NavLink } from "react-router-dom";
import ghLogo from "../../Assets/GitHub.svg";
import fbLogo from "../../Assets/fbLogo.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__links-item">
            <NavLink
              to="/"
              className="footer__link footer__link--home"
              activeClassName="footer__link--active"
            >
              Home
            </NavLink>
          </li>
          <li className="footer__links-item">
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--tripleten"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__links--social">
          <li className="footer__links-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--social"
            >
              <img src={ghLogo} alt="GitHub" />
            </a>
          </li>
          <li className="footer__links-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--social"
            >
              <img src={fbLogo} alt="Facebook" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
