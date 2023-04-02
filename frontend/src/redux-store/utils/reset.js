import { resetGame } from "../game/gameSlice";
import { resetScene } from "../scene/sceneSlice";
import { resetUser } from "../user/userSlice";
import { resetShop } from "../shop/shopSlice";

export const resetStore = (dispatch) => {
  dispatch(resetGame());
  dispatch(resetUser());
  dispatch(resetScene());
  dispatch(resetShop());
};
