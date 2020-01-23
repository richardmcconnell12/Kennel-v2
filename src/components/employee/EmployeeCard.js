import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name: <span className="card-employeeName">Ricky McConnell</span>
          </h3>
          <p>Position: Lead Veterinarian</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
