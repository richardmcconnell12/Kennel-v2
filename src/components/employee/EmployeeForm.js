import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationManager from "../../modules/LocationManager";
import "./EmployeeForm.css";

class EmployeeForm extends Component {
  state = {
    name: "",
    position: "",
    locationId: "",
    locations: [],
    loadingStatus: false
  };

  componentDidMount() {
    LocationManager.getAll().then(locations => this.setState({ locations }));
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEmployee = evt => {
    evt.preventDefault();
    if (
      this.state.employeeName === "" ||
      this.state.position === "" ||
      this.state.locationId === ""
    ) {
      window.alert("Please input an employee name and position");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.employeeName,
        position: this.state.position,
        locationId: parseInt(this.state.locationId)
      };

      // Create the employee and redirect user to employee list
      EmployeeManager.post(employee).then(() =>
        this.props.history.push("/employees")
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
                id="employeeName"
                placeholder="Employee Name"
              />
              <label htmlFor="employeeName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="position"
                placeholder="Position"
              />
              <label htmlFor="position">Position</label>
            </div>
            <label htmlFor="location">Assign to Location</label>
            <select
              className="form-control"
              id="locationId"
              value={this.state.locationId}
              onChange={this.handleFieldChange}
            >
              {this.state.locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEmployee}
              >
                Hire
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeForm;
