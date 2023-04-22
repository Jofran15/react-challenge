import { useState } from "react";
import { getUsersByNationality } from "../features/user/userAPI";
import { UserList } from "../features/user/userList";
import { UserModel } from "../features/user/userModel";
import { useAppSelector } from "../app/hooks";
import { selectCurrentNationality } from "../features/nationality/nationalitySelect";

export function Users() {
  const nationality = useAppSelector(selectCurrentNationality);
  const [users, setUsers] = useState<UserModel[]>([]);

  useState(() => {
    if (users.length === 0) {
      getUsersByNationality(nationality).then((users) => {
        console.log("getUsersByNationality response: ", users);
        setUsers(users);
      });
    }
  });

  return (
    <>
      <UserList users={users}></UserList>
    </>
  );
}
