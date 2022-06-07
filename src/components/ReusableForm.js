import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="form-part">
        <form onSubmit={props.formSubmissionHandler}>
          <input type="text" name="name" placeholder="Name" /> <br></br>
          <br></br>
          <input type="text" name="brand" placeholder="Brand" /> <br></br>
          <br></br>
          <input type="number" name="price" placeholder="Price" /> <br></br>
          <br></br>
          <input
            type="text"
            name="alcoholContent"
            placeholder="Alcohol Content"
          />{" "}
          <br></br>
          <br></br>
          <input
            type="number"
            name="pintsRemaining"
            placeholder="124"
            defaultValue="124"
          />{" "}
          <br></br>
          <br></br>
          <input
            type="number"
            name="pintsSold"
            placeholder="0"
            defaultValue="0"
          />{" "}
          <br></br>
          <br></br>
          <button type="submit">{props.buttonText}</button>
          <br></br>
          <br></br>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
