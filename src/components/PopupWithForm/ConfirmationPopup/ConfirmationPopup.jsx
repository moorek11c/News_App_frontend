import PopupWithForm from "../PopupWithForm";
import "./ConfirmationPopup.css";
import { usePopup } from "../../Hooks/usePopup";

function ConfirmationPopup() {
  const { open: openSignIn } = usePopup("SignInPopup");

  return (
    <div>
      <PopupWithForm
        onSubmit={openSignIn}
        buttonText="Sign in"
        popupName="confirmation"
      >
        <div className="popup__confirmation">
          <h2 className="popup__confirmation-title">
            Registration successfully completed!
          </h2>
        </div>
      </PopupWithForm>
    </div>
  );
}

export default ConfirmationPopup;
