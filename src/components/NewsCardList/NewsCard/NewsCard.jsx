import { useState, useContext } from "react";
import "./NewsCard.css";
import BookmarkIcon from "../../../Assets/Rectanglebookmark.svg";
import BookmarkFilled from "../../../Assets/bookmarkFilled.svg";
import BookMarkHovered from "../../../Assets/bookmarkHover.svg";
import TrashIcon from "../../../Assets/trashIcon.svg";
import TrashIconHovered from "../../../Assets/trashHover.svg";
import { UserContext } from "../../Contexts/UserContext";
import { UseSearchContext } from "../../Contexts/SearchContext";
import { UseSavedArticles } from "../../Contexts/SavedArticlesContext";
import { saveCard } from "../../../utils/API/NewsApi";

const NewsCard = ({ article, isSaved }) => {
  const { query } = UseSearchContext();
  const { isLoggedIn } = useContext(UserContext);
  const { deleteArticle } = UseSavedArticles();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false);

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  const handleBookmark = async () => {
    try {
      await saveCard({ article, isSaved: true, query });
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Failed to save article:", error);
    }
  };

  const handleHoverState = (setter) => (state) => () => setter(state);

  const handleDelete = () => deleteArticle(article.id);

  const BookmarkButton = () => (
    <button
      onMouseEnter={handleHoverState(setIsBookmarkHovered)(true)}
      onMouseLeave={handleHoverState(setIsBookmarkHovered)(false)}
      className="news__card-btn"
      onClick={isLoggedIn ? handleBookmark : null}
    >
      <img
        className="news-card__icon bookmark__icon"
        src={
          isBookmarkHovered && isLoggedIn
            ? BookMarkHovered
            : isBookmarked
            ? BookmarkFilled
            : BookmarkIcon
        }
        alt="Bookmark icon"
      />
      {!isLoggedIn && isBookmarkHovered && (
        <div className="hover__tip">
          <p className="hover__tip-text">Sign in to save articles</p>
        </div>
      )}
    </button>
  );

  const TrashButton = () => (
    <button
      onMouseEnter={handleHoverState(setIsTrashHovered)(true)}
      onMouseLeave={handleHoverState(setIsTrashHovered)(false)}
      className="news__card-btn news-card__trash"
      onClick={handleDelete}
    >
      <img
        className="news-card-icon trash__icon"
        src={isTrashHovered ? TrashIconHovered : TrashIcon}
        alt="Trash icon"
      />
      {isTrashHovered && (
        <div className="hover__tip hover__tip-trash">
          <p className="hover__tip-text">Removed from save</p>
        </div>
      )}
    </button>
  );

  return (
    <div className="card__content">
      <li className="news__card">
        {isSaved ? <TrashButton /> : <BookmarkButton />}
        <img
          className="card__img"
          src={article.urlToImage || "default-image-url.jpg"}
          alt={article.title || "No title"}
        />
        <section className="card__info">
          <p className="card__date">{formattedDate}</p>
          <h2 className="card__title">{article.title || "No title"}</h2>
          <p className="card__description">
            {article.description || "No description"}
          </p>
          <p className="card__source">
            {article.source?.name || "Unknown source"}
          </p>
          {article.query && <p className="card__keyword">{article.query}</p>}
        </section>
      </li>
    </div>
  );
};

export default NewsCard;
