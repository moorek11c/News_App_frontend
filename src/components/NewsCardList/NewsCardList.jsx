import { useState, useEffect, useContext } from "react";

import { SearchContext } from "../Contexts/SearchContext";
import NewsCard from "./NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = () => {
  const { articles } = useContext(SearchContext);

  // State to store the number of visible articles

  const [visibleArticles, setVisibleArticles] = useState(3);

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  // Reset visible articles when the articles prop changes
  useEffect(() => {
    setVisibleArticles(3);
  }, [articles]);

  return (
    <div className="news__cards-container">
      <h2 className="search__container-title">Search results</h2>
      <div className="news__card-list">
        {articles.slice(0, visibleArticles).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {visibleArticles < articles.length && (
        <div className="button__container">
          <button className="button__show-more" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsCardList;
