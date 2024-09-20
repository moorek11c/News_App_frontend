import { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  // set the active popup
  const [activePopup, setActivePopup] = useState(null);

  //   open the popup
  const openPopup = (popupName) => {
    console.log(`Opening popup: ${popupName}`);
    setActivePopup(popupName);
  };
  // close the modal
  const closePopup = () => setActivePopup(null);

  return (
    <PopupContext.Provider value={{ activePopup, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePopupContext = () => useContext(PopupContext);
