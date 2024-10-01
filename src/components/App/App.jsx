import "./App.css";

import { Route, Routes } from "react-router-dom";

// contexts
import { PopupProvider } from "../Contexts/PopupContext";
import { SearchProvider } from "../Contexts/SearchContext";
import { UserProvider } from "../Contexts/UserContext";
import { SavedArticlesProvider } from "../Contexts/SavedArticlesContext";

import SignInPopup from "../PopupWithForm/SigninPopup/SignInPopup";
import SignupPopup from "../PopupWithForm/SignupPopup/SignupPopup";
import ConfirmationPopup from "../PopupWithForm/ConfirmationPopup/ConfirmationPopup";
import SavedNewsPage from "../Pages/SavedNewsPage/SavedNewsPage";
import HomePage from "../Pages/HomePage/HomePage";
import NotFound from "../Pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "../Navigation/ProtectedRoutes/ProtectedRoutes";

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
                  element={
                    <ProtectedRoute
                      element={<SavedNewsPage isSavedNewsPage={true} />}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
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
