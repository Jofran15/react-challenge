import styled from "styled-components";
import { memo } from "react";
import { NationalityModel } from "./nationalityModel";
import { useAppDispatch } from "../../app/hooks";
import { chooseNationality } from "./nationalitySlice";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  border: 2px solid black;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

export const NationalityCard = memo(
  (props: { nationality: NationalityModel }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleButtonClick = (code: string) => {
      dispatch(chooseNationality(code));

      return navigate("/users/nationality");
    };

    return (
      <Button onClick={() => handleButtonClick(props.nationality.code)}>
        {props.nationality.code}
      </Button>
    );
  }
);
