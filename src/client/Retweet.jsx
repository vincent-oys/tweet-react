import React, { Component } from "react";

export default class Retweet extends Component {
  render() {
    let retweet = this.props.retweet;
    return <div>Retweet: {retweet}</div>;
  }
}
