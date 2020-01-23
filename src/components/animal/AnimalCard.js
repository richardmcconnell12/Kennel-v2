import React, { Component } from "react";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Puppers" />
          </picture>
          <h3>
            Name: <span className="card-petname">Bleu</span>
          </h3>
          <p>Breed: Husky Mix</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
