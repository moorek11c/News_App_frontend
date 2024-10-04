import "./PopupWithForm.css";
import popupClose from "../../Assets/CloseBtn.svg";

import { usePopup } from "../Hooks/usePopup";

function PopupWithForm({ popupName, title, children, buttonText, onSubmit }) {
  const { isOpen, close } = usePopup(popupName);

  if (!isOpen) return null;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container--${popupName}`}>
        <h2 className="popup__title">{title}</h2>
        <button className="popup__close-btn">
          <img
            className="popup__close"
            src={popupClose}
            alt="close button"
            onClick={close}
          />
        </button>
        <form noValidate onSubmit={onSubmit} className="popup__form">
          {children}
          <button type="submit" className={`popup__submit-btn--${popupName}`}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
