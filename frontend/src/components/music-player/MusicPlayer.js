import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";

function MusicPlayer() {
  const { toggle } = useSelector((state) => state.musicPlayer);
}

export default MusicPlayer;
