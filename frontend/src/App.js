import { useSelector, useDispatch } from "react-redux";
import StartMenu from "./components/start-menu/StartMenu.component";
import Login from "./components/login/Login.component";

function App() {
  const { currentScene } = useSelector((state) => state.scene);
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden h-screen">
      {currentScene === "START_MENU" && <StartMenu />}
      {currentScene === "LOGIN" && <Login />}
    </div>
  );
}

export default App;
