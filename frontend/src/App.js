import { useSelector, useDispatch } from "react-redux";
import { setCurrentScene } from "./redux-store/scene/sceneSlice";
import ReduxComp from "./components/redux/ReduxComp";
import MainGame from "./MainGame/MainGame";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";

function App() {
  const dispatch = useDispatch();
  const { currentScene } = useSelector((state) => state.scene);
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      {currentScene === "MAIN_GAME" && <MainGame />}
      {/* {currentScene === "START_GAME" && <StartGame />}
        {/* {currentScene === "END_GAME" && <EndGame />} */}
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
    </div>
  );
}

export default App;
