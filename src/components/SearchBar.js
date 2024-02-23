import { useState } from "react";
import React from "react";


class SearchBar extends React.Component{

  state = {term:''}

  onFormSubmit = (e) => {
      e.preventDefault();
  }


  render() {
  return (
    <div className=" ui segment">
      <form onSubmit={this.onFormSubmit} class="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          type="text"
          value = {this.state.term}
          onChange={ e => this.setState ({term: e.target.value})}
          />

          <p> {this.state.term}</p>

        </div>
      </form>
    </div>
  );
  };
};

export default SearchBar;
