import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import axios from "../../axios/axios-orders";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1.5,
  bacon: 1.3,
  cheese: 0.4
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    total: 0.0,
    showModal: false,
    isLoading: false
  };
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const updatedTotal = this.state.total + INGREDIENT_PRICES[type];
    this.setState({ total: updatedTotal, ingredients: updatedIngredients });
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const updatedTotal = this.state.total - INGREDIENT_PRICES[type];
    this.setState({ total: updatedTotal, ingredients: updatedIngredients });
    this.setState({ ingredients: updatedIngredients });
  };

  handleModalHandler = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  burgerPurchaseHandler = async () => {
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
    const data = await axios.post("/orde", order);

    this.setState({ isLoading: false, showModal: false });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>

        <BuildControls
          total={this.state.total}
          showModal={this.state.showModal}
          isLoading={this.state.isLoading}
          ingredients={this.state.ingredients}
          onAddIngredient={this.addIngredientHandler}
          onRemoveIngredient={this.removeIngredientHandler}
          onModalOpen={this.handleModalHandler}
          onBurgerPurchaseHandler={this.burgerPurchaseHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
