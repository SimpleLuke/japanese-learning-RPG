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
      console.log("outfit update", data.message);
      dispatch(setCurrentScene("BEDROOM"));
    } else {
      console.log("OPPS");
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
    <div className='mb-10'>
        <h1 data-test="page-title">Select your character</h1>
    </div>
    <div className='flex flex-wrap justify-center w-80 h-80'>
      <div className='w-1/2 p-4 bg-red-200 flex justify-center'>
        <div className='justify-center' data-test="character">
          <CharacterComponent data={charData} />
        </div>
      </div>
      <div className='w-1/2 p-4 space-y-6 bg-red-500 justify-center'>
        <div><div className='hair-button mb-4' onClick={() => {flickThrough(hairStyleIndex, setHairStyleIndex, hairStyles)}}></div></div>
        <div><div className='top-button mb-4' onClick={() => {flickThrough(topStyleIndex, setTopStyleIndex, topStyles)}}></div></div>
        <div><div className='pants-button mb-4' onClick={() => {flickThrough(bottomStyleIndex, setBottomStyleIndex, bottomStyles)}}></div></div>
        <div><div className='shoes-button mb-4' onClick={() => {flickThrough(shoeStyleIndex, setShoeStyleIndex, shoeStyles)}}></div></div>
      </div>
      <button 
          onClick={() => {storeOutfit(charData)}}
          type='submit'
        >submit styles</button> 
    </div>
    </>
  )
}

export default CharacterDesign;