import React, { Component } from "react";

import Nav from "./Nav.js";

//Redux
import { connect } from "react-redux";
import { searchNews, saveSearch } from "../actions/searchActions";

class SearchForm extends Component {
  //Function handles the onChange event and sends the target value to the searchNews function in the actions folder
  handleChange = (e) => {
    this.props.searchNews(e.target.value);
  };

  //Function handles the submit event
  handleSubmit = (e) => {
    e.preventDefault();
    //Sends this.props.text(From Redux State) through the handleSearch prop to the App.js file
    this.props.handleSearch(this.props.text);

    // //Saves search term to Redux state array
    this.props.saveSearch(this.props.text);

    //Clears input after submission
    e.target.firstElementChild.firstChild.value = "";
  };

  render() {
    return (
      <div id="search-bar-container">
        <form onSubmit={this.handleSubmit}>
          <div id="form-container">
            <input
              id="form-input"
              placeholder="What are you looking for?"
              type="text"
              name="query"
              onChange={this.handleChange}
            ></input>
          </div>
          <br />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <Nav data={this.props.searchTerms} />
      </div>
    );
  }
}

//After leaving the searchReducer I need to use MapStateToProps to access the search text in the component
//news variable is used because in the root reducer, that was the variable I chose
//text variable is used to retrieve payload from searchReducer
//now a this.props.text variable is available
const mapStateToProps = (state) => ({
  text: state.news.text,
  searchTerms: state.news.searchTerms,
});

export default connect(mapStateToProps, { searchNews, saveSearch })(SearchForm);
