import Mononoke from "../../music/Mononoke.mp4";

import React from "react";
import { useSelector } from "react-redux";

const playSongs = () => {
  new Audio(Mononoke);
};

export default function MusicPlayer() {
  const { toggle } = useSelector((state) => state.musicPlayer);

  return (
    <>
      {toggle ? (
        <audio src={Mononoke} controls style={{ display: "none" }} />
      ) : (
        console.log("music off")
      )}
    </>
  );
}
