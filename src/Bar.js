import React from "react";
import ReactEcharts from "echarts-for-react";

function Bar() {
  // Generate random stock values for the bar chart
  const stockValues = [45.32, 25, 48.75, 10, 49.8];

  const option = {
    title: {
      text: "",
    },
    xAxis: {
      type: "category",
      data: ["Stock 1", "Stock 2", "Stock 3", "Stock 4", "Stock 5"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: stockValues,
        type: "bar",
      },
    ],
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <ReactEcharts option={option} style={{ height: "300px" }} />
    </div>
  );
}

export default Bar;
