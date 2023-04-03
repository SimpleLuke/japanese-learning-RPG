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
      <div className="pixelated">
    <div className="bg-bedroom2 relative bg-cover bg-center h-screen w-screen p-4 "> 
      <div className="w-80 h-26 flex flex-wrap relative left-[290px] overflow-hidden border-8 border-blue-900 bg-red-100 bg-opacity-80 px-4 py-2 shadow sm:p-2">
        <div className="w-1/2">
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
        <div className="w-1/2 font-email absolute left-[120px]">
        <dd
          data-test="email"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          {email}
        </dd>
        </div>
      </div>
      <div className="relative left-[1015px] top-[-90px]">
        <BurgerMenu />
      </div> 
      <div className="ml-50 mt-100 absolute left-[695px] top-[450px]">
        {character.currentOutfit && <CharacterComponent data={character.currentOutfit}/>}
      </div>
      <div className="bookshelf cursor-pointer absolute left-[377px] top-[252px]">
        <p className="text-tag relative left-[4px] top-[1px]">Bookshelf</p>
      </div>
      <div 
        className="study-desk cursor-pointer absolute left-[942px] top-[265px]" 
        data-test="study-desk"
        onClick={() => dispatch(setCurrentScene("START_GAME"))}>
          <p className="text-tag absolute left-[8px] top-[4px]">Desk</p>
      </div>
      <div className="wardrobe cursor-pointer absolute pixelated top-[485px] left-[404px]">
        <p className="text-tag absolute left-[8px] top-[1px]">Wardrobe</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Bedroom;
