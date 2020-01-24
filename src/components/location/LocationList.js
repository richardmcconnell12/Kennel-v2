import React, { Component } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      LocationManager.getAll().then(newLocations => {
        this.setState({
          locations: newLocations
        });
      });
    });
  };

  componentDidMount() {
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  render() {
    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/locations/new");
            }}
          >
            Add Location
          </button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default LocationList;
