import React from "react";
import { Player } from "video-react";

const Video = (props) => {
  return <Player playsInline poster="/assets/poster.png" src={props.vid} />;
};

export default Video;
