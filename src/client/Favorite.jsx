import React, { Component } from "react";

export default class Favorite extends Component {
  render() {
    let favorite = this.props.favorite;
    return <div>Favorite: {favorite}</div>;
  }
}
