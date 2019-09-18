import React, { Component, Fragment } from "react";

import { Modal } from "semantic-ui-react";
import styles from "./withErrorHandler.module.css";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    constructor(props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => {
          return res;
        },
        error => {
          this.setState({ error: error });
        }
      );
    }

    handleClose = () => {
      this.setState({ error: null });
    };
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);

      axios.interceptors.response.eject(this.resInterceptor);
    }

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
