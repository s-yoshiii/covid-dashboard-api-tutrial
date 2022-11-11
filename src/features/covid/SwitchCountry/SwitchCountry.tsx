import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 328,
  },
}));

const SwitchCountry: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const countries = [
    "japan",
    "us",
    "germany",
    "india",
    "france",
    "italy",
    "spain",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
  ];
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
