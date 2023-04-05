import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const CutScene = () => {
  const dispatch = useDispatch();
    const [displayText, setDisplayText] = useState("");
    const [background, setBackground] = useState("bg-red-500");
    const text = "W ait... Where am I, this isn't my home.";

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
      setBackground("bg-blue-500");
    }, 3000);
    return () => clearTimeout(timer);
    }, []);



    

  return (
    <div className={`h-screen w-screen ${background}`}>
      <div className="flex justify-center items-center h-screen">
      <div
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("BEDROOM"))}
        className="w-40 h-40 cursor-pointer overflow-hidden rounded-lg sm:rounded-sm bg-white bg-opacity-80 px-4 py-5 shadow sm:p-6 transform hover:translate-y-2 pixelated"
      >
        {displayText}
      </div>
      </div>
    </div>
  );
};

export default CutScene;