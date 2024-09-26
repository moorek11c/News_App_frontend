import "./SavedNewsMain.css";
import { useContext } from "react";
import SavedArticlesContext from "../Contexts/SavedArticlesContext";

function SavedNewsMain() {
  const { savedArticles } = useContext(SavedArticlesContext);
  return (
    <div>
      <div className="saved-news__main-content">
        <h2 className="saved-news__title">Saved articles</h2>
        <p className="saved-news__subtitle">{`You have ${savedArticles.length} saved articles`}</p>
        <p className="saved-news__keywords">By keywords:</p>
      </div>
    </div>
  );
}

export default SavedNewsMain;
