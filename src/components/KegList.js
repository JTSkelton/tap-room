import PropTypes from "prop-types";
import React from "react";

function KegList(props) {
  const { onPintsClicked, onKegSelection } = props;
  return (
    <React.Fragment>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Alcohol Content</th>
            <th>Pints Remaining</th>
            <th>Pints Sold</th>
            <th>Sell A Pint</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {props.kegList.map((keg) => (
            <tr>
              <td>{keg.name}</td>
              <td>{keg.brand}</td>
              <td>{keg.price}</td>
              <td>{keg.alcoholContent}</td>
              <td>{keg.pintsRemaining}</td>
              <td>{keg.pintsSold}</td>
              <td>
                <button onClick={() => onPintsClicked(keg.id)}>
                  Sell Pint
                </button>
              </td>
              <td>
                <button onClick={() => onKegSelection(keg.id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onPintsClicked: PropTypes.func,
};

export default KegList;
