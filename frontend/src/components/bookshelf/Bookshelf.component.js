import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const Bookshelf = () => {
  const dispatch = useDispatch();
  const { character, wordsLearnt } = useSelector((state) => state.user);

  return (
    <div className="h-screen w-screen bg-libraryBg bg-cover bg-center">
      <div className="grid grid-cols-1 gap-4 justify-items-start mt-12">
        <div className="absolute top-4 left-4">
          <button
            data-test="back-to-bedroom"
            onClick={() => dispatch(setCurrentScene("BEDROOM"))}
            className="block back-btn  text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
          >
            <img
              src="/img/back-button-icon.png"
              alt="Back Button"
              className="h-9 w-9 bg-gray-50 bg-opacity-90 rounded-full "
            />
          </button>
        </div>

        <div className="text-center mx-auto bg-red-200 mb-4 px-4 py-4 border-4 border-gray-900">
          <h2 className="text-xl font-bold pixel-font">Words Learnt</h2>
        </div>

        <div
          className="grid grid-cols-6 gap-4 ml-2"
          style={{
            maxHeight: "61vh",
            overflowY: "auto",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {wordsLearnt.map((wordPair, index) => (
            <div
              key={index}
              className="bg-gray-100 pixel-font-sm bg-yellow-50 border-4 border-gray-900 p-12 text-center text-4xl"
            >
              {wordPair.map((word, i) => (
                <div key={`${index}-${i}`}>{word}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
