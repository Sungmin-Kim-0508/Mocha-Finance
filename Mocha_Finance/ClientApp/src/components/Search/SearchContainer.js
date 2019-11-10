import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

class SearchContainer extends Component {
  async componentDidMount() {
    const { data } = await stockApi.symbolList();

    this.setState({
      symbols: data.symbolsList
    })

  }
  state = {
    keyword: "",
    isSearch: false,
    suggestions: [],
    symbols: []
  };

  handleSearch = e => {
    this.setState({
      keyword: e.target.value,
      suggestions: getSuggestions(e.target.value)
    });
    console.log("Hi" + this.suggestions);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { keyword } = this.state;

    if (keyword.length !== 0) {
      console.log("Submit!");
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    //console.log(this.state.symbols);
    return (
      <SearchPresenter
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
        suggestions={this.suggestions}

        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
      />
    );
  }
}

function getSuggestionValue(suggestion) {

  return `${suggestion.symbol} ${suggestion.name}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.symbol} ${suggestion.name}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.twitter}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return symbols.filter(value => regex.test(getSuggestionValue(value)));
}
export default SearchContainer;
