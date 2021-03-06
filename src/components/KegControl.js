import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import data from "../mock-data.json";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [...data].sort(function (a, b) {
        return a.id - b.id;
      }),
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleSellClick = (kegId) => {
    const newMainKegList = this.state.mainKegList.map((element) => {
      if (element.id === kegId && element.pintsRemaining >= 1) {
        const keg = {
          ...element,
          pintsRemaining: element.pintsRemaining - 1,
          pintsSold: element.pintsSold + 1,
        };
        return keg;
      }
      return element;
    });
    this.setState({
      mainKegList: newMainKegList,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddingnewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangingselectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null,
    });
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
          on
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingnewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.mainKegList}
          onPintsClicked={this.handleSellClick}
          onKegSelection={this.handleChangingselectedKeg}
        />
      );

      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}

export default KegControl;
