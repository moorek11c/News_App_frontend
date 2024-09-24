import { useState } from "react";

import "./Main.css";

import SearchForm from "./SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import PreLoader from "../PreLoader/PreLoader";

function Main() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
    }, 2000); // Simulate a 2-second search operation
  };

  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What&apos;s going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <PreLoader />}
      {!isLoading && hasSearched && <NewsCardList />}
    </main>
  );
}

export default Main;
