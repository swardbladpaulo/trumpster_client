import React, { Component } from "react";

const insults = [
  "${name}, didn’t have the mental capacity needed. You was dumb as a rock and I couldn’t get rid of you fast enough. You were lazy as hell",
  "${name} went in and didn’t know the air conditioning didn’t work. You sweated like dogs… How are you gonna beat ISIS? I don’t think it’s gonna happen.",
]
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
