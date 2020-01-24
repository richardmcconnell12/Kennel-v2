import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";

class LocationDetail extends Component {
  state = {
    name: "",
    address: "",
    city: ""
  };

  componentDidMount() {
    //get(id) from LocatonManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId).then(location => {
      this.setState({
        name: location.name,
        address: location.address,
        city: location.city
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:
            <span style={{ color: "darkslategrey" }}> {this.state.name}</span>
          </h3>
          <p>
            Address: {this.state.address} {this.state.city}
          </p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
