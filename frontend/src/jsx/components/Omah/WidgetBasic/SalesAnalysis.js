import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesAnalysis extends Component {
  render() {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "My First dataset",
          data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
          backgroundColor: "#fff",
          borderColor: "#2B98D6",
          borderWidth: 2,
          strokeColor: "#2B98D6",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "#2B98D6",
          pointBackgroundColor: "#2B98D6",
          pointBorderWidth: 1,
          pointRadius: 1.5,
          pointHoverBackgroundColor: "#2B98D6",
          pointHoverBorderColor: "#2B98D6",
          pointHoverRadius: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0,
        },
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      title: {
        display: false,
      },
    };
    return (
      <div style={{ height: 255 }}>
        <Line data={data} options={options} height={255} />
      </div>
    );
  }
}

export default SalesAnalysis;
