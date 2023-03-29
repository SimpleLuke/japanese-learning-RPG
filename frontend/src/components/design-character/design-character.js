// import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import './design-character.css';
// import character1 from './character-sprites/char1.png';

const CharacterDesign = () => {
  return (
    <div>
      <h1>Select your character</h1>
      <div className='char1Container'>
        <div className='char1Sprite'>
          <div className='char1Tshirt'>
            <div className='char1Pants'>
              <div className='char1Hair'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='char2Container'>
        <div className='char2Sprite'>
          <div className='char2Tshirt'>
            <div className='char2Pants'>
              <div className='char2Hair'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='char3Container'>
        <div className='char3Sprite'>
          <div className='char3Tshirt'>
            <div className='char3Pants'>
              <div className='char3Hair'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDesign;