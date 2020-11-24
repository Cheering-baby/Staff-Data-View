import React, { useEffect } from "react";
import Map from "./components/Map";
import TotalStaff from "./components/TotalStaff";
import Header from "./components/Header";
import ProportionOfPosts from "./components/ProportionOfPosts";
import Gender from "./components/Gender";
import Age from './components/Age';
import "./App.less";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left">
          <TotalStaff />
          <Gender />
          <ProportionOfPosts />
        </div>
        <div className="center">
          <Map />
          <Age />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
