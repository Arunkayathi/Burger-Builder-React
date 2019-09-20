import React, { Component } from "react";
import Cards from "react-credit-cards";
import { Form } from "semantic-ui-react";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../../../utils/payment";

class PaymentInfo extends Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };
  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    return (
      <div id="PaymentForm">
        <div style={{ marginBottom: "15px" }}>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
        </div>

        <Form>
          <Form.Input
            fluid
            name="number"
            label="Card Number"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />
          <Form.Input
            fluid
            name="name"
            label="Name"
            placeholder="Name on Card"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="expiry"
              label="Expiry"
              placeholder="MM/YY"
              pattern="\d\d/\d\d"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <Form.Input
              fluid
              name="cvc"
              label="CVC"
              type="tel"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </Form.Group>
          <Form.Input type="hidden" name="issuer" value={issuer} />
        </Form>
      </div>
    );
  }
}

export default PaymentInfo;
