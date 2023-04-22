import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UserCard } from "../features/user/userCard";
import { fetchUser } from "../features/user/userSlice";

import {
  selectCurrentUser,
  selectUserIsLoading,
} from "../features/user/userSelect";


export function Home() {
  const dispatch = useAppDispatch();
  const userIsLoading = useAppSelector(selectUserIsLoading);
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser()).then((response) => {
        console.log("fetchUser response: ", response);
      });
    }
  }, [user, dispatch]);

  return (
    <>
      {userIsLoading && <p>User information is loading...</p>}{" "}
      {user && <UserCard user={user}></UserCard>}
    </>
  );
}
