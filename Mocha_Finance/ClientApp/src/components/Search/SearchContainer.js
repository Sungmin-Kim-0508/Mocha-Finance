import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { stockApi } from "../../apis/stockApi";
import { connect } from "react-redux";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import style from "./search.module.scss";
import { withRouter } from "react-router-dom";
import { searchStockDetails } from "../../actions/stockActions";
import routes from "../../routes";
import { Typography } from "@material-ui/core";

var temp = [];

// Use your imagination to render suggestions.
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return temp.filter(symbol => regex.test(getSuggestionValue(symbol)));
}

function getSuggestionValue(suggestion) {
  return `${suggestion.symbol}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.symbol}, ${suggestion.name}, ${suggestion.price}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);

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
      value: ""
    };
  }

  state = {
    keyword: "",
    isSearch: false,
    suggestions: [],
    value: ""
  };

  handleSearch = (e, { newValue }) => {
    this.setState({
      keyword: e.target.value,
      value: newValue
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { value } = this.state;
    const {
      history: { push }
    } = this.props;
    if (value.length !== 0) {
      this.props.searchStockDetails(value);
      push(routes.search_result);
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
      className: style.input,
      onChange: this.handleSearch
    };
    return (
      <>
        <SearchPresenter
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default withRouter(
  connect(mapStateToProps, { searchStockDetails })(SearchContainer)
);
