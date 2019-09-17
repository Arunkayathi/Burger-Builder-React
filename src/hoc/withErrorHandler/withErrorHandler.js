import React, { Component, Fragment } from "react";

import { Modal } from "semantic-ui-react";
import styles from "./withErrorHandler.module.css";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    handleClose = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal
            open={this.state.error !== null}
            closeOnDimmerClick={true}
            size="tiny"
            style={{ height: "350px" }}
            onClose={this.handleClose}
          >
            <h3 className={styles.errorText}>
              {this.state.error && this.state.error.message}
            </h3>
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>;
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
