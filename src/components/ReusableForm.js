import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="brand" placeholder="Brand" />
        <input type="text" name="price" placeholder="Price" />
        <input
          type="text"
          name="alcoholContent"
          placeholder="Alcohol Content"
        />
        <input
          type="number"
          name="pintsRemaining"
          placeholder="124"
          value="124"
        />
        <input type="number" name="pintsSold" placeholder="0" value="0" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
