import React, { Component } from "react";

class SearchResults extends Component {
  //Function that capitalizes the author name
  capitalizeWord = (name) => {
    return name[0].toUpperCase() + name.substr(1);
  };

  render() {
    //Results are passed down from the App.js file, made available in this.props.data
    const resultItems = this.props.data.map((result) => (
      <div key={result.objectID}>
        <h3 className="specific-result-title">
          <a href={result.url}>{result.title}</a>
        </h3>
        <p className="author">Author: {this.capitalizeWord(result.author)}</p>
      </div>
    ));
    return (
      <div id="results-container">
        <h3 id="results-title">Results</h3>
        <hr />
        {resultItems}
      </div>
    );
  }
}

export default SearchResults;
