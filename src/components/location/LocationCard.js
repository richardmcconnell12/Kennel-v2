import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Location.css";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span className="card-locationName">
              {this.props.location.name}
            </span>
          </h3>
          <p>
            Address: {this.props.location.address} {this.props.location.city}
          </p>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(
                `/locations/${this.props.location.id}/edit`
              );
            }}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteLocation(this.props.location.id)}
          >
            Close
          </button>
          <Link to={`/locations/${this.props.location.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;
