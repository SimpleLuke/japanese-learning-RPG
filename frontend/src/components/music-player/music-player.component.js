import Mononoke from "../../music/Mononoke.mp4";

import React from "react";

const playSongs = () => {
  new Audio(Mononoke);
};

export default function MusicPlayer() {
  return <audio src={Mononoke} controls />;
}
