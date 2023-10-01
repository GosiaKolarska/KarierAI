import styled from "styled-components";
import { Card } from "@mui/material";

export const SchoolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-color: #fff;
`;

export const SchoolCard = styled(Card)`
  max-width: 355px;
  width: 100%;
  box-shadow: 0px 12px 24px 0px rgba(24, 24, 53, 0.08);
`;

export const SchoolName = styled.div`
  color: #2e2e2e;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 8px;
`;

export const SchoolAddress = styled.div`
  color: #303742;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const SchoolRating = styled.div`
  display: flex;
  gap: 10px;
  color: #303742;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export const SchoolImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 1em;
`;

export const SchoolFavorite = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const ImageBadgeContainer = styled.div`
  position: relative;
`;
export const SchoolDistance = styled.div`
  display: flex;
  gap: 10px;
`;

export const SchoolDetails = styled.div`
  display: flex;
  padding-top: 16px;
  border-top: 1px solid #ededed;
  margin-top: 16px;
  color: #303742;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  & span {
    padding: 0 10px;
  }
`;

export const SchoolBadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 4px;
`;

export const SchoolBadge = styled.span`
  border-radius: 8px;
  background: rgba(255, 252, 246, 0.9);
  backdrop-filter: blur(6px);
  color: #8383f2;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  padding: 4px 8px;
  box-shadow: 0px 12px 24px 0px rgba(24, 24, 53, 0.08);
`;
