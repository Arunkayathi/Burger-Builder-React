import React, { Component } from "react";
import { Table, Container } from "semantic-ui-react";
import Order from "../../components/Order/Order";
class Orders extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sno</Table.HeaderCell>
              <Table.HeaderCell>Ordered On</Table.HeaderCell>
              <Table.HeaderCell>Ingredients</Table.HeaderCell>
              <Table.HeaderCell>Total Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Order></Order>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Orders;
