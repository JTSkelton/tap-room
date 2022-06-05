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
          <tr class="table-light">
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
              <button onClick={() => props.whenPintSold(props.id)}>Sell</button>
            </td>
            <td>{props.pintsRemaining}</td>
            <td>{props.pintsSold}</td>
          </tr>
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
  pintsRemaining: PropTypes.string,
  pintsSold: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func,
};

export default Keg;
