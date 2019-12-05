import React from "react";
import style from "./search.module.scss";
import Autosuggest from "react-autosuggest";
import { Card } from "@material-ui/core";

const SearchPresenter = ({
  handleSubmit,
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  renderSuggestion,
  inputProps
}) => {
  return (
    <>
      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <Card className={style.suggestionsContainerOpen}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </Card>
      </form>
    </>
  );
};

export default SearchPresenter;
