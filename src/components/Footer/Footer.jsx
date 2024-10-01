import "./Footer.css";
import ghLogo from "../../Assets/GitHub.svg";
import fbLogo from "../../Assets/fbLogo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__info">© 2020 Supersite, Powered by News API</p>
        <div className="footer__links">
          <div className="footer__links-type-page">
            <p className="footer__link footer__link-home">Home</p>
            <p className="footer__link footer__link-tripleten">TripleTen</p>
          </div>

          <div className="footer__links_social">
            <img className="footer__link_social" src={ghLogo} alt="Git Hub" />
            <img className="footer__link_social" src={fbLogo} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
