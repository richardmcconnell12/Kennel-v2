import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

class AnimalForm extends Component {
  state = {
    animalName: "",
    breed: "",
    employeeId: null,
    employees: [],
    loadingStatus: false
  };

  componentDidMount() {
    EmployeeManager.getAll().then(employees => this.setState({ employees }));
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  constructNewAnimal = evt => {
    evt.preventDefault();
    if (
      this.state.animalName === "" ||
      this.state.breed === "" ||
      this.state.employeeId === ""
    ) {
      window.alert("Please input an animal name, breed, and caretaker");
    } else {
      this.setState({ loadingStatus: true });
      const animal = {
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: parseInt(this.state.employeeId)
      };

      // Create the animal and redirect user to animal list
      AnimalManager.post(animal).then(() =>
        this.props.history.push("/animals")
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
                id="animalName"
                placeholder="Animal Name"
              />
              <label htmlFor="animalName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="breed"
                placeholder="Breed"
              />
              <label htmlFor="breed">Breed</label>
            </div>
            <div className="form-group">
              <label htmlFor="employee">Assign to caretaker</label>
              <select
                name="employee"
                onChange={this.handleFieldChange}
                id="employeeId"
                value={this.employeeId}
              >
                <option value="">Select an employee</option>
                {this.state.employees.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewAnimal}
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

export default AnimalForm;
