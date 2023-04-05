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
        <h2 data-test="wordsLearntTitle" className="text-xl font-bold">
          Words Learnt
        </h2>
      </div>

      <div
        className="grid grid-cols-6 gap-4"
        data-test="wordsLearntGrid"
        style={{
          maxHeight: "61vh",
          overflowY: "auto",
          gridTemplateRows: "repeat(3, 1fr)",
        }}
      >
        {wordsLearnt.map((wordPair, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md p-12 text-center text-3xl"
          >
            {wordPair.map((word, i) => (
              <div key={`${index}-${i}`} data-test={`word${index}`}>
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
