import "./SavedNewsCards.css";
import { useContext } from "react";
import { SearchContext } from "../Contexts/SearchContext";
import NewsCard from "../NewsCardList/NewsCard/NewsCard";
import SavedArticlesContext from "../Contexts/SavedArticlesContext";

function SavedNewsCards() {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { query } = useContext(SearchContext);

  return (
    <div className="saved-cards__page">
      <ul className="saved-cards__list">
        {savedArticles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            isSaved={true}
            query={query}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsCards;
