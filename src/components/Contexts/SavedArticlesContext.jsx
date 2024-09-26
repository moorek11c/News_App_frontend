import { createContext, useState, useContext } from "react";

const SavedArticlesContext = createContext();

export const UseSavedArticles = () => useContext(SavedArticlesContext);

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const saveArticle = (article) => {
    setSavedArticles((prevArticles) => [...prevArticles, article]);
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, saveArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export default SavedArticlesContext;
