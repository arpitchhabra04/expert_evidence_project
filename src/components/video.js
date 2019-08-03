import React, { Component } from "react";
import { Player, BigPlayButton } from "video-react";

class Video extends Component {
  state = {};
  render() {
    return (
      <Player autoPlay startTime={43}>
        <source src="https://youtu.be/KBcDcpRLelE" />
        <BigPlayButton position="center" />
      </Player>
    );
  }
}

export default Video;
