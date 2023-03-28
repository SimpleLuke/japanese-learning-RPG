// import ReduxComp from "./components/redux/ReduxComp";
import Example from "./components/QuitGameModal/QuitGameModal";
import { useSelector, useDispatch } from "react-redux";
import { openQuitMenu } from './redux-store/game-modal/gameModalSlice';

function App() {
  const dispatch = useDispatch()

  return (
    <div className="flex w-screen h-screen bg-blue-400">
      <Example />
      <button onClick={() => dispatch(openQuitMenu())}>click me!</button>
      {/* <ReduxComp /> */}
    </div>
  );
}

export default App;
