import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  render() {
    const resultItems = this.props.data.map((result) => (
      <div key={result.objectID}>
        <h3>
          <a href={result.url}>{result.title}</a>
        </h3>
        <p>Author: {result.author}</p>
      </div>
    ));
    return (
      <div id="results-container">
        <h3>Results</h3>
        {resultItems}
      </div>
    );
  }
}

export default SearchResults;
