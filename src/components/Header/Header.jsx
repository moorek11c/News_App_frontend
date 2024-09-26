import "./Header.css";

// images
import headerLogo from "../../Assets/NewsExplorerlight.svg";
import headerLogoDark from "../../Assets/NewsExplorerdark.svg";

const Header = ({ isSavedNewsPage }) => {
  return (
    <>
      <header
        className={isSavedNewsPage ? "header header__saved-news" : "header"}
      >
        <div className="header__container">
          <img
            className="header__logo"
            src={isSavedNewsPage ? headerLogoDark : headerLogo}
            alt="NewsExplorer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
