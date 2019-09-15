import React from "react";
import {
  Card,
  Divider,
  Header,
  Icon,
  Button,
  Container
} from "semantic-ui-react";
import PropTypes from "prop-types";

import styles from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";
import OrderNow from "./OrderNow/OrderNow";

const controls = [
  { name: "Bacon", type: "bacon" },
  { name: "Salad", type: "salad" },
  { name: "Cheese", type: "cheese" },
  { name: "Meat", type: "meat" }
];
const BuildControls = props => (
  <div className={styles.footer}>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="food" />
        Ingredients
      </Header>
    </Divider>
    <Container className={styles.BuildControls}>
      <Card className={styles["center-card"]}>
        <Card.Content extra>
          <Card.Header>Total Price: {props.total.toFixed(2)} $</Card.Header>
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
        <Card.Content extra>
          <OrderNow
            total={props.total}
            ingredients={props.ingredients}
            showModal={props.showModal}
            modalOpen={props.onModalOpen}
          ></OrderNow>
          <Button
            fluid
            color="green"
            onClick={props.onModalOpen}
            disabled={props.total === 0}
          >
            Order now
          </Button>
        </Card.Content>
      </Card>
    </Container>
  </div>
);
BuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  onAddIngredient: PropTypes.func.isRequired
};
export default BuildControls;
