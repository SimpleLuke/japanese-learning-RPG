import ReduxComp from "./components/redux/ReduxComp";
import StartGame from "./StartGame/StartGame";
import EndGame from "./EndGame/EndGame";

function App() {
  return (
    <div className="flex w-screen h-screen bg-blue-400">
      <EndGame/>
    </div>
  );
}

export default App;
