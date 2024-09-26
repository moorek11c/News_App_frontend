import "./SavedNewsCards.css";
import { useContext, useState } from "react";
import NewsCard from "../NewsCardList/NewsCard/NewsCard";
import SavedArticlesContext from "../Contexts/SavedArticlesContext";

function SavedNewsCards() {
  const { savedArticles } = useContext(SavedArticlesContext);

  const [numberOfCards, setNumberOfCards] = useState(0);

  if (numberOfCards > 0) {
    setNumberOfCards(savedArticles);

    console.log(numberOfCards);
  }

  return (
    <div className="saved-cards__page">
      <ul className="saved-cards__list">
        {savedArticles.map((article, index) => (
          <NewsCard key={index} article={article} isSaved={true} />
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsCards;
