import React from "react";
import style from "./search.module.scss";

const SearchPresenter = ({ handleSearch, handleSubmit }) => {
  return (
    <>
      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          className={style.searchInput}
          placeholder="Search for news, symbols or companies"
          onChange={handleSearch}
        />
        <input type="submit" className={style.submitInput} value="Search" />
      </form>
    </>
  );
};

export default SearchPresenter;
