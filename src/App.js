import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default App;
