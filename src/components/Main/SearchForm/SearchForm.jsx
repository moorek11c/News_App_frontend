import "./SearchForm.css";

function SearchForm() {
  return (
    <div>
      <form className="search__form">
        <label className="search__container" htmlFor="">
          <input className="search__input" type="text"></input>
          <button className="search__button">Search</button>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
