import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";

import React from "react";
import { useSelector } from "react-redux";

const playSongs = () => {
  new Audio(mononoke);
};

export default function MusicPlayer() {
  const { toggle } = useSelector((state) => state.musicPlayer);

  return (
    <>
      {toggle ? (
        <audio src={mononoke} controls style={{ display: "none" }} />
      ) : (
        console.log("music off")
      )}
    </>
  );
}
