import React, { Component } from "react";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	injectStripe,
} from "react-stripe-elements";
import axios from "axios";

class SubscriptionPayment extends Component {
	state = {
		showPayment: false,
		message: ""
	};

	payWithStripe = async (event) => {
		event.preventDefault()
		let stripeResponse = await this.props.stripe.createToken()
		stripeResponse.token && (this.performPayment(stripeResponse.token.id))

	}
	performPayment = async (stripeToken) => {
		let headers = JSON.parse(localStorage.getItem("credentials"));
		debugger
		let response = await axios.post("/subscriptions", { stripeToken: stripeToken }, { headers: headers } )
		response.data.paid
			? this.setState({ message: response.data.message })
			: this.setState({ message: "Your payment information is RIGGED!!" });
	}

	render() {
		return (
			<div>
				{this.state.message ? (
					<p data-cy="payment-message">{this.state.message}</p>
				) : (
						<>
							{this.state.showPayment ? (
								<form data-cy="payment-form" onSubmit={this.payWithStripe}>
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
									<button>Confirm Payment</button>
								</form>
							) : (
									<button
										data-cy="become-subscriber"
										onClick={() => this.setState({ showPayment: true })}
									>
										Become a Trumpscriber!
									</button>
								)
							}
						</>
					)}
			</div>
		);
	}
}
export default injectStripe(SubscriptionPayment);
