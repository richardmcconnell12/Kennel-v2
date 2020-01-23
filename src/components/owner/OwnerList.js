import React, { Component } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: []
  };

  deleteOwner = id => {
    OwnerManager.delete(id).then(() => {
      OwnerManager.getAll().then(newOwners => {
        this.setState({
          owners: newOwners
        });
      });
    });
  };

  componentDidMount() {
    OwnerManager.getAll().then(owners => {
      this.setState({
        owners: owners
      });
    });
  }

  render() {
    return (
      <div className="container-cards">
        {this.state.owners.map(owner => (
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        ))}
      </div>
    );
  }
}

export default OwnerList;
