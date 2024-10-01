import "./App.css";

import { Route, Routes } from "react-router-dom";

// contexts
import { PopupProvider } from "../Contexts/PopupContext";
import { SearchProvider } from "../Contexts/SearchContext";
import { UserProvider } from "../Contexts/UserContext";

import SignInPopup from "../PopupWithForm/SigninPopup/SignInPopup";
import SignupPopup from "../PopupWithForm/SignupPopup/SignupPopup";
import ConfirmationPopup from "../PopupWithForm/ConfirmationPopup/ConfirmationPopup";
import SavedNewsPage from "../Pages/SavedNewsPage/SavedNewsPage";
import HomePage from "../Pages/HomePage/HomePage";
import { SavedArticlesProvider } from "../Contexts/SavedArticlesContext";

function App() {
  return (
    <UserProvider>
      <PopupProvider>
        <SearchProvider>
          <SavedArticlesProvider>
            <div className="page">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/saved-news"
                  element={<SavedNewsPage isSavedNewsPage={true} />}
                />
              </Routes>
            </div>
            <SignInPopup />
            <SignupPopup />
            <ConfirmationPopup />
          </SavedArticlesProvider>
        </SearchProvider>
      </PopupProvider>
    </UserProvider>
  );
}

export default App;
