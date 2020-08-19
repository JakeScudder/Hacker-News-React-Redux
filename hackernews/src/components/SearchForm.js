import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
              value={this.state.query}
            ></input>
          </div>
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
