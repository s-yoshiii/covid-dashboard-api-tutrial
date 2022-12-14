import React, { FC } from "react";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Chart: FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);
  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toString()),
        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: daily.map((data) => data.Confirmed),
            label: "Recovered",
            borderColor: "green",
            fill: true,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "#ff3370",
            fill: true,
          },
        ],
      }}
    />
  );
  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
