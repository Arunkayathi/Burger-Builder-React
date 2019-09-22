import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "../../axios/axios-orders";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {},
    activeIndex: 0,
    loading: false
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {
      salad: +query.get("salad"),
      meat: +query.get("meat"),
      cheese: +query.get("cheese"),
      bacon: +query.get("bacon")
    };

    this.setState({ ingredients });
  }

  handleClick = (index = 0) => {
    console.log("index: ", index);
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  orderClickedHandler = async () => {
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.total.toFixed(2),
      customer: {
        name: "Arun",
        address: {
          street: "test street1",
          zipCode: "45259",
          country: "USA"
        },
        email: "arun@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    const data = await axios.post("/orders.json", order);
    this.setState({ isLoading: false, showModal: false });
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          activeIndex={this.state.activeIndex}
          handleClick={this.handleClick}
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          orderClicked={this.orderClickedHandler}
        ></CheckoutSummary>
      </div>
    );
  }
}

Checkout.propTypes = {};

export default Checkout;
