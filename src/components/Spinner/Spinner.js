import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Spinner = props => {
  return (
    <Dimmer active inverted>
      <Loader>{props.children}</Loader>
    </Dimmer>
  );
};

export default Spinner;
