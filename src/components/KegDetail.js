import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <table>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Alcohol Content</th>
        <th>Pints Remaining</th>
        <th>Pints Sold</th>
        <tbody>
          <td>{keg.name}</td>
          <td>{keg.brand}</td>
          <td>{keg.price}</td>
          <td>{keg.alcoholContent}</td>
          <td>{keg.pintsRemaining}</td>
          <td>{keg.pintsSold}</td>
        </tbody>
      </table>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>{" "}
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
