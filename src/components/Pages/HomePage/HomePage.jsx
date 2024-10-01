import Header from "../../Header/Header";
import Main from "../../Main/Main";
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="background-img">
        <Header />
        <Main />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
