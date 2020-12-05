import React, { Component } from "react";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	injectStripe,
} from "react-stripe-elements";

class SubscriptionPayment extends Component {
	state = {
		showPayment: false,
	};
	render() {
		return (
			<div>
				{this.state.showPayment ? (
					<form data-cy="payment-form">
						<div data-cy="card-number">
							<label>Card Number</label>
							<CardNumberElement />
						</div>
						<div data-cy="card-expiry">
							<label>Expiry Date</label>
							<CardExpiryElement />
						</div>
						<div data-cy="card-cvc">
							<label>CVC Code</label>
							<CardCVCElement />
						</div>
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
export default injectStripe(SubscriptionPayment);
