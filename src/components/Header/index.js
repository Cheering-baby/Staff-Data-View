import React, { useEffect, useState, useRef } from "react";
import "./index.css";


function App() {
  const [time, setTime] = useState(new Date().Format("yyyy-MM-dd HH:mm:ss"));
  // let timer = useRef();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().Format("yyyy-MM-dd HH:mm:ss"));
    }, 1000);
  }, []);
  return (
    <div className="Header">
      <div className="top-header">
        <img src="/logo.png" width="200" />
        <div className="title">
          <div className="title-zh-ch">员工大数据展示平台</div>
          <div className="title-en-us">Employee Big Data Display Platform</div>
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}

export default App;
