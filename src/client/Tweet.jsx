import React from "react";
import Retweet from "./Retweet.jsx";
import Favorite from "./Favorite.jsx";
import User from "./User.jsx";

export default class Tweet extends React.Component {
  render() {
    let tweet = this.props.tweet;
    let user = tweet.user;
    let retweet = tweet.retweet_count;
    let favorite = tweet.favorite_count;
    let text = tweet.text;

    return (
      <div>
        <User user={user} />
        {text}
        <Retweet retweet={retweet} />
        <Favorite favorite={favorite} />
      </div>
    );
  }
}
