import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function Portals() {
  return (
    <Fragment>
      <div>Portals</div>
      {ReactDOM.createPortal(<Modal />, document.getElementById('upper-root'))}
    </Fragment>
  );
}

export default Portals;
