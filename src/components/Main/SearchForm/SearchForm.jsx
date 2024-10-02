import "./SearchForm.css";
import { useState, useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";

const SearchForm = ({ onSearch }) => {
  // State to store the search query

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  // Destructure the handleSearch function from the SearchContext

  const { handleSearch } = useContext(SearchContext);

  // Function to handle the input change

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
    <div className="search__form-container">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__form-contents">
          <input
            value={query}
            onChange={handleInputChange}
            placeholder={error || "Search..."}
            className="search__input"
            type="text"
          />
          <button className="search__button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
