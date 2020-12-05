import React, { Component } from "react";
import axios from "axios";

class SearchQuotes extends Component {
  state = {
    searchValue: "",
    specificQuotes: [],
  };

  setInputValue(event) {
    this.setState({ searchValue: event.target.value });
  }

  async searchQuote() {
    let headers = JSON.parse(localStorage.getItem("credentials"))
    const q = this.state.searchValue;
    let response = await axios.get('/quotes', {headers: headers, params: {query: q}});
    this.setState({ specificQuotes: response.data.quotes });
  }
  render() {
    let displayQuotes = this.state.specificQuotes.map((quotes) => {
      return (
        <li key={quotes.id}>
          {quotes.quote} <br />
          {quotes.date} <br />
          {quotes.source} <br />
        </li>
      );
    });
    return (
      <div>
        <input
          type="text"
          data-cy="search_input"
          placeholder="Search for Fraud"
          onChange={(event) => this.setInputValue(event)}
        />
        <button
          data-cy="search_button"
          onClick={(event) => this.searchQuote(event)}
        >
          Search
        </button>
        <div data-cy="search_results">
          <ul>{displayQuotes}</ul>
        </div>
      </div>
    );
  }
}

export default SearchQuotes;
