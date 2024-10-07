import { useState, useContext } from "react";
import "./NewsCard.css";
import { UserContext } from "../../Contexts/UserContext";
import { UseSearchContext } from "../../Contexts/SearchContext";
import { saveCard } from "../../../utils/API/NewsApi";
import { formatDate } from "../../../utils/dateUtils";
import BookmarkButton from "./CardButtons/BookmarkButton/BookmarkButton";
import TrashButton from "./CardButtons/TrashButton/TrashButton";

const NewsCard = ({ article, isSaved }) => {
  const { query } = UseSearchContext();
  const { isLoggedIn } = useContext(UserContext);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const [isBookmarkHovered, setBookmarkHovered] = useState(false);

  const formattedDate = formatDate(article.publishedAt);

  const handleBookmark = async () => {
    try {
      await saveCard({ article, isSaved: true, query });
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Failed to save article:", error);
    }
  };

  const handleHoverState = (setter) => (state) => {
    setter(state);
  };

  return (
    <ul className="news-card__content">
      <li className="news-card">
        {isSaved ? (
          <TrashButton
            isTrashHovered={isTrashHovered}
            handleHoverState={handleHoverState(setIsTrashHovered)}
          />
        ) : (
          <BookmarkButton
            isLoggedIn={isLoggedIn}
            isBookmarked={isBookmarked}
            isBookmarkHovered={isBookmarkHovered}
            handleBookmark={handleBookmark}
            handleHoverState={handleHoverState(setBookmarkHovered)}
          />
        )}
        <img
          className="news-card__img"
          src={article.urlToImage || "default-image-url.jpg"}
          alt={article.title || "No title"}
        />
        <section className="news-card__info">
          <p className="news-card__date">{formattedDate}</p>
          <h2 className="news-card__title">{article.title || "No title"}</h2>
          <p className="news-card__description">
            {article.description || "No description"}
          </p>
          <p className="news-card__source">
            {article.source.name || "Unknown source"}
          </p>
          {article.query && (
            <p className="news-card__keyword">{article.query}</p>
          )}
        </section>
      </li>
    </ul>
  );
};

export default NewsCard;
