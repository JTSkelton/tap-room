import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <table>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Alcohol Content</th>
        <th>Details</th>
        <th>Sell A Pint</th>
        <th>Pints Remaining</th>
        <th>Pints Sold</th>
        <tbody>
          <td>{props.name}</td>
          <td>{props.brand}</td>
          <td>{props.price}</td>
          <td>{props.alcoholContent}</td>
          <td>
            <button onClick={() => props.whenKegClicked(props.id)}>
              Keg Details
            </button>
          </td>
          <td>
            <button onClick={() => props.whenPintSold(props.pintsRemaining)}>
              Sell
            </button>
          </td>
          <td>{props.pintsRemaining}</td>
          <td>{props.pintsSold}</td>
        </tbody>
      </table>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsRemaining: PropTypes.number,
  pintsSold: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func,
};

export default Keg;
