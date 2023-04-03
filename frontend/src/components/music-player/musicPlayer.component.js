import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import mononoke from "../../music/mononoke.mp3";
import kiki from "../../music/kiki.mp3";
import pokemon from "../../music/pokemon.mp3";
import porco from "../../music/porco.mp3";
import spirited from "../../music/spirited.mp3";
import wind from "../../music/wind.mp3";

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const trackList = [mononoke, kiki, pokemon, porco, spirited, wind];
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
