import "./App.css";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from "./components/ClassCounter";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObjects from "./components/UseStateWithObjects";
import CounterClassComponent from "./components/CounterClassComponent";
import UseEffectCounter from "./components/UseEffectCounter";

function App() {
  return <div className="App">
      {/* <HooksCounter /> */}
      {/* <ClassCounter /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays />  */}
      {/* <UseStateWithObjects /> */}
      {/* <ClassCounter /> */}
      <UseEffectCounter />
    </div>;
}

export default App;
