import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

import CharacterComponent from '../design-character/character.component';
import BurgerMenu from "../BurgerMenu/BurgerMenu.component"

import { updateUserInfo } from "../../redux-store/user/userSlice";


const Bedroom = () => {
  const dispatch = useDispatch();
  const { email, character } = useSelector((state) => state.user);
  const { xp, level, wordsKnown, coins } = character.attributes;

  const fetchUserData = async () => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = await response.json();
    console.log("LOOOOK",data);
    dispatch(updateUserInfo(data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
    {/* <div className="relative">
      <div className="bedroom-bg absolute bg-cover bg-center h-screen w-screen"></div>
        <div className="mx-auto absolute w-4/6 h-32 border border-red-500"></div>
          <div className="wardrobe absolute col-start-2 row-start-2 ml-4 my-30 fixed"></div>
    </div> 
    <div
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("START_GAME"))}
        className="w-40 h-40 col-start-4 row-start-2 cursor-pointer overflow-hidden rounded-lg bg-white bg-opacity-80 px-4 py-5 shadow sm:p-6"
      >
        Study desk
      </div>
      */}



    <div className="bg-bedroom2 bg-cover bg-center h-screen w-screen p-4 "> 
      <div className="w-80 h-40 relative left-[250px] overflow-hidden rounded-lg bg-white bg-opacity-80 px-4 py-5 shadow sm:p-6">
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
        <dt
          data-test="coin"
          className="truncate text-sm font-medium text-gray-500"
        >
          Coins: {coins}
        </dt>
      </div>
      <div className="relative left-[1060px] top-[-150px]">
        <BurgerMenu />
      </div> 
      <div className="ml-50 mt-100 relative left-[700px] top-[270px]">
        {character.currentOutfit && <CharacterComponent data={character.currentOutfit}/>}
      </div>
      <div className="bookshelf relative left-[275px] top-[35px]"></div>
      <div 
        className="study-desk cursor-pointer relative left-[935px] top-[-20px]" 
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("START_GAME"))}>
      </div>
      <div className="wardrobe relative top-[300px] left-[300px]"></div>
    </div>
    </>
  );
};

export default Bedroom;
