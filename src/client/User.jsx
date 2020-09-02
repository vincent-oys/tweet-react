import React, { Component } from "react";

export default class User extends Component {
  render() {
    let user = this.props.user;
    return (
      <div>
        {user.name} @{user.screen_name}
      </div>
    );
  }
}
