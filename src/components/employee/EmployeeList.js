import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
    console.log("EMPLOYEES LIST: ComponentDidMount");
    EmployeeManager.getAll().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  render() {
    console.log("EMPLOYEES LIST: Render");

    return (
      <div className="container-cards">
        {this.state.employees.map(employee => (
          <EmployeeCard />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
