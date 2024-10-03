import "./Footer.css";
import ghLogo from "../../Assets/GitHub.svg";
import fbLogo from "../../Assets/fbLogo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__info">© 2020 Supersite, Powered by News API</p>
        <div className="footer__links">
          <div className="footer__links-type-page">
            <p className="footer__link footer__link-home">Home</p>
            <p className="footer__link footer__link-tripleten">TripleTen</p>
          </div>

          <div className="footer__links_social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__link_social" src={ghLogo} alt="GitHub" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__link_social"
                src={fbLogo}
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
