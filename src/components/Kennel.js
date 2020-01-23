import React, { Component } from "react";
import AnimalCard from "./animal/AnimalCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";
import LocationCard from "./location/LocationCard";
import "./Kennel.css";

class Kennel extends Component {
  render() {
    return (
      <div>
        <h2>
          Nashville Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit us at the Nashville North Location: Furever Friends
        </address>
        <div>
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <OwnerCard />
          <OwnerCard />
          <OwnerCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
      </div>
    );
  }
}

export default Kennel;
