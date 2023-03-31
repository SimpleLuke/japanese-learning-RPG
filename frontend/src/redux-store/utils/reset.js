import { resetGame } from "../game/gameSlice";
import { resetScene } from "../scene/sceneSlice";
import { resetUser } from "../user/userSlice";

export const resetStore = (dispatch) => {
  dispatch(resetGame());
  dispatch(resetUser());
  dispatch(resetScene());
};
