import { PopupProvider } from "../PopupContext";
import { SearchProvider } from "../SearchContext";
import { UserProvider } from "../UserContext";
import { SavedArticlesProvider } from "../SavedArticlesContext";

function AppContextProvider({ children }) {
  return (
    <div>
      <UserProvider>
        <PopupProvider>
          <SearchProvider>
            <SavedArticlesProvider>{children}</SavedArticlesProvider>
          </SearchProvider>
        </PopupProvider>
      </UserProvider>
    </div>
  );
}

export default AppContextProvider;
