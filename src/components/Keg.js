import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      {props.name}
      {props.brand}
      {props.price}
      {props.alcoholContent}
      {props.pintsRemaining}
      {props.pintsSold}
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.string,
  pintsSold: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintsClicked: PropTypes.func,
};

export default Keg;
