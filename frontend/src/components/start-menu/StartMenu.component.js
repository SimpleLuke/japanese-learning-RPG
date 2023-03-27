import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const StartMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-startMenu bg-cover bg-center full-screen ">
      <button
        className="pixel-btn mb-12"
        onClick={() => dispatch(setCurrentScene("LOGIN"))}
      >
        Login
      </button>
      <button className="pixel-btn">Sign up</button>
    </div>
  );
};

export default StartMenu;
