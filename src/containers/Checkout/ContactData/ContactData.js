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
        <Form.Input fluid label="Email" placeholder="Email" required />
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            placeholder="First name"
            required
          />
          <Form.Input
            fluid
            label="Last name"
            placeholder="Last name"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Street Address"
            placeholder="Street Address"
            required
          />
          <Form.Input fluid label="City" placeholder="City" required />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Postalcode"
            placeholder="Postalcode"
            required
          />
          <Form.Input fluid label="Country" placeholder="Country" required />
          <Form.Input fluid label="State" placeholder="State" required />
        </Form.Group>
      </Form>
    );
  }
}

export default ContactData;
