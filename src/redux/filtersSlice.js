import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filter.name;
