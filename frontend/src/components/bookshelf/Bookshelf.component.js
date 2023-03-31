import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const Bookshelf = () => {
  const dispatch = useDispatch();
  const { character, wordsLearnt } = useSelector((state) => state.user);

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-start">
      <div className="absolute top-0 left-0">
        <button
          data-test="back-to-bedroom"
          onClick={() => dispatch(setCurrentScene("BEDROOM"))}
          className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200"
        >
          ベッドルームに戻る - Back To Bedroom
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold">Words Learnt</h2>
      </div>

      <div
        className="grid grid-cols-6 gap-4"
        style={{ maxHeight: "50vh", overflowY: "auto" }}
      >
        {wordsLearnt.map((word) => (
          <div key={word} className="bg-gray-100 rounded-md p-12 text-center">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
