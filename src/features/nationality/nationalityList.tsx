import { memo } from "react";
import styled from "styled-components";
import { NationalityModel } from "./nationalityModel";
import { NationalityCard } from "./nationalityCard";

const CardContainer = styled.div`
  padding: 15px;
`;

export const NationalityList = memo(
  (props: { nationalities: NationalityModel[] }) => {
    return (
      <>
        {props.nationalities.map(function (nationality, index) {
          return (
            <CardContainer key={index}>
              <NationalityCard nationality={nationality}></NationalityCard>
            </CardContainer>
          );
        })}
      </>
    );
  }
);
