import "./App.css";

import { Route, Routes } from "react-router-dom";

// context
import AppContextProvider from "../Contexts/AppContextProvider/AppContextProvider";

import SignInPopup from "../PopupWithForm/SigninPopup/SignInPopup";
import SignupPopup from "../PopupWithForm/SignupPopup/SignupPopup";
import ConfirmationPopup from "../PopupWithForm/ConfirmationPopup/ConfirmationPopup";
import SavedNewsPage from "../Pages/SavedNewsPage/SavedNewsPage";
import HomePage from "../Pages/HomePage/HomePage";
import NotFound from "../Pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "../Navigation/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}

export default App;
