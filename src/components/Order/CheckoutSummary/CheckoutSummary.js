import React from "react";
import Burger from "../../Burger/Burger";
import styles from "./CheckoutSummary.module.css";
import { Accordion, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import ContactData from "../../../containers/Checkout/ContactData/ContactData";
import PaymentInfo from "../../../containers/Checkout/PaymentInfo/PaymentInfo";

const CheckoutSummary = props => {
  return (
    <Accordion styled className={styles["checkout-accordion"]}>
      <Accordion.Title
        active={props.activeIndex === 0}
        index={0}
        onClick={() => props.handleClick(0)}
      >
        <Icon name="dropdown" />
        Preview your Burger
      </Accordion.Title>
      <Accordion.Content active={props.activeIndex === 0}>
        <Burger ingredients={props.ingredients}></Burger>
        <div className={styles["accordion-btns"]}>
          <Button color="red" inverted onClick={props.checkoutCancelled}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" inverted onClick={() => props.handleClick(1)}>
            <Icon name="checkmark" /> continue
          </Button>
        </div>
      </Accordion.Content>

      <Accordion.Title
        active={props.activeIndex === 1}
        index={1}
        onClick={() => props.handleClick(1)}
      >
        <Icon name="dropdown" />
        Shipping Address
      </Accordion.Title>
      <Accordion.Content active={props.activeIndex === 1}>
        <ContactData></ContactData>
        <div className={styles["accordion-btns"]}>
          <Button color="red" inverted onClick={() => props.handleClick(0)}>
            <Icon name="arrow left" /> previous
          </Button>
          <Button color="green" inverted onClick={props.validateForm}>
            <Icon name="checkmark" /> continue
          </Button>
        </div>
      </Accordion.Content>

      <Accordion.Title
        active={props.activeIndex === 2}
        index={2}
        onClick={() => props.handleClick(2)}
      >
        <Icon name="dropdown" />
        Payment Information
      </Accordion.Title>
      <Accordion.Content active={props.activeIndex === 2}>
        <PaymentInfo></PaymentInfo>
        <Button fluid color="green" orderClicked={props.orderClicked}>
          Pay
        </Button>
      </Accordion.Content>
    </Accordion>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ingredients: state.ingredients
});

export default connect(
  mapStateToProps,
  null
)(CheckoutSummary);
