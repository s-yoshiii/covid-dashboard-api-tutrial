import React, { FC, useEffect } from "react";
import styles from "./DashBoard.module.css";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";

import { selectDaily, fetchAsyncGetDaily } from "../covidSlice";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBoard: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const daily = useSelector(selectDaily);
  useEffect(() => {
    dispatch(fetchAsyncGetDaily("Japan"));
  }, [dispatch]);
  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashboard
          </Typography>
          <Typography variant="body1">
            {new Date(daily[daily.length - 1].Date).toDateString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashBoard;
