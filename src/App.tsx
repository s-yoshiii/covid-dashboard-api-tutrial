import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Cards from "./features/covid/Cards/Cards";
import { LinearProgress } from "@material-ui/core";
import Chart from "./features/covid/Chart/Chart";

function App() {
  return (
    <div className="App">
      <Cards />
      <Chart />
    </div>
  );
}

export default App;
