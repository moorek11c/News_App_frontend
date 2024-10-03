import { createContext, useState, useContext, useEffect } from "react";
import { getSavedArticles } from "../../utils/API/NewsApi";

const SavedArticlesContext = createContext();

export const UseSavedArticles = () => useContext(SavedArticlesContext);

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const data = await getSavedArticles();
        const filteredData = data.map((article) => ({
          id: article.id,
          title: article.title,
          description: article.description,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          source: article.source.name,
          query: article.query,
        }));

        setSavedArticles(filteredData);
      } catch (error) {
        console.error("Error fetching saved articles:", error);
      }
    };

    fetchSavedArticles();
  }, []);

  const deleteArticle = async (articleId) => {
    try {
      await fetch(`http://localhost:3001/cards/${articleId}`, {
        method: "DELETE",
      });
      setSavedArticles((prevArticles) =>
        prevArticles.filter((savedArticle) => savedArticle.id !== articleId)
      );
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, deleteArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export default SavedArticlesContext;
