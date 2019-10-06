import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import axios from "../../axios/axios-orders";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/Spinner/Spinner";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    showModal: false,
    isLoading: false
  };

  constructor(props) {
    super(props);
    // axios
    //   .get("/ingredients.json")
    //   .then(({ data: ingredients }) => this.setState({ ingredients }))
    //   .catch(error => {
    //     console.log("error: ", error);
    //   });
  }

  handleModalHandler = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  burgerPurchaseHandler = () => {
    this.props.history.push({
      pathname: "/checkout"
    });
  };

  render() {
    let burger = (
      <Spinner isInverted={false}>Loading Ingredients please wait...</Spinner>
    );
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients}></Burger>

          <BuildControls
            showModal={this.state.showModal}
            isLoading={this.state.isLoading}
            onAddIngredient={this.props.addIngredientHandler}
            onRemoveIngredient={this.props.removeIngredientHandler}
            onModalOpen={this.handleModalHandler}
            onBurgerPurchaseHandler={this.burgerPurchaseHandler}
          ></BuildControls>
        </Aux>
      );
    }

    return <Aux>{burger}</Aux>;
  }
}
const mapStateToProps = (state, ownProps) => ({
  ingredients: state.ingredientsState.ingredients,
  totalPrice: state.ingredientsState.totalPrice
});
const mapDispatchToProps = dispatch => {
  return {
    addIngredientHandler: ingName =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    removeIngredientHandler: ingName =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
