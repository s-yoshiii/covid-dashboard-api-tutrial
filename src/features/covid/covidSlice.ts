import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
import { RootState } from "../../app/store";
import dataDaily from "./apiDataDaily.json";

const apiUrl = "https://api.covid19api.com/total/country";
type DATADAILY = typeof dataDaily;
type covidSlice = {
  daily: DATADAILY;
  country: string;
};
const initialState: covidSlice = {
  daily: dataDaily,
  country: "Japan",
};

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async (country: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
);
