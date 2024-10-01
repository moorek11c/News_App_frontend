import "./SavedNewsPage.css";
import Header from "../../Header/Header";
import SavedNewsMain from "../../SavedNewsMain/SavedNewsMain";
import SavedNewsCards from "../../SavedNewsCards/SavedNewsCards";

function SavedNewsPage() {
  return (
    <>
      <div className="saved-news__container">
        <Header isSavedNewsPage={true} />
      </div>
      <SavedNewsMain />
      <SavedNewsCards />
    </>
  );
}

export default SavedNewsPage;
