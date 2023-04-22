import { RootState } from "../../app/store";

export const selectNationalitiesList = (state: RootState) =>
  state.nationality.nationalities;

export const selectCurrentNationality = (state: RootState) =>
  state.nationality.selected;
