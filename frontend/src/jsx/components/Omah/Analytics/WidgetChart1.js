import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidgetChart1 extends Component {
  render() {
    const data = {
      labels: [
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
        "January",
        "February",
        "March",
        "April",
      ],

      datasets: [
        {
          label: "Sales Stats",
          backgroundColor: ["rgba(234, 73, 137, 0)"],
          borderColor: "#FF6746",
          pointBackgroundColor: "#FF6746",
          pointBorderColor: "#FF6746",
          borderWidth: 4,
          borderRadius: 10,
          pointHoverBackgroundColor: "#FF6746",
          pointHoverBorderColor: "#FF6746",

          data: [
            8,
            7,
            6,
            3,
            2,
            4,
            6,
            8,
            12,
            6,
            12,
            13,
            10,
            18,
            14,
            24,
            16,
            12,
            19,
            21,
            16,
            14,
            24,
            21,
            13,
            15,
            27,
            29,
            21,
            11,
            14,
            19,
            21,
            17,
          ],
        },
      ],
    };

    const options = {
      title: {
        display: !1,
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      legend: {
        display: !1,
      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0.15,
        },
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        },
      },
    };
    return (
      <>
        <Line data={data} options={options} height={75} />
      </>
    );
  }
}

export default WidgetChart1;
