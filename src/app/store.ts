import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import nationalityReducer from "../features/nationality/nationalitySlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    nationality: nationalityReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
