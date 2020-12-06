import React, { Component } from "react";

class InsultGenerator extends Component {
  state = {
    showInsultButton: false,
  };
  render() {
    return (
      <>
        {this.state.showInsultButton ? (
          <form data-cy="insult-form">
            <input
              type="text"
              name="insult-name"
              data-cy="insult-name"
              placeholder="Name someone you hate"
            />
            <input
              type="text"
              name="insult-hashtag"
              data-cy="insult-hashtag"
              placeholder="Add a Hashtag"
            />
            <button type="submit" value="submit" data-cy="submit-insult">
              Submit
            </button>
          </form>
        ) : (
          <button
            data-cy="create-insult"
            onClick={() => this.setState({ showInsultButton: true })}
          >
            Create Insult
          </button>
        )}
        <div>
          <div data-cy="insult-result">this is an insult</div>
        </div>
      </>
    );
  }
}

export default InsultGenerator;
