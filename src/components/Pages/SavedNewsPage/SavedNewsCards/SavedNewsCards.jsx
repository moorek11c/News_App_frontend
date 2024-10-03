import "./SavedNewsCards.css";
import { useContext } from "react";
import { SearchContext } from "../../../Contexts/SearchContext";
import NewsCard from "../../../NewsCardList/NewsCard/NewsCard";
import { UseSavedArticles } from "../../../Contexts/SavedArticlesContext";

function SavedNewsCards() {
  const { savedArticles } = UseSavedArticles();
  const { query } = useContext(SearchContext);

  return (
    <div className="saved-cards__page">
      <ul className="saved-cards__list">
        {savedArticles.map((article) => (
          <NewsCard
            key={article.id}
            query={query}
            article={article}
            isSaved={true}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsCards;
