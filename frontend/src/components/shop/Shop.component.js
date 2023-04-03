import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import {
  setPreviewOutfit,
  updatePreviewOutfit,
} from "../../redux-store/shop/shopSlice";
import CharacterComponent from "../design-character/character.component";
import basicClothes from "../design-character/character-sprites/basic-clothes.png";
import { addItem } from "../../redux-store/user/userSlice";

const products = [
  {
    id: 1,
    name: "Dark blue t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: "$140",
    position: 8,
    styleName: "tshirt-dark-blue",
  },
  {
    id: 2,
    name: "Light blue t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: "$140",
    position: 20,
    styleName: "tshirt-light-blue",
  },
  {
    id: 3,
    name: "brown t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: "$140",
    position: 24,
    styleName: "tshirt-brown",
  },
  {
    id: 4,
    name: "Green t-shirt",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    price: "$140",
    position: 32,
    styleName: "tshirt-green",
  },
];

const Shop = () => {
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.user);
  const { previewOutfit } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(setPreviewOutfit(character.currentOutfit));
  }, []);

  return (
    <div className="bg-white h-screen py-5">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className=" flex justify-center items-baseline w-40">
            {previewOutfit && <CharacterComponent data={previewOutfit} />}
          </div>
        </div>
        <button
          data-test="back-to-bedroom"
          onClick={() => dispatch(setCurrentScene("BEDROOM"))}
          className="block bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200"
        >
          ベッドルームに戻る - Back To Bedroom
        </button>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Welcome to the shop</h2>
        <div className="py-3">Coin: {character.attributes.coins}</div>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg border-black border-2">
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
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() =>
                    dispatch(updatePreviewOutfit({ top: product.styleName }))
                  }
                  className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Preview
                </button>
              </div>
              <div className="mt-6">
                {character.inventory.includes(product.styleName) ? (
                  <button
                    disabled
                    className=" relative w-full flex items-center justify-center rounded-md border border-transparent bg-red-100 px-8 py-2 text-sm font-medium text-gray-900 cursor-not-allowed"
                  >
                    Sold
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(product.styleName))}
                    className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
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
