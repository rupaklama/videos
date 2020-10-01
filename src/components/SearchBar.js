import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onChangeHandler = event => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };

  onFormSubmit = event => {
    event.preventDefault();
    // TODO: make sure we call callback from parent component

    this.setState({ term: '' })
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
