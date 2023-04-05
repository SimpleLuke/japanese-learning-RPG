import CharacterComponent from './character.component';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { useState } from "react";

const hairStyles = ["gentlemanHair-blond", "hair-emo", "hair-long-blonde"];
const topStyles = ["tshirt-gray", "tshirt-green-flower", "vest"];
const bottomStyles = ["pants-blue", "pants-pink", "skirt"];
const shoeStyles = ["shoes-navy", "shoes-green", "shoes-purple"];

const CharacterDesign = () => {
  const [hairStyleIndex, setHairStyleIndex] = useState(0);
  const [topStyleIndex, setTopStyleIndex] = useState(0);
  const [bottomStyleIndex, setBottomStyleIndex] = useState(0);
  const [shoeStyleIndex, setShoeStyleIndex] = useState(0);

  const flickThrough = (currentIndex, setIndex, stylesArray) => {
    if (currentIndex < (stylesArray.length -1)) {
      setIndex(currentIndex + 1); 
    } else {
      setIndex(0);
    }
  }

  const dispatch = useDispatch();
  const {email} = useSelector(state=>state.user)

  const storeOutfit = async (outfit) => {
    const response = await fetch("http://localhost:8000/users/outfit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        outfit: outfit
      }),
    });
    if (response.status === 201) {
      const data = await response.json();
      // console.log("outfit update", data.message);
      dispatch(setCurrentScene("CUT_SCENE"));
    } else {
      // console.log("OPPS");
    }
  };

  const charData = { 
    body: "body",
    hair: hairStyles[hairStyleIndex],
    top: topStyles[topStyleIndex],
    bottoms: bottomStyles[bottomStyleIndex],
    shoes: shoeStyles[shoeStyleIndex]
  };

  return (
    <>
    <div className='h-screen w-screen bg-charBg bg-cover bg-center mx-auto'>
    <div className='mb-10 mt-44 w-96 bg-red-300 p-4 border-4 border-gray-900 mx-auto'>
        <h1 data-test="page-title" className='pixel-font'>Design your character</h1>
    </div>
    <div className='flex flex-wrap justify-center w-96 mx-auto h-80 bg-red-100 border-4 border-gray-900'>
      <div className='w-1/2 p-4 flex mt-12 justify-center'>
        <div className='justify-center scale-125' data-test="character">
          <CharacterComponent data={charData} />
        </div>
      </div>
      <div className='w-1/2 p-4 flex mt-12 justify-center'>
        <div className='justify-center' data-test="character">
        <div className='pb-2'><div className='hair-button mb-4' onClick={() => {flickThrough(hairStyleIndex, setHairStyleIndex, hairStyles)}}></div></div>
        <div className='pb-2'><div className='top-button mb-4' onClick={() => {flickThrough(topStyleIndex, setTopStyleIndex, topStyles)}}></div></div>
        <div className='pb-2'><div className='pants-button mb-4' onClick={() => {flickThrough(bottomStyleIndex, setBottomStyleIndex, bottomStyles)}}></div></div>
        <div className='pb-2'><div className='shoes-button mb-4' onClick={() => {flickThrough(shoeStyleIndex, setShoeStyleIndex, shoeStyles)}}></div></div>
        </div>
      </div>
      <button 
          onClick={() => {storeOutfit(charData)}}
          type='submit'
          className='pixel-font bg-red-300 border-4 border-gray-900 -translate-y-6 px-4'
        >submit styles</button> 
    </div>
    </div>
    </>
  )
}

export default CharacterDesign;