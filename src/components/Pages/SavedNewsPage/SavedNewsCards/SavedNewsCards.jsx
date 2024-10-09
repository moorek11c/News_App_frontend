import "./SavedNewsCards.css";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../Contexts/SearchContext";
import NewsCard from "../../../NewsCardList/NewsCard/NewsCard";
import { getSavedArticles } from "../../../../utils/API/NewsApi";

function SavedNewsCards() {
  const [savedArticles, setSavedArticles] = useState([]);
  const { query } = useContext(SearchContext);

  useEffect(() => {
    getSavedArticles().then((articles) => {
      setSavedArticles(articles);
    });
  }, []);

  return (
    <div className="saved-news-cards__page">
      <ul className="saved-news-cards__list">
        {savedArticles.map((article) => (
          <li key={article.id} className="saved-news-cards__list-item">
            <NewsCard query={query} article={article} isSaved={true} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsCards;
