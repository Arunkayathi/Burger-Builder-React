import React, { Component } from "react";
import { Button, Header, Divider, List, Icon, Modal } from "semantic-ui-react";

import styles from "./OrderNow.module.css";

import Spinner from "../../../Spinner/Spinner";

export class OrderNow extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.showModal !== this.props.showModal ||
      nextProps.isLoading !== this.props.isLoading
    );
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.isLoading && (
          <Modal
            open={this.props.showModal}
            closeOnDimmerClick={false}
            size="tiny"
            onClose={this.props.modalOpen}
            style={{ height: "350px" }}
          >
            <div></div>
            <Modal.Header>
              {this.props.isLoading ? "Loading" : "Order Summary"}
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>
                  You have ordered a Burger with the following ingredients
                </Header>
                <List>
                  {Object.keys(this.props.ingredients).map(igKey => {
                    return (
                      <List.Item key={igKey}>
                        <List.Icon name="hand point right" />
                        <List.Content>
                          {igKey}: {this.props.ingredients[igKey]}
                        </List.Content>
                      </List.Item>
                    );
                  })}
                </List>
                <p>
                  Total Price: <strong>{this.props.total.toFixed(2)} $</strong>
                </p>
              </Modal.Description>
            </Modal.Content>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="cart" />
                Checkout ?
              </Header>
            </Divider>
            <div className={styles["checkout-btns"]}>
              <Button color="red" inverted onClick={this.props.modalOpen}>
                <Icon name="remove" /> Cancel
              </Button>
              <Button
                color="green"
                inverted
                onClick={this.props.onBurgerPurchase}
              >
                <Icon name="checkmark" /> continue
              </Button>
            </div>
          </Modal>
        )}
        {this.props.isLoading && (
          <Modal
            open={this.props.showModal}
            closeOnDimmerClick={false}
            size="tiny"
            onClose={this.props.modalOpen}
            style={{ height: "350px" }}
          >
            <Spinner isInverted={true}>Checking out please wait...</Spinner>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default OrderNow;
