import React, { Component } from "react";

import Comments from "./Comments";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
     postID: 0,
     showingComments: false
    };
    // this.showComments = this.showComments.bind(this);
  }
  //Function that capitalizes the author name
  capitalizeWord = (name) => {
    return name[0].toUpperCase() + name.substr(1);
  };

  showComments = (e, id) => {
    this.setState({postID: id})
    console.log(e.target);
    if(e.target.innerHTML === "Show Comments") {
      this.setState({showingComments : true});
      e.target.innerHTML = "Hide Comments";
    } else {
      this.setState({showingComments : false});
      e.target.innerHTML = "Show Comments";
    }
  }

  render() {
    //Results are passed down from the App.js file, made available in this.props.data
    
    const resultItems = this.props.data.map((result) => (
      <div key={result.objectID}>
        <h3 className="specific-result-title">
          <a href={result.url}>{result.title}</a>
        </h3>
        <p className="author">Author: {this.capitalizeWord(result.author)}</p>
        <p className="created-at">Posted on: {result.created_at.substr(0, 10)}</p>
        <button className="get-comments" onClick={(e) => this.showComments(e, result.objectID)}>Show Comments</button>
        {this.state.postID === result.objectID && this.state.showingComments ? <Comments id={result.objectID} /> : null}
       
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
