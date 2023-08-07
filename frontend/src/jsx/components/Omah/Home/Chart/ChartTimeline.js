import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Clients",
          data: [
            75,
            150,
            225,
            200,
            35,
            50,
            150,
            89,
            50,
            78,
            50,
            60,
            40,
            160,
            90,
            40,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 200,
          stacked: true,
          toolbar: {
            show: false,
          },
          sparkline: {
            //enabled: true
          },
          offsetX: -10,
        },
        series: [
          {
            name: "New Clients",
            data: [
              75,
              150,
              225,
              200,
              35,
              50,
              150,
              89,
              50,
              78,
              50,
              60,
              40,
              160,
              90,
              40,
            ],
          },
        ],
        plotOptions: {
          bar: {
            columnWidth: "25%",
            endingShape: "rounded",
            startingShape: "rounded",

            colors: {
              backgroundBarColors: [
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
            },
          },
          distributed: true,
        },

        colors: ["#3B4CB8"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
          colors: ["#000"],
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 1,
          },
        },

        xaxis: {
          categories: [
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
          ],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          x: {
            show: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}
export default ApexBar;
