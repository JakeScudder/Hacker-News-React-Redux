import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSearch } from "../actions/searchActions";

import { IoIosClose } from "react-icons/io";

class Nav extends Component {
  handleClick = (e) => {
    let searchTerm = e.target.textContent;
    this.props.handleNav(searchTerm);
  };

  handleClose = (e) => {
    let term = e.target.parentElement.parentElement.parentElement.textContent;
    this.props.deleteSearch(term);
  };

  render() {
    console.log(this.props.data);
    const searchTerms = this.props.data.map((term, index) => (
      <li className="recent-search-li" key={index}>
        <button
          className="search-term-button"
          style={{ color: "black", verticalAlign: "middle" }}
          onClick={this.handleClick}
        >
          {term}
          <div className="centering-div">
            <IoIosClose
              size={30}
              style={{ marginLeft: "5px" }}
              onClick={this.handleClose}
            />
          </div>
        </button>
      </li>
    ));
    return (
      <div>
        <ul>
          {searchTerms.length > 0 ? (
            <li className="recent-search-title">Recent Searches:</li>
          ) : null}
          {searchTerms}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerms: state.news.searchTerms,
});

export default connect(mapStateToProps, { deleteSearch })(Nav);
