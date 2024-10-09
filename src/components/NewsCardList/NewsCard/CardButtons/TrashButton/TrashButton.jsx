import TrashIcon from "../../../../../Assets/trashIcon.svg";
import TrashIconHovered from "../../../../../Assets/trashHover.svg";

const TrashButton = ({ isTrashHovered, handleDelete, handleHoverState }) => (
  <div className="trash-button">
    <button
      onMouseEnter={() => handleHoverState(true)}
      onMouseLeave={() => handleHoverState(false)}
      className="news-card__btn news-card__trash"
      onClick={handleDelete}
    >
      <img
        className="news-card__icon news-card__trash-icon"
        src={isTrashHovered ? TrashIconHovered : TrashIcon}
        alt="Trash icon"
      />
    </button>
    {isTrashHovered && (
      <div className="news-card__hover-tip news-card__hover-tip--trash">
        <p className="news-card__hover-tip-text">Remove from save</p>
      </div>
    )}
  </div>
);

export default TrashButton;
