import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { searchNews } from "../actions/searchActions";

class SearchForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     query: "",
  //   };
  // }

  handleChange = (e) => {
    this.props.searchNews(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let search = this.state.query;
    this.props.handleSearch(search);
  };

  render() {
    return (
      <div id="search-bar-container">
        <h1>Search Bar</h1>
        <form onSubmit={this.handleSubmit}>
          <div id="form-container">
            <input
              id="form-input"
              type="text"
              name="query"
              onChange={this.handleChange}
            ></input>
          </div>
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.news.text,
});

export default connect(mapStateToProps, { searchNews })(SearchForm);
