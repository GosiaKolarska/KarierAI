import styled from "styled-components";
import { Card, CardContent, Typography } from "@mui/material";
import backgroundImage from "../../assets/background.svg";
import backgroundImage1 from "../../assets/bg-1.svg";
import backgroundImage2 from "../../assets/bg-2.svg";
import backgroundImage3 from "../../assets/bg-3.svg";

export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 7%;
  position: relative;

  &:after {
    content: "";
    background-image: url(${backgroundImage2});
    background-repeat: no-repeat;
    position: absolute;
    height: 134px;
    width: 56px;
    right: 0;
    top: 13%;
  }

  &:before {
    content: "";
    position: absolute;
    background-image: url(${backgroundImage1});
    background-size: cover;
    height: 40px;
    width: 40px;
    left: 6%;
    top: 22%;
  }
`;

export const Title = styled.h1`
  color: #181835;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  & span:last-child {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: rgba(24, 24, 53, 0.68);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 4px 0 16px;
`;

export const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-image: url(${backgroundImage3});
    background-size: cover;
    height: 45px;
    width: 45px;
    right: -40%;
    top: 73%;
  }
`;

export const StyledCardContentInner = styled.div`
  width: 100%;
`;

export const StyledCard = styled(Card)`
  max-width: 481px;
  width: 100%;
  border-radius: 12px !important;
  border: 3.455px solid rgba(255, 255, 255, 0.8);
  background: #fafaff;
  box-shadow: 0px 12px 24px 0px rgba(24, 24, 53, 0.08) !important;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const CardIcon = styled.img``;

export const OrDiv = styled.div`
  font-size: 24px;
`;

export const StyledTypographyH3 = styled(Typography)`
  color: rgba(49, 49, 77, 0.87) !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 30px !important;
  padding-bottom: 6px;
`;

export const StyledTypographyP = styled(Typography)`
  color: #838390 !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: 22px !important;
`;

export const PurpleChevronRightIcon = styled.img``;

export const HomeHelp = styled.div`
  color: #5f55d0;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 30px 0;
  cursor: pointer;
`;
