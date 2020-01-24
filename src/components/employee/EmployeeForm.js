import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

class EmployeeForm extends Component {
  state = {
    name: "",
    position: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.employeeName === "" || this.state.position === "") {
      window.alert("Please input an employee name and position");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.employeeName,
        position: this.state.position
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
