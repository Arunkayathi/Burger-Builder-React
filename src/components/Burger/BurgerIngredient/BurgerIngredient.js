import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  ingredient = null;
  render() {
    switch (this.props.type) {
      case "bread-bottom":
        this.ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        this.ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        this.ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        this.ingredient = <div className={classes.Cheese} />;
        break;
      case "bacon":
        this.ingredient = <div className={classes.Bacon} />;
        break;
      case "salad":
        this.ingredient = <div className={classes.Salad} />;
        break;
      default:
        this.ingredient = null;
    }
    return this.ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
