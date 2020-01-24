import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

class EmployeeEditForm extends Component {
  //set the initial state
  state = {
    employeeName: "",
    position: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingEmployee = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedEmployee = {
      id: this.props.match.params.employeeId,
      name: this.state.employeeName,
      position: this.state.position
    };

    EmployeeManager.update(editedEmployee).then(() =>
      this.props.history.push("/employees")
    );
  };

  componentDidMount() {
    EmployeeManager.get(this.props.match.params.employeeId).then(employee => {
      this.setState({
        employeeName: employee.name,
        position: employee.position,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="position"
                value={this.state.position}
              />
              <label htmlFor="position">Position</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeEditForm;
