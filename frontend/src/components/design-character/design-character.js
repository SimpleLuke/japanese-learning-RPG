// import './design-character.css';
import CharacterComponent from './character.component';
import { useDispatch } from "react-redux";
import { setStartOutfit } from "../../redux-store/user/userSlice";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const CharacterDesign = () => {
  const dispatch = useDispatch();

  const char1data = { 
    body: "whiteBody",
    hair: "gentlemanHair",
    top: "tshirt",
    bottoms: "pants"
  }

  const char2data = { 
    body: "whiteBody",
    hair: "hair-2",
    top: "tshirt-2",
    bottoms: "pants-2"
  }

  const char3data = { 
    body: "whiteBody",
    hair: "hair-long-blonde",
    top: "vest",
    bottoms: "skirt"
  }


  return (
    <div>
      <h1>Select your character</h1>
      <button type="submit" onClick={() => {
        dispatch(setStartOutfit(char1data));
        dispatch(setCurrentScene("BEDROOM"));
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char1data}/>
        </div>
      </button>

      <button type="submit" onClick={() => {
        dispatch(setStartOutfit(char2data));
        dispatch(setCurrentScene("BEDROOM"));
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char2data}/>
        </div>
      </button>

      <button type="submit" onClick={() => {
        dispatch(setStartOutfit(char3data));
        dispatch(setCurrentScene("BEDROOM"));
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char3data}/>
        </div>
      </button>
    </div>
  )
}

export default CharacterDesign;