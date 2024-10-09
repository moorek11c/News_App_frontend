import { createContext, useState, useEffect, useContext } from "react";
import { getSavedArticles } from "../../utils/API/NewsApi";

const SavedArticlesContext = createContext();

export const UseSavedArticles = () => useContext(SavedArticlesContext);

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    getSavedArticles().then((articles) => {
      setSavedArticles(articles);
    });
  }, []);

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, setSavedArticles }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export default SavedArticlesContext;
