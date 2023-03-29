import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const Bedroom = () => {
  const dispatch = useDispatch();
  const { email, character } = useSelector((state) => state.user);
  const { xp, level, wordsKnown } = character.attributes;

  return (
    <div className="bg-bedroom bg-cover bg-center h-screen w-screen grid grid-cols-4 grid-rows-4 gap-4 p-4 ">
      <div className="w-80 h-40 overflow-hidden rounded-lg bg-white bg-opacity-80 px-4 py-5 shadow sm:p-6">
        <dd
          data-test="email"
          className="mt-1 text-3xl font-semibold tracking-tight text-gray-900"
        >
          {email}
        </dd>
        <dt
          data-test="level"
          className="truncate text-sm font-medium text-gray-500"
        >
          Level: {level}
        </dt>
        <dt
          data-test="exp"
          className="truncate text-sm font-medium text-gray-500"
        >
          Exp: {xp}
        </dt>
        <dt
          data-test="words"
          className="truncate text-sm font-medium text-gray-500"
        >
          Words: {wordsKnown}
        </dt>
      </div>
      <div
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("START_GAME"))}
        className="w-40 h-40 col-start-4 row-start-2 cursor-pointer overflow-hidden rounded-lg bg-white bg-opacity-80 px-4 py-5 shadow sm:p-6"
      >
        Study desk
      </div>
    </div>
  );
};

export default Bedroom;
