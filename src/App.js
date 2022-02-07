import logo from './logo.svg';
import { createContext, useState } from "react";
import Component from './Component';

export const exampleContext = createContext({
  data: "",
  setData: () => {}
});

function App() {

  const [ data, setData ] = useState("Hi from App.js!");
  const contextValue = { data, setData };

  return (
    <exampleContext.Provider value={contextValue}>
    <div className="App">
      <header className="App-header">
        <p>React Template with Context</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
      </header>
    </div>
    </exampleContext.Provider>
  );
}

export default App;
