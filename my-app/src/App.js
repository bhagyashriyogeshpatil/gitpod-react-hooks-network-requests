import "./App.css";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from "./components/ClassCounter";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObjects from "./components/UseStateWithObjects";
import CounterClassComponent from "./components/CounterClassComponent";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterWithTimer from "./components/UseEffectCounterWithTimer";
import UseEffectCounterWithTimerContainer from "./components/UseEffectCounterWithTimerContainer";
import React from 'react';
import HTTPRequests from "./components/HTTPRequests";

function App() {
  return <div className="App">
      {/* <HooksCounter /> */}
      {/* <ClassCounter /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays />  */}
      {/* <UseStateWithObjects /> */}
      {/* <ClassCounter /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterWithTimerContainer /> */}
      <HTTPRequests />
    </div>;
}

export default App;
