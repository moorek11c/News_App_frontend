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
    <div className="news__cards-container">
      <h2 className="search__container-title">Search results</h2>
      <div className="news__card-list">
        {visibleArticleList.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {isMoreToShow && (
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
