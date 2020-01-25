import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";

class AnimalEditForm extends Component {
  //set the initial state
  state = {
    animalName: "",
    breed: "",
    employeeId: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingAnimal = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    if (this.state.employee === "") {
      window.alert("Please select a caretaker!");
    } else {
      const editedAnimal = {
        id: this.props.match.params.animalId,
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: parseInt(this.state.employeeId)
      };
      AnimalManager.update(editedAnimal).then(() =>
        this.props.history.push("/animals")
      );
    }
  };

  componentDidMount() {
    AnimalManager.get(this.props.match.params.animalId).then(animal => {
      this.setState({
        animalName: animal.name,
        breed: animal.breed,
        employeeId: animal.employeeId,
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
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
            </div>
            <div className="form-group">
              <label htmlFor="employee">Assign to caretaker</label>
              <select
                name="employee"
                id="employeeId"
                onChange={this.handleFieldChange}
                value={this.state.employeeId}
              >
                <option value="">Select an employee</option>
                {this.props.employees &&
                  this.props.employees.map(e => (
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
                onClick={this.updateExistingAnimal}
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

export default AnimalEditForm;
