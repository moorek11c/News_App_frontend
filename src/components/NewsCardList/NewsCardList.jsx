import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../Contexts/SearchContext";
import NewsCard from "./NewsCard/NewsCard";
import NothingFound from "../Pages/NothingFound/NothingFound";
import "./NewsCardList.css";

const INITIAL_VISIBLE_ARTICLES = 3;

const NewsCardList = () => {
  const { articles } = useContext(SearchContext);
  const [visibleArticles, setVisibleArticles] = useState(
    INITIAL_VISIBLE_ARTICLES
  );

  useEffect(() => {
    // Reset visible articles when the articles change
    setVisibleArticles(INITIAL_VISIBLE_ARTICLES);
  }, [articles]);

  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + INITIAL_VISIBLE_ARTICLES);
  };

  if (!articles.length) {
    return <NothingFound />;
  }

  const visibleArticleList = articles.slice(0, visibleArticles);
  const isMoreToShow = visibleArticles < articles.length;

  return (
    <div className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__cards">
        {visibleArticleList.map((article, index) => (
          <li key={index} className="news-card-list__item">
            <NewsCard article={article} />
          </li>
        ))}
      </ul>
      {isMoreToShow && (
        <div className="news-card-list__button-container">
          <button className="news-card-list__button" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsCardList;
