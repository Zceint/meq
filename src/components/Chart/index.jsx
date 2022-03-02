import React from "react";
import ReactECharts from "echarts-for-react";

export default function Chart(props) {
  const { weather } = props;
  let time = [];
  let humidity = [];
  let temperature = [];

  weather.map((el) => {
    time.push(el.time.split(" ")[1]);
    humidity.push(el.humidity);
    temperature.push(el.temp_c);
  });

  console.log(time);

  const options = {
    grid: {},
    xAxis: {
      type: "category",
      data: time,
    },
    yAxis: [
      {
        type: "value",
        name: "Humidity",
        min: 0,
        max: 100,
        position: "right",
        axisLabel: {
          formatter: "{value} %",
        },
        splitLine: {
          show: false,
        },
      },
      {
        type: "value",
        name: "Temperature",
        min: function (value) {
          return Math.floor(value.min - 10);
        },
        max: function (value) {
          return Math.floor(value.min + 10);
        },
        position: "left",
        axisLabel: {
          formatter: "{value} °C",
        },
        splitNumber: 6,
      },
    ],
    series: [
      {
        name: "Humidity",
        type: "line",
        yAxisIndex: 0,
        data: humidity,
      },
      {
        name: "Temperature",
        type: "line",
        yAxisIndex: 1,
        data: temperature,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    legend: {},
  };

  console.log(props);
  return (
    <div id="chart_box">
      <ReactECharts option={options} style={{ height: "600px", width: "60%" }} />
    </div>
  );
}
