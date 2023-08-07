import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [38, 62],
      options: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: ["", ""],
        theme: {
          monochrome: {
            enabled: true,
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        fill: {
          colors: ["#FFB067", "#B655E4"],
        },
        dataLabels: {
          textAnchor: "middle",
          style: {
            colors: ["#fff"],
            fontSize: "16px",
            fontWeight: "light",
          },
          dropShadow: {
            enabled: false,
          },
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed() + "%"];
          },
        },
        legend: {
          show: false,
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
          height={270}
          type="pie"
        />
      </div>
    );
  }
}

export default PieChart;
