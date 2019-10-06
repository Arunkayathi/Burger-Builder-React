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
import { connect } from "react-redux";

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
          <Card.Header>
            Total Price: {props.totalPrice.toFixed(2)} $
          </Card.Header>
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
            showModal={props.showModal}
            modalOpen={props.onModalOpen}
            isLoading={props.isLoading}
            onBurgerPurchase={props.onBurgerPurchaseHandler}
          ></OrderNow>
          <Button
            fluid
            color="green"
            onClick={props.onModalOpen}
            disabled={props.totalPrice === 0.0}
          >
            Order now
          </Button>
        </Card.Content>
      </Card>
    </Container>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ingredients: state.ingredientsState.ingredients,
  totalPrice: state.ingredientsState.totalPrice
});

BuildControls.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onAddIngredient: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(BuildControls);
