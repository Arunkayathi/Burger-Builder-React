import React from "react";
import styles from "./BuildControls.module.css";
import { Card, Container } from "semantic-ui-react";
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from "prop-types";

const controls = [
  { name: "Bacon", type: "bacon" },
  { name: "Salad", type: "salad" },
  { name: "Cheese", type: "cheese" },
  { name: "Meat", type: "meat" }
];
const BuildControls = props => (
  <Container className={styles.BuildControls}>
    <Card className={styles["center-card"]}>
      <Card.Content extra>
        <Card.Header>Total Price: {props.total} $</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          {controls.map(control => {
            return (
              <BuildControl
                key={control.name}
                name={control.name}
                ingredients={props.ingredients}
                type={control.type}
                addIngredient={() => props.onAddIngredient(control.type)}
                removeIngredient={props.onRemoveIngredient}
              ></BuildControl>
            );
          })}
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
);
BuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  onAddIngredient: PropTypes.func.isRequired
};
export default BuildControls;
