import "./SavedNewsMain.css";
import { useContext, useEffect } from "react";
import SavedArticlesContext from "../../../Contexts/SavedArticlesContext";

function SavedNewsMain() {
  const { savedArticles } = useContext(SavedArticlesContext);

  useEffect(() => {}, [savedArticles]);

  const keywords = savedArticles.map((article) => article.query);
  const uniqueKeywords = [...new Set(keywords)];

  let keywordsDisplay;
  if (uniqueKeywords.length > 2) {
    keywordsDisplay = `${uniqueKeywords.slice(0, 2).join(", ")} and ${
      uniqueKeywords.length - 2
    } others`;
  } else {
    keywordsDisplay = uniqueKeywords.join(", ");
  }

  return (
    <div className="saved-news__main-content">
      <h2 className="saved-news__title">Saved articles</h2>
      <p className="saved-news__subtitle">{`You have ${savedArticles.length} saved articles`}</p>
      <p className="saved-news__keywords">
        {`By Keywords: ${keywordsDisplay}`}
      </p>
    </div>
  );
}

export default SavedNewsMain;
