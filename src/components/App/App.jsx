import { useState } from "react";

import "./App.css";

// contexts
import { PopupProvider } from "../Contexts/PopupContext";
import { SearchProvider } from "../Contexts/SearchContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignInPopup from "../PopupWithForm/SigninPopup/SignInPopup";
import SignupPopup from "../PopupWithForm/SignupPopup/SignupPopup";
// import SearchForm from "../Main/SearchForm/SearchForm";
// import NewsCardList from "../NewsCardList/NewsCardList";

function App() {
  // State to store whether the user has searched for news

  return (
    <PopupProvider>
      <SearchProvider>
        <div className="page">
          <div className="page__content">
            <Header />
            <Main />

            <About />
            <Footer />
          </div>
          <SignInPopup />
          <SignupPopup />
        </div>
      </SearchProvider>
    </PopupProvider>
  );
}

export default App;
