import CharacterComponent from '../design-character/character.component';
import { useDispatch, useSelector } from "react-redux";
// import { setStartOutfit } from "../../redux-store/user/userSlice";
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

  // const flickThroughHair = () => {
  //   if (hairStyleIndex < (hairStyles.length -1)) {
  //     setHairStyleIndex(hairStyleIndex + 1); 
  //   } else {
  //     setHairStyleIndex(0);
  //   }
  // }

  // const flickThroughTop = () => {
  //   if (topStyleIndex < (topStyles.length -1)) {
  //     setTopStyleIndex(topStyleIndex + 1); 
  //   } else {
  //     setTopStyleIndex(0);
  //   }
  // }

  // const flickThroughBottoms = () => {
  //   if (bottomStyleIndex < (bottomStyles.length -1)) {
  //     setBottomStyleIndex(bottomStyleIndex + 1); 
  //   } else {
  //     setBottomStyleIndex(0);
  //   }
  // }

  // const flickThroughShoes = () => {
  //   if (shoeStyleIndex < (shoeStyles.length -1)) {
  //     setShoeStyleIndex(shoeStyleIndex + 1); 
  //   } else {
  //     setShoeStyleIndex(0);
  //   }
  // }

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
    <div>
      <div className='mb-10'>
        <h1 data-test="page-title">Select your character</h1>
      </div>
      <div>
        <div className='characterContainer' data-test="char-1">
          <CharacterComponent data={charData} />
        </div>
      </div>
      <div><button onClick={() => {flickThrough(hairStyleIndex, setHairStyleIndex, hairStyles)}}>change hair</button></div>
      <div><button onClick={() => {flickThrough(topStyleIndex, setTopStyleIndex, topStyles)}}>change top</button></div>
      <div><button onClick={() => {flickThrough(bottomStyleIndex, setBottomStyleIndex, bottomStyles)}}>change bottoms</button></div>
      <div><button onClick={() => {flickThrough(shoeStyleIndex, setShoeStyleIndex, shoeStyles)}}>change shoes</button></div>
        {/* <button 
          onClick={() => {storeOutfit(charData)}}
          type='submit'
        >submit styles</button> */}
    </div>
  )
}

export default CharacterDesign;