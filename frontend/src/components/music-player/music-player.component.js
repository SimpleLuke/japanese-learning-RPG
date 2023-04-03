import { useState, useEffect } from "react";
import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";
import { useSelector } from "react-redux";

function MusicPlayer({ currentSongIndex, setCurrentSongIndex }) {
  const [audioElement, setAudioElement] = useState(null);
  const { toggle } = useSelector((state) => state.musicPlayer);
  const trackList = [mononoke, kiki, pokemon, porco, spirited, wind];

  useEffect(() => {
    setAudioElement(new Audio());
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.src = trackList[currentSongIndex];
      if (toggle === true) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [audioElement, currentSongIndex, trackList, toggle]);

  useEffect(() => {
    if (audioElement) {
      audioElement.addEventListener("ended", handleSongEnded);
      return () => {
        audioElement.removeEventListener("ended", handleSongEnded);
      };
    }
  }, [audioElement, handleSongEnded]);

  function handleSongEnded() {
    if (currentSongIndex < trackList.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  }

  function pauseSong() {
    audioElement.pause();
  }

  return null;
}

export default MusicPlayer;
