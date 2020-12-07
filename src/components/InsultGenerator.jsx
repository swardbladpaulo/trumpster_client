import React, { Component } from "react";

class InsultGenerator extends Component {
	state = {
		showInsultButton: false,
		name: "",
		insultResult: "",
	};

	setNameValue(e) {
		this.setState({ name: e.target.value });
	}

	randomizeInsult = (e) => {
		e.preventDefault();
		const insults = [
			`${this.state.name}, didn’t have the mental capacity needed. You were dumb as a rock and I couldn’t get rid of you fast enough. You were lazy as hell`,
			`${this.state.name} went in and didn’t know the air conditioning didn’t work. You sweated like a dog… How are you gonna beat ISIS? I don’t think it’s gonna happen.`,
			`If I were running ‘The View’, I’d fire ${this.state.name}. I mean, I’d look at you right in that fat, ugly face of yours, I’d say ${this.state.name}, you’re fired.`,
			`An ''extremely credible source'' has called my office and told me that ${this.state.name}'s birth certificate is a fraud.`,
			`${this.state.name} is an extremely unattractive woman, I refuse to say that because I always insist on being politically correct.`,
			`I am watching Crooked ${this.state.name} speak. Same old stuff, our country needs change!`,
		];
		const result = insults[Math.floor(Math.random() * 6)];
		this.setState({ insultResult: result });
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
							onChange={(e) => this.setNameValue(e)}
						/>
						<button
							type="submit"
							value="submit"
							data-cy="submit-insult"
							onClick={(e) => this.randomizeInsult(e)}
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
					<p data-cy="insult-result">{this.state.insultResult}</p>
				</div>
			</>
		);
	}
}

export default InsultGenerator;
