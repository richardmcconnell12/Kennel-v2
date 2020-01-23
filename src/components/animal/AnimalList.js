import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    AnimalManager.getAll().then(animals => {
      this.setState({
        animals: animals
      });
    });
  }

  render() {
    console.log("ANIMAL LIST: Render");

    return (
      <div className="container-cards">
        {this.state.animals.map(animal => (
          <AnimalCard />
        ))}
      </div>
    );
  }
}

export default AnimalList;
