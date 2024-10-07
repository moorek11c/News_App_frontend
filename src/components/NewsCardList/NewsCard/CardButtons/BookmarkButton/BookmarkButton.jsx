import "./BookmarkButton.css";

import BookmarkIcon from "../../../../../Assets/Rectanglebookmark.svg";
import BookmarkFilled from "../../../../../Assets/bookmarkFilled.svg";
import BookMarkHovered from "../../../../../Assets/bookmarkHover.svg";

const BookmarkButton = ({
  isLoggedIn,
  isBookmarked,
  isBookmarkHovered,
  handleBookmark,
  handleHoverState,
}) => (
  <button
    onMouseEnter={() => handleHoverState(true)}
    onMouseLeave={() => handleHoverState(false)}
    className="news-card__btn"
    onClick={isLoggedIn ? handleBookmark : null}
  >
    <img
      className="news-card__icon news-card__bookmark-icon"
      src={
        isBookmarkHovered
          ? BookMarkHovered
          : isBookmarked
          ? BookmarkFilled
          : BookmarkIcon
      }
      alt="Bookmark icon"
    />
    {!isLoggedIn && isBookmarkHovered && (
      <div className="news-card__hover-tip">
        <p className="news-card__hover-tip-text">Sign in to save articles</p>
      </div>
    )}
  </button>
);

export default BookmarkButton;
