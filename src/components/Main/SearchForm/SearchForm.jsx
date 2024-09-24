import "./SearchForm.css";
import { useState, useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

const SearchForm = ({ onSearch }) => {
  // State to store the search query

  const [query, setQuery] = useState("");

  // Destructure the handleSearch function from the SearchContext

  const { handleSearch } = useContext(SearchContext);

  // Function to handle the input change

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle the form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
    onSearch();
  };

  return (
    <div className="search__form__container">
      <form onSubmit={handleSubmit} className="search__form">
        <input
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search__input"
          type="text"
        ></input>
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
