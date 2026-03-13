import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [
    { id: 1, name: "Read 10 pages" },
    { id: 2, name: "Exercise" },
    { id: 3, name: "Drink Water" }
  ]
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {}
});

export default habitSlice.reducer;