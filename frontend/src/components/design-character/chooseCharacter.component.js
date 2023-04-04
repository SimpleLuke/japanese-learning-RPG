import CharacterComponent from './character.component';
import { useDispatch, useSelector } from "react-redux";
import { setStartOutfit } from "../../redux-store/user/userSlice";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

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

const CharacterDesign = () => {
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
      dispatch(setCurrentScene("CUT_SCENE"));
    } else {
      console.log("OPPS");
    }
  };

  return (
    <div>
      <div className='mb-10'>
        <h1 data-test="page-title">Select your character</h1>
      </div>
      <button type="submit" data-test="char-button" onClick={() => {
        storeOutfit(char1data)
        }}>
        <div className='characterContainer' data-test="char-1">
          <CharacterComponent data={char1data} />
        </div>
      </button>

      <button type="submit" data-test="char-button" onClick={() => {
              storeOutfit(char2data)
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char2data}/>
        </div>
      </button>

      <button type="submit" data-test="char-button" onClick={() => {
              storeOutfit(char3data)
        }}>
        <div className='characterContainer'>
          <CharacterComponent data={char3data}/>
        </div>
      </button>
    </div>
  )
}

export default CharacterDesign;