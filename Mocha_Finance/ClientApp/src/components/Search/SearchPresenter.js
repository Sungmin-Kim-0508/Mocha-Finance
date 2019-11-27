import React from "react";
import style from "./search.module.scss";
import Autosuggest from 'react-autosuggest';

const SearchPresenter = ({ handleSearch, handleSubmit, suggestions, onSuggestionsFetchRequested, onSuggestionsClearRequested,
  getSuggestionValue, renderSuggestion, inputProps }) => {
  //value = "sad";


  return (

    <>
      {/* <form onChange={handleSearch}>
        <Autosuggest>
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        </Autosuggest>
      </form> */}

      {/* Search Bar */}

      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="keyword"
          className={style.searchInput}
          placeholder="Search for news, symbols or companies"
          onChange={handleSearch}
        /> */}
        <input type="submit" className={style.submitInput} value="Search" />
      </form>
    </>
  );
};

export default SearchPresenter;
