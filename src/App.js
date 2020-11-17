import React, { useEffect } from "react";
import Map from "./components/Map";
import TotalStaff from './components/TotalStaff';
import ProportionOfPosts from './components/ProportionOfPosts';
import Header from "./components/Header";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left">
          <TotalStaff />
          <ProportionOfPosts />
        </div>
        <div className="center">
          <Map />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
