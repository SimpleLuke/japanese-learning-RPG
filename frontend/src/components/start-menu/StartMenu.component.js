import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const StartMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-pixelFishes bg-cover bg-center full-screen ">
      <button
        data-test="login-btn"
        className="pixel-btn mb-12"
        onClick={() => dispatch(setCurrentScene("LOGIN"))}
      >
        Login
      </button>
      <button
        data-test="signup-btn"
        className="pixel-btn"
        onClick={() => dispatch(setCurrentScene("SIGNUP"))}
      >
        Sign up
      </button>
    </div>
  );
};

export default StartMenu;
