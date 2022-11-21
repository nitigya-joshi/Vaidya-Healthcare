import React from "react";
import Chart from "react-apexcharts";

import styles from "./Chart.module.css";

function Donut(props) {
  const { series, title, colors } = props;
  const seriesD = [23, 3, 2];
  const options = {
    series: series.series,
    labels: series.labels,
    legend: {
      position: "top",
    },
    colors: colors,
  };

  return (
    <div className={`${styles["donut"]}`} data-aos="fade-up">
      <div className={`${styles["title-chart"]}`}>
        <h3>{title}</h3>
      </div>
      <Chart options={options} series={seriesD} type={"donut"} />
    </div>
  );
}

export default Donut;
