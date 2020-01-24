import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

class LocationForm extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewLocation = evt => {
    evt.preventDefault();
    if (
      this.state.locatonName === "" ||
      this.state.address === "" ||
      this.state.city === ""
    ) {
      window.alert("Please input an location name, address, and city");
    } else {
      this.setState({ loadingStatus: true });
      const location = {
        name: this.state.locationName,
        address: this.state.address,
        city: this.state.city
      };

      LocationManager.post(location).then(() =>
        this.props.history.push("/locations")
      );
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
                id="locationName"
                placeholder="Location Name"
              />
              <label htmlFor="locationName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="address"
                placeholder="Address"
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="city"
                placeholder="City"
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewLocation}
              >
                Add Location
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default LocationForm;
