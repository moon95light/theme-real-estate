import React from "react";
import ReactApexChart from "react-apexcharts";

class RedialBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [56],
      options: {
        chart: {
          height: 250,
          type: "radialBar",
          offsetY: -10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -100,
            endAngle: 260,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,

              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
            },
            track: {
              background: "#e1e5ff",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: false,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: "#FF47E2",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#3B4CB8"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          dashArray: 4,
        },
        labels: [""],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={250}
        />
      </div>
    );
  }
}
export default RedialBar;
