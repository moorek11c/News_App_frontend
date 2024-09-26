import Header from "../../Header/Header";
import Main from "../../Main/Main";
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import "./HomePage.css";
import NavBar from "../../NavBar/NavBar";

function HomePage() {
  return (
    <div className="home-page">
      <div className="header__elements">
        <Header />
        <NavBar />
      </div>

      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
