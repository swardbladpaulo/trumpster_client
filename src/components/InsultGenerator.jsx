import React, { Component } from "react";

class InsultGenerator extends Component {
  state = {
    showInsultButton: false,
    insults: [],
  };

  listOfQuotes = () => {
    const insults = [
      `${name}, didn’t have the mental capacity needed. You were dumb as a rock and I couldn’t get rid of you fast enough. You were lazy as hell`,
      `${name} went in and didn’t know the air conditioning didn’t work. You sweated like a dog… How are you gonna beat ISIS? I don’t think it’s gonna happen.`,
      `If I were running ‘The View’, I’d fire ${name}. I mean, I’d look at you right in that fat, ugly face of yours, I’d say ${name}, you’re fired.`,
    ];
    const name = this.state.nameValue;
  }

  randomizeInsult = () => {
    debugger
    this.setState({ insultResult: insults[Math.floor(Math.random() * 3)] });
  };

  insultResult = (insults) => {
    debugger
    this.setState ({insultResult: insults })
  }

  setNameValue(event) {
    debugger
    this.setState({ nameValue: event.target.value });
  }


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
              onChange={(event) => this.setNameValue(event)}
            />
            {/* <input
              type="text"
              name="insult-hashtag"
              data-cy="insult-hashtag"
              placeholder="Add a Hashtag"
              onChange={(event) => this.setHashtagValue(event)}
            /> */}
            <button
              type="submit"
              value="submit"
              data-cy="submit-insult"
              onClick={this.randomizeInsult}
            >
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
          <div data-cy="insult-result">{this.displayInsultResult}</div>
        </div>
      </>
    );
  }
}

export default InsultGenerator;
