import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name: <span className="card-ownerName">Rob McElhenney</span>
          </h3>
          <p>Phone: 615-534-6070</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
