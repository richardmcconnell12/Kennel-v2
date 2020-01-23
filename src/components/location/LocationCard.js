import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-locatonName">Nashville North</span>
          </h3>
          <p>Address: 123 Division St.</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
