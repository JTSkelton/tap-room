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
  price: PropTypes.number,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.number,
  pintsSold: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintsClicked: PropTypes.func,
};

export default Keg;
