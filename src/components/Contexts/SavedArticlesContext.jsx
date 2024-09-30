import { createContext, useState, useContext } from "react";
import { UseSearchContext } from "./SearchContext";

const SavedArticlesContext = createContext();

export const UseSavedArticles = () => useContext(SavedArticlesContext);

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);
  const { query } = UseSearchContext();

  const saveArticle = (article) => {
    setSavedArticles((prevArticles) => {
      // Check if the article already exists
      if (
        prevArticles.some((savedArticle) => savedArticle.url === article.url)
      ) {
        return prevArticles; // Return the existing list if the article is already saved
      }
      return [{ ...article, query }, ...prevArticles]; // Add the new article
    });
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, saveArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export default SavedArticlesContext;
