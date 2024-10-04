import "./SavedNewsPage.css";
import Header from "../../Header/Header";
import SavedNewsMain from "./SavedNewsMain/SavedNewsMain";
import SavedNewsCards from "./SavedNewsCards/SavedNewsCards";

function SavedNewsPage() {
  return (
    <>
      <div className="saved-news-page__container">
        <Header isSavedNewsPage={true} />
      </div>
      <SavedNewsMain />
      <SavedNewsCards />
    </>
  );
}

export default SavedNewsPage;
