import { useState } from "react";

import "./NewsCard.css";
import BookmarkIcon from "../../../Assets/bookmark.svg";
import BookmarkFilled from "../../../Assets/bookmarkFilled.svg";
import BookMarkHovered from "../../../Assets/bookmarkHover.svg";

import TrashIcon from "../../../Assets/trashIcon.svg";
import TrashIconHovered from "../../../Assets/trashHover.svg";

import { UseSavedArticles } from "../../Contexts/SavedArticlesContext";

const NewsCard = ({ article, isSaved }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false);

  const { saveArticle } = UseSavedArticles();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);

    if (!isBookmarked) {
      saveArticle(article);
    }
  };

  const handleBookmarkMouseEnter = () => {
    setIsBookmarkHovered(true);
  };

  const handleBookmarkMouseLeave = () => {
    setIsBookmarkHovered(false);
  };

  const handleTrashMouseEnter = () => {
    setIsTrashHovered(true);
  };

  const handleTrashMouseLeave = () => {
    setIsTrashHovered(false);
  };

  return (
    <div className="card__content">
      <li className="news__card">
        {isSaved ? (
          <button
            onMouseEnter={handleTrashMouseEnter}
            onMouseLeave={handleTrashMouseLeave}
            className="news__card-btn news-card__trash"
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
        ) : (
          <button
            onMouseEnter={handleBookmarkMouseEnter}
            onMouseLeave={handleBookmarkMouseLeave}
            className="news__card-btn"
            onClick={handleBookmark}
          >
            <img
              className="news-card__icon bookmark__icon"
              src={
                isBookmarkHovered
                  ? BookMarkHovered
                  : isBookmarked
                  ? BookmarkFilled
                  : BookmarkIcon
              }
              alt="bookmark icon"
            />
            {isBookmarkHovered && (
              <div className="hover__tip">
                <p className="hover__tip-text">Sign in to save articles</p>
              </div>
            )}
          </button>
        )}
        <img className="card__img" src={article.urlToImage} alt="news image" />
        <section className="card__info">
          <p className="card__date">{formattedDate}</p>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.source.name}</p>
          {article.query && <p className="card__keyword">{article.query}</p>}
        </section>
      </li>
    </div>
  );
};

export default NewsCard;
