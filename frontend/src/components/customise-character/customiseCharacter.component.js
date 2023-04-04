import CharacterComponent from '../design-character/character.component';
import { useDispatch, useSelector } from "react-redux";
// import { setStartOutfit } from "../../redux-store/user/userSlice";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { useState } from "react";

const hairStyles = ["gentlemanHair-blond", "hair-emo", "hair-long-blonde"];
const topStyles = ["tshirt-gray", "tshirt-green-flower", "vest"];

const CharacterDesign = () => {
  const [hairStyleIndex, setHairStyleIndex] = useState(0);

  const flickThroughHair = () => {
    if (hairStyleIndex < (hairStyles.length -1)) {
      setHairStyleIndex(hairStyleIndex + 1); 
    } else {
      setHairStyleIndex(0);
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
    top: "tshirt-gray",
    bottoms: "pants-blue",
    shoes: "shoes-navy"
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
        <button data-test="char-button" onClick={() => {flickThroughHair()}}>change hair</button>
        {/* <button 
          onClick={() => {storeOutfit(charData)}}
          type='submit'
        >submit styles</button> */}
    </div>
  )
}

export default CharacterDesign;