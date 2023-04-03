import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function MusicPlayer({
  currentSongIndex,
  setCurrentSongIndex,
  audioElement,
  trackList,
}) {
  const { toggle } = useSelector((state) => state.musicPlayer);

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
