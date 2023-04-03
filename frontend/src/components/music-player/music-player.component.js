import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MusicPlayer from "./MusicPlayer";

function MusicPlayerContainer() {
  const [audioElement, setAudioElement] = useState(null);
  const { toggle } = useSelector((state) => state.musicPlayer);
  const [trackList, setTrackList] = useState([
    "../../music/mononoke.mp3",
    "../../music/kiki.mp3",
    "../../music/pokemon.mp3",
    "../../music/porco.mp3",
    "../../music/spirited.mp3",
    "../../music/wind.mp3",
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

  return (
    <MusicPlayer
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      audioElement={audioElement}
      trackList={trackList}
    />
  );
}

export default MusicPlayerContainer;
