import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import CharacterComponent from "../design-character/character.component";
import basicClothes from "../design-character/character-sprites/basic-clothes.png";
import floralClothes from "../design-character/character-sprites/floral.png";
import spaghetiiClothes from "../design-character/character-sprites/spaghetti.png";
import { changeOutfit } from "../../redux-store/user/userSlice";

const products = [
  {
    id: 1,
    position: 8,
    styleName: "tshirt-dark-blue",
    styleSrc: basicClothes,
  },
  {
    id: 2,
    position: 20,
    styleName: "tshirt-light-blue",
    styleSrc: basicClothes,
  },
  {
    id: 3,
    position: 24,
    styleName: "tshirt-brown",
    styleSrc: basicClothes,
  },
  {
    id: 4,
    position: 32,
    styleName: "tshirt-green",
    styleSrc: basicClothes,
  },
  {
    id: 5,
    position: 32,
    styleName: "tshirt-green-flower",
    styleSrc: floralClothes,
  },
  {
    id: 6,
    position: 4,
    styleName: "tshirt-gray",
    styleSrc: basicClothes,
  },
  {
    id: 7,
    position: 64,
    styleName: "vest",
    styleSrc: spaghetiiClothes,
  },
];

const Wardrobe = () => {
  const dispatch = useDispatch();
  const { character, email } = useSelector((state) => state.user);

  const fetchChangeOutfit = async (email, outfit) => {
    const response = await fetch("http://localhost:8000/users/outfit/change", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        outfit: outfit,
      }),
    });
    if (response.status === 201) {
      const data = await response.json();
    } else {
      console.log('404: error')
    }
  };

  const changeOutfitHandle = async (outfit) => {
    dispatch(changeOutfit({ top: outfit }));
    await fetchChangeOutfit(email, { top: outfit });
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-wardrobeBg bg-cover h-screen w-screen py-5">
      <button
        data-test="back-to-bedroom"
        onClick={() => dispatch(setCurrentScene("BEDROOM"))}
        className="block back-btn  text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
      >
        <img
          src="/img/back-button-icon.png"
          alt="Back Button"
          className="h-9 w-9 bg-gray-50 bg-opacity-90 rounded-full "
        />
      </button>

      <div className="flex px-10">
        <div className="flex justify-center items-center bg-beige-japanese-book bg-opacity-90  rounded-lg w-1/3 h-[calc(100vh-100px)] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <CharacterComponent data={character.currentOutfit} />
        </div>
        <div className="w-2/3 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold text-white pixel-font">
            Pick your outfit
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products
              .filter((item) => character.inventory.includes(item.styleName))
              .map((product) => (
                <div key={product.id}>
                  <div
                    onClick={() => changeOutfitHandle(product.styleName)}
                    className="relative cursor-pointer"
                  >
                    <div className="relative w-[calc(32px*6)] h-[calc(32px*6)] overflow-hidden rounded-lg bg-beige-japanese-book bg-opacity-90">
                      <div className="w-[calc(32px*6)] h-[calc(32px*6)] overflow-hidden relative">
                        <img
                          className="max-w-none w-[calc(32px*80*6)] absolute"
                          style={{
                            transform: `translate3d(${
                              -32 * 6 * product.position
                            }px,0,0)`,
                            imageRendering: "pixelated",
                          }}
                          src={product.styleSrc}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
