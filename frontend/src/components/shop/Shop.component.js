import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import {
  setPreviewOutfit,
  updatePreviewOutfit,
} from "../../redux-store/shop/shopSlice";
import CharacterComponent from "../design-character/character.component";
import basicClothes from "../design-character/character-sprites/basic-clothes.png";
import { addItem, spendCoins } from "../../redux-store/user/userSlice";

const products = [
  {
    id: 1,
    name: "Dark blue t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: 100,
    position: 8,
    styleName: "tshirt-dark-blue",
  },
  {
    id: 2,
    name: "Light blue t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: 100,
    position: 20,
    styleName: "tshirt-light-blue",
  },
  {
    id: 3,
    name: "Brown t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: 100,
    position: 24,
    styleName: "tshirt-brown",
  },
  {
    id: 4,
    name: "Green t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: 100,
    position: 32,
    styleName: "tshirt-green",
  },
];

const Shop = () => {
  const dispatch = useDispatch();
  const { character, email } = useSelector((state) => state.user);
  const { previewOutfit } = useSelector((state) => state.shop);

  const fetchPurchase = async (item, cost) => {
    const response = await fetch("http://localhost:8000/shop/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        item: item,
        cost: cost,
      }),
    });
    if (response.status === 201) {
      const data = await response.json();
    } 
  };

  const buyNewOutfit = async (product) => {
    if (character.attributes.coins >= product.price) {
      dispatch(addItem(product.styleName));
      dispatch(spendCoins(product.price));
      await fetchPurchase(product.styleName, product.price);
    } else {
      alert("Not enough of coins");
    }
  };

  useEffect(() => {
    dispatch(setPreviewOutfit(character.currentOutfit));
  }, []);

  return (
    <div className="bg-shopBg2 bg-cover w-screen h-screen py-5">
      <div className="flex justify-between w-3/4 mx-auto">
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

        <div className="py-3 text-sm font-bold text-yellow-300 pixel-font">
          Coins: {character.attributes.coins}
        </div>
        <div className="flex flex-col items-center">
          <div className=" flex justify-center items-baseline w-40">
            {previewOutfit && <CharacterComponent data={previewOutfit} />}
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center pixel-font">
          Welcome to the shop
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative w-[192px] px-auto">
                <div className="relative h-72  overflow-hidden rounded-lg border-black border-2 bg-white bg-opacity-80">
                  <div className="w-[calc(32px*6)] h-[calc(32px*6)]  overflow-hidden relative">
                    <img
                      className="max-w-none w-[calc(32px*80*6)] absolute"
                      style={{
                        transform: `translate3d(${
                          -32 * 6 * product.position
                        }px,0,0)`,
                        imageRendering: "pixelated",
                      }}
                      src={basicClothes}
                    />
                  </div>
                </div>
                <div className=" absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white pixel-font">
                    C{product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() =>
                    dispatch(updatePreviewOutfit({ top: product.styleName }))
                  }
                  className="pixel-font relative w-[192px] flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Preview
                </button>
              </div>
              <div className="mt-6">
                {character.inventory.includes(product.styleName) ? (
                  <button
                    disabled
                    className="pixel-font relative w-[192px] flex items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-2 text-sm font-medium text-white cursor-not-allowed"
                  >
                    Sold
                  </button>
                ) : (
                  <button
                    onClick={() => buyNewOutfit(product)}
                    className="pixel-font relative w-[192px] flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
