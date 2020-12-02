import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import Home from "./component/page/Home";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Home />
        <div className="app__Menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
