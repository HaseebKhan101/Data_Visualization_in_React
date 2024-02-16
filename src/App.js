import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Line from "./Line";
import Pie from "./Pie";
import Polar from "./Polar";
import Bar from "./Bar";
import Doughnut from "./Doughnut";
import RadarChart from "./Radar";

function App() {
  return (
    <div className="App">
      <Polar />
      <Pie />
      <Line />
      <Bar />
      <Doughnut />
      <RadarChart />
    </div>
  );
}

export default App;
