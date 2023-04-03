import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { closeStatModal } from "../../redux-store/stat-modal/statModalSlice";
import userSlice from "../../redux-store/user/userSlice";
import CharacterComponent from "../design-character/character.component";

export default function StatModal() {
  const dispatch = useDispatch();
  const { statModalOpen } = useSelector((state) => state.statModal);
  const { xp, level, wordsKnown, coins } = useSelector(
    (state) => state.user.character.attributes
  );
  const { email, character } = useSelector((state) => state.user);

  const closeStatModalAndQuit = () => {
    dispatch(closeStatModal());
    dispatch(setCurrentScene("BEDROOM"));
  };

  return (
    <Transition.Root show={statModalOpen}>
      {console.log("stat modal open")}
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(closeStatModal())}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-m w-full sm:p-6">
                <div className="relative">
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900 mt-12"
                    >
                      User Stats
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">level: {level}</p>
                      <p className="text-sm text-gray-500">XP: {xp}</p>
                      <p className="text-sm text-gray-500">Coins: {coins}</p>
                      <p className="text-sm text-gray-500">
                        Words Known: {wordsKnown}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => closeStatModalAndQuit()}
                  >
                    Go back to bedroom
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
