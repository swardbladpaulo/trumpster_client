import React from "react";

class DisplayRandomQuotes {
    state = {
        randomQuotesDisplay: getRandomQuotes()
    }
  render() {
    return(
        <div data-cy="random5quotes">
            <p>
                {this.state.randomQuotesDisplay}
            </p>
            <button
            onclick={() => this.setState({ randomQuotesDisplay: getRandomQuotes() })}
            >
                get a random quote
            </button>
        </div>
    )
  }
}

export default DisplayRandomQuotes