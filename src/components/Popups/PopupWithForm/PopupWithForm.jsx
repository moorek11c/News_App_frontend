import "./PopupWithForm.css";
import popupClose from "../../../Assets/CloseBtn.svg";

import { usePopup } from "../../Hooks/usePopup";

function PopupWithForm({ popupName, title, children, buttonText }) {
  const { isOpen, close } = usePopup(popupName);

  if (!isOpen) return null;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button className="popup__close-btn">
          <img
            className="popup__close"
            src={popupClose}
            alt="close button"
            onClick={close}
          />
        </button>
        <form className="popup__form">
          {children}
          <button type="submit" className="popup__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
