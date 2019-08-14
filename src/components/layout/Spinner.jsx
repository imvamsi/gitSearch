import React, { Fragment } from "react";
import spinner1 from "./spinner1.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner1}
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
