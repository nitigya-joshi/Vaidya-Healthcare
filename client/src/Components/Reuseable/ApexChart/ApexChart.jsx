import React from "react";
import Chart from "react-apexcharts";

import styles from "./Chart.module.css";

function ApexChart(props) {
  const { series, title } = props;
  const chartInfo = {
    series: [
      {
        name: "Chart",
        data: series.series,
      },
      {
        name: "",
        data: [],
      },
    ],
    toolbar: {
      show: false,
    },
    options: {
      chart: {
        height: "100%",
        width: "350px",
        id: "area",
        toolbar: {
          show: false,
          tools: {
            zoom: false,
            pan: false,
            reset: false,
            zoomin: false,
          },
        },
      },
      legend: {
        position: "top",
      },
      markers: {
        size: 5,
        hover: {
          size: 9,
        },
      },
      dataLabels: {
        enabled: true,
      },

      grid: {
        show: false,
        padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 15,
        },
      },

      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "Months",
        categories: series.labels,
      },
      tooltip: {
        x: {
          format: "Commits",
        },
      },
    },
  };

  return (
    <div className={`${styles["chart"]}`} data-aos="fade-up">
      <section className={`${styles["types-container"]}`}>
        <h3>{title}</h3>
      </section>
      <Chart
        options={chartInfo.options}
        series={chartInfo.series}
        type={"area"}
      />
    </div>
  );
}

export default ApexChart;
