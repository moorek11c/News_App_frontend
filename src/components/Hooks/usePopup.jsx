import { usePopupContext } from "../Contexts/PopupContext";

export const usePopup = (popupName) => {
  const { activePopup, openPopup, closePopup } = usePopupContext();

  const isOpen = activePopup === popupName;

  const open = () => openPopup(popupName);

  const close = () => closePopup();

  return { isOpen, open, close };
};
