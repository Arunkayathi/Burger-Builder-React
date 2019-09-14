import React from "react";
import { Button } from "semantic-ui-react";
import styles from "./BuildControl.module.css";
const BuildControl = props => {
  return (
    <div className={styles["control-box"]}>
      <strong>{props.name}</strong>
      <div>
        <Button.Group>
          <Button color="blue" onClick={props.addIngredient}>
            +
          </Button>
          <Button.Or />
          <Button
            color="red"
            disabled={props.ingredients[props.type] === 0}
            onClick={() => props.removeIngredient(props.type)}
          >
            -
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default BuildControl;
