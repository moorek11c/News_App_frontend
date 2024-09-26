import { useState } from "react";

import "./NewsCard.css";
import BookmarkIcon from "../../../Assets/bookmark.svg";
import BookmarkFilled from "../../../Assets/bookmarkFilled.svg";

import TrashIcon from "../../../Assets/trashIcon.svg";

import { UseSavedArticles } from "../../Contexts/SavedArticlesContext";

const NewsCard = ({ article, isSaved }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className="news__card">
      <div className="news__card_container">
        {isSaved ? (
          <button className=" news__card-btn news-card__trash">
            <img
              className="news-card-icon trash__icon"
              src={TrashIcon}
              alt="Trash icon"
            />
          </button>
        ) : (
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="news__card-btn"
            onClick={handleBookmark}
          >
            <img
              onClick={handleBookmark}
              className=" news-card__icon bookmark__icon"
              src={isBookmarked ? BookmarkFilled : BookmarkIcon}
              alt="bookmark icon"
            />
          </button>
        )}
        {isHovered && (
          <div className="hover__tip">
            <p className="hover__tip-text">Sign in to save articles</p>
          </div>
        )}
        <img className="card__img" src={article.urlToImage} alt="news image" />
        <div className="card__info">
          <p className="card__date">{formattedDate}</p>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.source.name}</p>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
