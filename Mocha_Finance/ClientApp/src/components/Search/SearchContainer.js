import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import style from "./search.module.scss";
import Autosuggest from 'react-autosuggest';
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography } from '@material-ui/core';

var temp = [];

// Use your imagination to render suggestions.
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return temp.filter(symbol => regex.test(getSuggestionValue(symbol)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.symbol}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.symbol}, ${suggestion.name}, ${suggestion.price}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (

    <Typography variant="h6" color="inherit">
      {suggestionText}
    </Typography>


  );
}
class SearchContainer extends Component {
  async componentDidMount() {
    const { data } = await stockApi.symbolList();

    temp = data.symbolsList;

    this.symbols = data.symbolsList;
    this.state = {
      symbols: this.symbols,
      suggestions: [],
      value: ''
    }

  }

  state = {
    keyword: '',
    isSearch: false,
    suggestions: [],
    value: ''
  };

  // onChange
  handleSearch = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { keyword } = this.state;

    if (keyword.length !== 0) {
      console.log("Submit!");
    }
  };
  // this stores the filtered list into state
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {

    const { value, suggestions } = this.state;


    const inputProps = {
      placeholder: "Search for news, symbols or companies",
      value,
      onChange: this.handleSearch
    };
    return (

      <Card style={{ marginTop: '20%' }}>
        <CardContent>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        </CardContent>
      </Card>

    );
  }
}



export default SearchContainer;
