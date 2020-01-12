import React from "react";
import { Form, Message } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { withFormik } from "formik";
import yup from "yup";

let ContactData = ({ values, handleChange, handleSubmit }) => {
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <Form.Group widths="equal">
          <Form.Input
            name="firstName"
            label="First name"
            placeholder="First name"
            value={values.firstName}
            onChange={handleChange}
            required
          />
          <Form.Input
            name="lastName"
            label="Last name"
            placeholder="Last name"
            values={values.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            name="address.streetAddress"
            label="Street Address"
            placeholder="Street Address"
            required
          />
          <Form.Input
            label="City"
            name="address.city"
            placeholder="City"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            name="address.postalCode"
            label="Postalcode"
            placeholder="Postalcode"
            required
          />
          <Form.Input
            label="Country"
            name="address.country"
            placeholder="Country"
            required
          />
          <Form.Input
            label="State"
            name="address.state"
            placeholder="State"
            required
          />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};
ContactData = withFormik({
  mapPropsToValues: () => ({ email: "arun.reddy@gmail.com" })
})(ContactData);

export default ContactData;
