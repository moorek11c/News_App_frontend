import { useEffect } from "react";
import { UsePopupContext } from "../Contexts/PopupContext";

export const usePopup = (popupName) => {
  const { activePopup, openPopup, closePopup } = UsePopupContext();

  const isOpen = activePopup === popupName;

  const open = () => openPopup(popupName);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const close = () => closePopup();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains("popup")) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);

  return { isOpen, open, close };
};
