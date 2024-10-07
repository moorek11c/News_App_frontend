import "./SavedNewsPage.css";
import Header from "../../Header/Header";
import SavedNewsMain from "./SavedNewsMain/SavedNewsMain";
import SavedNewsCards from "./SavedNewsCards/SavedNewsCards";
import Footer from "../../Footer/Footer";

function SavedNewsPage() {
  return (
    <>
      <div className="saved-news-page__container">
        <Header isSavedNewsPage={true} />
      </div>
      <SavedNewsMain />
      <SavedNewsCards />
      <Footer />
    </>
  );
}

export default SavedNewsPage;
