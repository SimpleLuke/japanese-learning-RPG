import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const StartMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-pixelFishes flex flex-col justify-evenly items-center bg-cover bg-center h-screen w-screen ">
      <div>
        <h1 className="headline-animation text-white text-6xl font-extrabold tracking-widest ">
          ~ 良いね iine ~
        </h1>
      </div>
      <div className="flex flex-col">
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
    </div>
  );
};

export default StartMenu;
