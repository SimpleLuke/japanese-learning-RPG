import { useSelector, useDispatch } from "react-redux";
import QuitGameModal from "./components/QuitGameModal/QuitGameModal";
import MainGame from "./MainGame/MainGame";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";
import { openQuitMenu } from "./redux-store/game-modal/gameModalSlice";
import StartGame from "./StartGame/StartGame";
import EndGame from "./EndGame/EndGame";

function App() {
  const dispatch = useDispatch();
  const { currentScene } = useSelector((state) => state.scene);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      {currentScene === "MAIN_GAME" && <MainGame />}
      {currentScene === "START_GAME" && <StartGame />}
      {currentScene === "END_GAME" && <EndGame />}
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
    </div>
  );
}

export default App;
