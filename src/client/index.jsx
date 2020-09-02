import React from "react";
import ReactDOM from "react-dom";

import tweets from "tweets";
import Tweet from "./Tweet.jsx";

class App extends React.Component {
  render() {
    let tweetInfo = tweets.tweets.map((tweet) => {
      return <Tweet tweet={tweet} />;
    });

    console.log(tweetInfo);

    return <div>{tweetInfo}</div>;
  }
}

const element = document.getElementById("app");

ReactDOM.render(<App />, element); //

console.log("tweet react");
