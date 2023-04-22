import { memo } from "react";
import { UserModel } from "./userModel";
import { UserCard } from "./userCard";
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 15px;
`;

export const UserList = memo((props: { users: UserModel[] }) => {
  return (
    <>
      {props.users.map(function (user, index) {
        return (
          <CardContainer key={index}>
            <UserCard user={user}></UserCard>
          </CardContainer>
        );
      })}
    </>
  );
});
