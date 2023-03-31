import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const Bookshelf = () => {
  const dispatch = useDispatch();

  return (
    <button
      data-test="back-to-bedroom"
      onClick={() => dispatch(setCurrentScene("BEDROOM"))}
      // onClick={() => handleBackToBedroomClick()}
      className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200"
    >
      ベッドルームに戻る - Back To Bedroom
    </button>
  );
};

export default Bookshelf;
