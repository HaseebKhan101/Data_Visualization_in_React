import React from "react";
import ReactEcharts from "echarts-for-react";
function Pie() {
  return (
    <div>
      <h2>Pie Chart</h2>
      <ReactEcharts
        option={{
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: 10,
            data: ["Mon", "Tues", "Wed", "Thurs", "Fri"],
          },
          series: [
            {
              name: "Utilization",
              type: "pie",
              radius: ["40%", "60%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 335, name: "Mon" },
                { value: 310, name: "Tues" },
                { value: 234, name: "Wed" },
                { value: 135, name: "Thurs" },
                { value: 1548, name: "Fri" },
              ],
            },
          ],
        }}
      />
    </div>
  );
}

export default Pie;
