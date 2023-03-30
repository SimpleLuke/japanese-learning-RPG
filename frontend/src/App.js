import { useSelector, useDispatch } from "react-redux";
import MainGame from "./components/MainGame/MainGame";
import StartGame from "./components/StartGame/StartGame.component";
import EndGame from "./components/EndGame/EndGame.component";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";
import Signup from "./components/signup/Signup.component";
import Bedroom from "./components/bedroom/Bedroom.component";
import { useEffect } from "react";
import { setCurrentScene } from "./redux-store/scene/sceneSlice";

function App() {
  const dispatch = useDispatch();
  const { currentScene } = useSelector((state) => state.scene);

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== "undefined"
    ) {
      dispatch(setCurrentScene("BEDROOM"));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      {currentScene === "MAIN_GAME" && <MainGame />}
      {currentScene === "START_GAME" && <StartGame />}
      {currentScene === "END_GAME" && <EndGame />}
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
      {currentScene === "SIGNUP" && <Signup />}
      {currentScene === "BEDROOM" && <Bedroom />}
    </div>
  );
}

export default App;
