import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsRemaining: event.target.pintsRemaining.value,
      pintsSold: parseInt(event.target.pintsSold.value),
      id: v4(),
    });
  }

  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func,
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg"
      />
    </React.Fragment>
  );
}

export default NewKegForm;
