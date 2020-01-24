import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

class OwnerForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.ownerName === "" || this.state.phoneNumber === "") {
      window.alert("Please input an owner name and phone number");
    } else {
      this.setState({ loadingStatus: true });
      const owner = {
        name: this.state.ownerName,
        phoneNumber: this.state.phoneNumber
      };

      OwnerManager.post(owner).then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="ownerName"
                placeholder="Owner Name"
              />
              <label htmlFor="ownerName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="phoneNumber"
                placeholder="Phone Number"
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewOwner}
              >
                Add Owner
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default OwnerForm;
