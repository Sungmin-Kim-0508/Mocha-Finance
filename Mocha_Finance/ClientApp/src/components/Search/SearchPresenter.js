import React from "react";
import style from "./search.module.scss";
import Autosuggest from 'react-autosuggest';
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography } from '@material-ui/core';

const SearchPresenter = ({ handleSearch, handleSubmit, suggestions, onSuggestionsFetchRequested, onSuggestionsClearRequested,
  getSuggestionValue, renderSuggestion, inputProps }) => {

  return (

    <>


      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="keyword"
          className={style.searchInput}
          placeholder="Search for news, symbols or companies"
          onChange={handleSearch}
        /> */}

        <Card className={style.suggestionsContainerOpen}>
          {/* <CardContent style={{ width: '45%', height: '1%', backgroundColor: '#7171ff' }}> */}
          {/* <CardContent className={style.suggestionsContainerOpen}> */}
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
          {/* </CardContent> */}
        </Card>

        {/* <input type="submit" className={style.submitInput} value="Search" /> */}
      </form>

    </>
  );
};

export default SearchPresenter;
