import React, { Component } from "react";
import axios from "axios"

class SearchQuotes extends Component {
  state = {
    searchValue: "",
    specificQuotes: []
  }

  setInputValue(event) {
    this.setState({ searchValue: event.target.value });
  }

  async searchQuote(event) {
    const q = this.state.searchValue
    let response = await axios.get(`/quotesq=${q}`)
    this.setState({specificQuotes: response.data.quotes})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-cy="search_input"
          placeholder="search for Fraud"
          onChange={(event) => this.setInputValue(event)}
        />
        <button
          data-cy="search_button"
          onClick={(event) => this.searchQuote(event)}
        >
          Search
        </button>
        <div data-cy="search_result"></div>
      </div>
    );
  }
}

export default SearchQuotes;
