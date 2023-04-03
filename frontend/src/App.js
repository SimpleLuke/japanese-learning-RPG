import { useSelector, useDispatch } from "react-redux";
import MainGame from "./components/MainGame/MainGame";
import StartGame from "./components/StartGame/StartGame.component";
import EndGame from "./components/EndGame/EndGame.component";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";
import Signup from "./components/signup/Signup.component";
import Bedroom from "./components/bedroom/Bedroom.component";
import CharacterDesign from "./components/design-character/chooseCharacter.component";
import { useEffect, useState } from "react";
import { setCurrentScene } from "./redux-store/scene/sceneSlice";
import Bookshelf from "./components/bookshelf/Bookshelf.component";
import MusicPlayer from "./components/music-player/music-player.component";
import mononoke from "./music/mononoke.mp3";
import kiki from "./music/kiki.mp3";
import pokemon from "./music/pokemon.mp3";
import porco from "./music/porco.mp3";
import spirited from "./music/spirited.mp3";
import wind from "./music/wind.mp3";
import MusicPlayerContainer from "./components/music-player/music-player.component";

function App() {
  const dispatch = useDispatch();
  const { currentScene } = useSelector((state) => state.scene);
  const [audio, setAudio] = useState(true);

  //audio functions lifted from music-player.component to avoid issues on re-render
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioElement = new Audio();
  const trackList = [mononoke, kiki, pokemon, porco, spirited, wind];

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== "undefined"
    ) {
      dispatch(setCurrentScene("BEDROOM"));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      <MusicPlayer />

      {currentScene === "MAIN_GAME" && <MainGame />}
      {currentScene === "START_GAME" && <StartGame />}
      {currentScene === "END_GAME" && <EndGame />}
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
      {currentScene === "SIGNUP" && <Signup />}
      {currentScene === "BEDROOM" && <Bedroom />}
      {currentScene === "BOOKSHELF" && <Bookshelf />}
      {currentScene === "CHARACTER" && <CharacterDesign />}
    </div>
  );
}

export default App;
