import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const { toggle } = useSelector((state) => state.musicPlayer);
  const trackList = [mononoke, kiki, pokemon, porco, spirited, wind];

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = new Audio();

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
