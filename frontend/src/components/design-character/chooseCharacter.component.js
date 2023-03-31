import CharacterComponent from './character.component';
import { useDispatch } from "react-redux";
import { setStartOutfit } from "../../redux-store/user/userSlice";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

const CharacterDesign = () => {
  const dispatch = useDispatch();

  const char1data = { 
    body: "body",
    hair: "gentlemanHair-blond",
    top: "tshirt-gray",
    bottoms: "pants-blue",
    shoes: "shoes-navy"
  }

  const char2data = { 
    body: "body",
    hair: "hair-emo",
    top: "tshirt-green-flower",
    bottoms: "pants-pink",
    shoes: "shoes-green"
  }

  const char3data = { 
    body: "body",
    hair: "hair-long-blonde",
    top: "vest",
    bottoms: "skirt",
    shoes: "shoes-purple"
  }


  return (
    <div>
      <div className='mb-10'>
        <h1 data-test="page-title">Select your character</h1>
      </div>
      <button type="submit" data-test="char-button" onClick={() => {
        dispatch(setStartOutfit(char1data));
        dispatch(setCurrentScene("BEDROOM"));
        }}>
        <div className='characterContainer' data-test="char-1">
          <CharacterComponent data={char1data} />
        </div>
      </button>

      <button type="submit" data-test="char-button" onClick={() => {
        dispatch(setStartOutfit(char2data));
        dispatch(setCurrentScene("BEDROOM"));
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char2data}/>
        </div>
      </button>

      <button type="submit" data-test="char-button" onClick={() => {
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