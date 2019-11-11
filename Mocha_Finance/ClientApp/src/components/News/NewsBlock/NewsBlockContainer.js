import React, { Component } from "react";
import NewsBlockPresenter from "./NewsBlockPresenter";
import { connect } from "react-redux";
import { returnErrors } from "../../../actions/errorActions";
import newsApi from "../../../apis/newsApi";

class NewsBlockContainer extends Component {
  state = {
    news: [],
    hasError: false
  };
  async componentDidMount() {
    try {
      const { data } = await newsApi.top_headlines();
      this.setState({
        news: data.articles,
        hasError: false
      });
    } catch (err) {
      this.setState({
        news: [],
        hasError: false
      });
      // const {
      //   status,
      //   data: { message }
      // } = err.response;
      this.props.returnErrors(`Failed to load the news..`, 400);
    }
  }
  render() {
    const { news, hasError } = this.state;
    const { msg: errorMsg } = this.props;
    return (
      <NewsBlockPresenter news={news} hasError={hasError} errorMsg={errorMsg} />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { returnErrors }
)(NewsBlockContainer);
