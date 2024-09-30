import { UsePopupContext } from "../Contexts/PopupContext";

export const usePopup = (popupName) => {
  const { activePopup, openPopup, closePopup } = UsePopupContext();

  const isOpen = activePopup === popupName;

  const open = () => openPopup(popupName);

  const close = () => closePopup();

  return { isOpen, open, close };
};
