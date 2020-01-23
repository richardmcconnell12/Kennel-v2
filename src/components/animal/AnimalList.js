import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };

  componentDidMount() {
    AnimalManager.getAll().then(animals => {
      this.setState({
        animals: animals
      });
    });
  }

  render() {
    return (
      <div className="container-cards">
        {this.state.animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    );
  }
}

export default AnimalList;
