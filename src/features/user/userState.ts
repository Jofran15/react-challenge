import { UserModel } from "./userModel";

export interface UserState {
  users: UserModel[];
  current: UserModel | null;
  isLoading: boolean;
}
