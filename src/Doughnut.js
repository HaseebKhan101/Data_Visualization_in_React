import React from "react";
import ReactEcharts from "echarts-for-react";

const Doughnut = () => {
  const data = [
    { name: "Category 1", value: Math.floor(Math.random() * 100) },
    { name: "Category 2", value: Math.floor(Math.random() * 100) },
    { name: "Category 3", value: Math.floor(Math.random() * 100) },
    { name: "Category 4", value: Math.floor(Math.random() * 100) },
    { name: "Category 5", value: Math.floor(Math.random() * 100) },
  ];

  const colors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"];

  const option = {
    tooltip: {},
    legend: {},
    series: [
      {
        type: "pie",
        data: data,
        radius: ["60%", "80%"],
        itemStyle: {
          color: function (params) {
            return colors[params.dataIndex % colors.length];
          },
        },
      },
    ],
  };

  return (
    <div>
      <h2>Doughnut Chart</h2>
      <ReactEcharts
        option={option}
        style={{ height: "300px", width: "100%" }}
      />
    </div>
  );
};

export default Doughnut;
