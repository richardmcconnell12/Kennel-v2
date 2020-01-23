import React, { Component } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("LOCATIONS LIST: ComponentDidMount");
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  render() {
    console.log("LOCATIONS LIST: Render");

    return (
      <div className="container-cards">
        {this.state.locations.map(location => (
          <LocationCard />
        ))}
      </div>
    );
  }
}

export default LocationList;
