import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeQuitMenu } from "../../redux-store/game-modal/gameModalSlice";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";

export default function QuitGameModal() {
  const dispatch = useDispatch();
  const { quitMenuOpen } = useSelector((state) => state.modalMenu);

  const cancelButtonRef = useRef(null);

  const closeMenuAndQuit = () => {
    dispatch(closeQuitMenu());
    dispatch(setCurrentScene("BEDROOM"));
  };

  return (
    <Transition.Root show={quitMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[999]"
        data-test="dialog"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(closeQuitMenu())}
      >
        <Transition.Child
          as={Fragment}
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
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-[294px] h-[152px] bg-quitModal bg-cover transform overflow-hidden px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-[294px] sm:max-w-lg sm:p-6">
                <div>
                  <div className="text-center ">
                    <Dialog.Title
                      data-test="modal-title"
                      as="h3"
                      className="pixel-font text-sm font-semibold leading-4 text-gray-900"
                    >
                      Are you sure you want to quit the game?
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    data-test="modal-close-btn"
                    type="button"
                    className="inline-flex w-full pixel-font text-red-900 justify-center  px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={closeMenuAndQuit}
                  >
                    Quit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full pixel-font justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  sm:col-start-1 sm:mt-0"
                    onClick={() => dispatch(closeQuitMenu())}
                    ref={cancelButtonRef}
                  >
                    Cancel
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
