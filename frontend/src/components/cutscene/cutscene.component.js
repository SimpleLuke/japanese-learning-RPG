import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const CutScene = () => {
  const dispatch = useDispatch();
  const [displayText, setDisplayText] = useState("");
  const [background, setBackground] = useState("bg-London");
  const text =
    "W ait... Where am I, this isn't my home... I am in J A P A N ???!!!";
  const japan = "( Click to continue )";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text.charAt(i));
      i++;
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackground("bg-JapanCutscene");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setDisplayText(japan);
    }, 8000);
    return () => clearTimeout(timer2);
  }, []);

  return (
    <div className={`h-screen w-screen bg-cover bg-center ${background}`}>
      <div className="flex justify-center items-center h-screen">
        <div
          data-test="cut-scene"
          onClick={() => dispatch(setCurrentScene("BEDROOM"))}
          className="w-[80%] h-[30%] text-4xl text-white pixel-font cursor-pointer overflow-hidden rounded-lg sm:rounded-sm bg-black bg-opacity-80 px-4 py-5 shadow sm:p-6 transform hover:translate-y-2 pixelated"
        >
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default CutScene;
