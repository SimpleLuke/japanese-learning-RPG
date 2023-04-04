import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import gameSoundtrack from "../../music/gameSoundtrack.mp3";

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const trackList = [gameSoundtrack];
  const { toggle } = useSelector((state) => state.musicPlayer);

  useEffect(() => {
    if (toggle) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [toggle]);

  return (
    <audio loop ref={audioRef}>
      {trackList.map((track) => (
        <source key={track} src={track} type="audio/mp3" />
      ))}
    </audio>
  );
}

export default MusicPlayer;
