import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function kegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

kegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default kegList;
