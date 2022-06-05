import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div class="kegTable" onClick={() => props.whenKegClicked(props.id)}>
        <table>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Alcohol Content</th>
          <tbody>
            <td>{props.name}</td>
            <td>{props.brand}</td>
            <td>{props.price}</td>
            <td>{props.alcoholContent}</td>
          </tbody>
        </table>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
