import React from "react";
import ReactEcharts from "echarts-for-react";

function Line() {
  return (
    <div>
      <h2>Line Chart</h2>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [
                240, 932, 901, 934, 1290, 1330, 1320, 1230, 520, 1230, 120,
                1230,
              ],
              type: "line",
            },
          ],
        }}
      />
    </div>
  );
}
export default Line;
