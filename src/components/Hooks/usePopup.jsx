import { usePopupContext } from "../Contexts/PopupContext";

export const usePopup = (popupName) => {
  const { activePopup, openPopup, closePopup } = usePopupContext();

  const isOpen = activePopup === popupName;

  const open = () => openPopup(popupName);

  const close = () => closePopup();

  return { isOpen, open, close };
};

// this hook is used to open and close the popup
// it uses the context to get the active popup and the functions to open and close the popup
// it returns isOpen, open and close functions
