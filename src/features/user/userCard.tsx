import styled from "styled-components";
import { UserModel } from "./userModel";
import { memo, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaMapMarker,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const Wrapper = styled.div`
  border: 2px solid black;
  position: relative;
`;
const BackContainer = styled.div`
  position: absolute;
  border-bottom: 1px solid #c1c1c1;
  background-color: #f1f1f1;
  height: 100px;
  width: 100%;
  z-index: -1;
`;
const Container = styled.div`
  z-index: 1;
  padding: 20px;
`;
const Label = styled.span`
  font-size: 1.2rem;
  color: #c1c1c1;
  display: block;
`;
const Text = styled.p`
  color: black;
  font-size: 1.8rem;
`;
const Picture = styled.img`
  background-color: #ffffff;
  border: 1px solid #c1c1c1;
  padding: 5px;
  border-radius: 50%;
`;
const IconsContainer = styled.div``;
const IconButton = styled.button`
  border: none;
  background-color: #ffffff;
  margin: 0 5px;
  padding: 10px;
  color: #c1c1c1;
  font-size: 1.3rem;
  &.active {
    color: #afe1af;
  }
`;

export const UserCard = memo((props: { user: UserModel }) => {
  const [active, setActive] = useState("name");
  const [label, setLabel] = useState(`Hi, my name is`);
  const [text, setText] = useState(
    `${props.user.name.first} ${props.user.name.last}`
  );

  const handleIconButtonClick = (option: string) => {
    setActive(option);

    switch (option) {
      case "name":
        setLabel(`Hi, my name is`);
        setText(`${props.user.name.first} ${props.user.name.last}`);
        break;
      case "email":
        setLabel(`Hi, my email is`);
        setText(props.user.email);
        break;
      case "calendar":
        setLabel(`Hi, my date of birth is`);
        setText(new Date(props.user.dob.date).toLocaleDateString());
        break;
      case "location":
        setLabel(`Hi, my address is`);
        setText(
          `${props.user.nat}: ${props.user.location.street.number} ${props.user.location.street.name}`
        );
        break;
      case "phone":
        setLabel(`Hi, my phone number is`);
        setText(props.user.phone);
        break;
      case "security":
        setLabel(`Hi, my username is`);
        setText(props.user.login.username);
        break;
    }
  };

  return (
    <Wrapper>
      <BackContainer></BackContainer>
      <Container>
        <Picture src={props.user.picture.large} />
        <Text>
          <Label>{label}</Label>
          {text}
        </Text>
        <IconsContainer>
          <IconButton
            className={active === "name" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("name");
            }}
          >
            <FaUser></FaUser>
          </IconButton>
          <IconButton
            className={active === "email" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("email");
            }}
          >
            <FaEnvelope></FaEnvelope>
          </IconButton>
          <IconButton
            className={active === "calendar" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("calendar");
            }}
          >
            <FaCalendar></FaCalendar>
          </IconButton>
          <IconButton
            className={active === "location" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("location");
            }}
          >
            <FaMapMarker></FaMapMarker>
          </IconButton>
          <IconButton
            className={active === "phone" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("phone");
            }}
          >
            <FaPhone></FaPhone>
          </IconButton>
          <IconButton
            className={active === "security" ? "active" : ""}
            onClick={(event) => {
              handleIconButtonClick("security");
            }}
          >
            <FaLock></FaLock>
          </IconButton>
        </IconsContainer>
      </Container>
    </Wrapper>
  );
});
