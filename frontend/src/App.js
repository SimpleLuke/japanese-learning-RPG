import { useSelector, useDispatch } from "react-redux";
import { setCurrentScene } from "./redux-store/scene/sceneSlice";
import ReduxComp from "./components/redux/ReduxComp";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";
import Signup from "./components/signup/Signup.component";

function App() {
  const dispatch = useDispatch();
  const { currentScene } = useSelector((state) => state.scene);
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
      {currentScene === "SIGNUP" && <Signup />}
    </div>
  );
}

export default App;
