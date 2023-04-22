import { createSlice } from "@reduxjs/toolkit";
import { NationalityState } from "./nationalityState";

const initialState: NationalityState = {
  isLoading: false,
  nationalities: [],
  selected: "",
};

export const nationalitySlice = createSlice({
  name: "nationality",
  initialState,
  reducers: {
    chooseNationality: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { chooseNationality } = nationalitySlice.actions;

export default nationalitySlice.reducer;
