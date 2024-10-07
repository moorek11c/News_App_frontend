import { createContext, useContext, useState } from "react";
import { getNews } from "../../utils/API/NewsApi";

export const SearchContext = createContext();

export const UseSearchContext = () => useContext(SearchContext);
export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    try {
      const articles = await getNews(searchQuery);
      setArticles(articles);

      setHasSearched(true);
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
    }
  };

  return (
    <SearchContext.Provider
      value={{ query, articles, handleSearch, hasSearched }}
    >
      {children}
    </SearchContext.Provider>
  );
};
