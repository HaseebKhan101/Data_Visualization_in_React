import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
function Polar() {
  return (
    <div>
      <h2>Polar Chart</h2>
      <ReactEcharts
        option={{
          angleAxis: {},
          radiusAxis: {
            type: "category",
            data: ["Mon", "Tues", "Wed", "Thurs"],
            z: 10,
          },
          polar: {},
          series: [
            {
              type: "bar",
              data: [1, 2, 3, 4],
              coordinateSystem: "polar",
              name: "A",
              stack: "a",
            },
            {
              type: "bar",
              data: [2, 4, 6, 8],
              coordinateSystem: "polar",
              name: "B",
              stack: "a",
            },
            {
              type: "bar",
              data: [1, 2, 3, 4],
              coordinateSystem: "polar",
              name: "C",
              stack: "a",
            },
          ],
          legend: {
            show: true,
            data: ["A", "B", "C"],
          },
        }}
      />
    </div>
  );
}
export default Polar;
