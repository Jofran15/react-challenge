import { RootState } from "../../app/store";

export const selectUsersList = (state: RootState) => state.user.users;

export const selectCurrentUser = (state: RootState) => state.user.current;

export const selectUserIsLoading = (state: RootState) => state.user.isLoading;
