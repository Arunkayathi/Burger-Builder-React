import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
      country: "",
      state: ""
    }
  };
  render() {
    return (
      <Form>
        <Form.Input
          fluid
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        ß
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="firstName"
            label="First name"
            placeholder="First name"
            required
          />
          <Form.Input
            fluid
            name="lastName"
            label="Last name"
            placeholder="Last name"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="streetAddress"
            label="Street Address"
            placeholder="Street Address"
            required
          />
          <Form.Input
            fluid
            label="City"
            name="city"
            placeholder="City"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="postalCode"
            label="Postalcode"
            placeholder="Postalcode"
            required
          />
          <Form.Input
            fluid
            label="Country"
            name="country"
            placeholder="Country"
            required
          />
          <Form.Input
            fluid
            label="State"
            name="state"
            placeholder="State"
            required
          />
        </Form.Group>
      </Form>
    );
  }
}

export default ContactData;
