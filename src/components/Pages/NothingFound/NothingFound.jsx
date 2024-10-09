import "./NothingFound.css";
import nothingFoundImg from "../../../Assets/not-found_v1.png";

function NothingFound() {
  return (
    <div className="Nothing-found__container">
      <img
        className="nothing-found__image"
        src={nothingFoundImg}
        alt="Nothing found"
      />
      <h2 className="nothing-found__title">Nothing Found</h2>
      <p className="nothing-found__description">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
