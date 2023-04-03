import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";

function MusicPlayer() {
  const trackList = [mononoke, kiki, pokemon, porco, spirited, wind];
  const { toggle } = useSelector((state) => state.musicPlayer);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [play, { stop }] = useSound(trackList[currentTrackIndex], {
    playbackRate,
    onend: () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % trackList.length);
    },
  });

  useEffect(() => {
    if (toggle) {
      play();
    } else {
      stop();
    }
  }, [toggle]);

  useEffect(() => {
    stop();
    setCurrentTrackIndex(0);
  }, [playbackRate]);

  return null; // replace with your player UI
}

export default MusicPlayer;
