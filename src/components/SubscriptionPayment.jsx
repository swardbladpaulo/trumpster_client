import React, { Component } from "react";

class SubscriptionPayment extends Component {
	state = {
		showPayment: false,
	};
	render() {
		return (
			<div>
				{this.state.showPayment ? (
					<form data-cy="payment-form">
						<div>Give me all your money!</div>
					</form>
				) : (
					<button
						data-cy="become-subscriber"
						onClick={() => this.setState({ showPayment: true })}
					>
						Become a Trumpscriber!
					</button>
				)}
			</div>
		);
	}
}
export default SubscriptionPayment;
