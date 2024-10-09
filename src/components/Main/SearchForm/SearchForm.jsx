import "./SearchForm.css";
import { useState, useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const { handleSearch } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // function to check if the search query is empty
  const checkQuery = () => {
    if (query.trim() === "") {
      setError("Please enter a keyword!");
      return true;
    }
    return false;
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkQuery()) {
      return;
    }
    handleSearch(query);
    onSearch();
  };

  return (
    <section className="search__section">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__form-contents">
          <div className="search__input-wrapper">
            <input
              value={query}
              onChange={handleInputChange}
              placeholder={error || "Search..."}
              className="search__input"
              type="text"
            />
          </div>
          <div className="search__button-wrapper">
            <button className="search__button">Search</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
