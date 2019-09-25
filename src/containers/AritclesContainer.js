import React, { Component } from "react";
import Articles from "../components/Articles";
import { connect } from "react-redux";
import { getArticles } from "../modules/articles";

class AritclesContainer extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <Articles articles={articles}></Articles>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  articles: state.articles.articles
});

const mapToDispatch = dispatch => ({
  getArticles: () => {
    dispatch(getArticles);
  }
});

export default connect(
  mapStateToProps,
  mapToDispatch
)(AritclesContainer);
