// import './design-character.css';
import CharacterComponent from './character.component';
import { useDispatch } from "react-redux";
import { setStartOutfit } from "../../redux-store/user/userSlice";

const CharacterDesign = () => {
  const dispatch = useDispatch();

  const char1data = { 
    body: "whiteBody",
    hair: "gentlemanHair",
    top: "tshirt",
    bottoms: "pants"
  }

  return (
    <div>
      <h1>Select your character</h1>
      <div className='characterContainer'>
        <CharacterComponent data={char1data}/>
      </div>
      <button type="submit" onClick={() => dispatch(setStartOutfit(char1data))}>choose me</button>
    </div>
    // body: char1data.body, hair: char1data.hair, top: char1data.top, bottoms: char1data.bottoms
  )
}

export default CharacterDesign;