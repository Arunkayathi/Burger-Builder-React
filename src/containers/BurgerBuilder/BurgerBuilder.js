import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger></Burger>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
