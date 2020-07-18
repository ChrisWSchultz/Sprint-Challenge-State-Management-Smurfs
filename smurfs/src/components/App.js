import React, { Component } from "react";
import "./App.css";

import SmurfApp from '../components/smurfs/smurfApp'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SmurfApp/>
      </div>
    );
  }
}

export default App;
