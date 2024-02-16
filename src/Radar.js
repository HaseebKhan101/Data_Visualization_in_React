import React from "react";
import ReactEcharts from "echarts-for-react";

function RadarChart() {
  const option = {
    title: {
      text: "",
    },
    tooltip: {},
    legend: {
      data: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
    },
    radar: {
      indicator: [
        { name: "Indicator 1", max: 100 },
        { name: "Indicator 2", max: 100 },
        { name: "Indicator 3", max: 100 },
        { name: "Indicator 4", max: 100 },
        { name: "Indicator 5", max: 100 },
      ],
    },
    series: [
      {
        name: "Radar Chart",
        type: "radar",
        data: [
          {
            value: [80, 90, 70, 60, 50],
            name: "Category 1",
          },
          {
            value: [60, 80, 70, 80, 70],
            name: "Category 2",
          },
          {
            value: [90, 60, 80, 70, 60],
            name: "Category 3",
          },
          {
            value: [70, 70, 60, 50, 80],
            name: "Category 4",
          },
          {
            value: [50, 60, 70, 90, 80],
            name: "Category 5",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Radar Chart</h2>
      <ReactEcharts option={option} />
    </div>
  );
}

export default RadarChart;
