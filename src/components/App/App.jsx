import "./App.css";

// contexts
import { PopupProvider } from "../Contexts/PopupContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../Main/SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignInPopup from "../PopupWithForm/SigninPopup/SignInPopup";
import SignupPopup from "../PopupWithForm/SignupPopup/SignupPopup";

function App() {
  return (
    <PopupProvider>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
          <SearchForm />
          <About />
          <Footer />
        </div>
        <SignInPopup />
        <SignupPopup />
      </div>
    </PopupProvider>
  );
}

export default App;
