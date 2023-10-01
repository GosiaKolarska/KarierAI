import styled from "styled-components";

export const TitleContainer = styled.div`
  padding: 12px 16px;
  border-radius: 12px 12px 0px 0px;
  color: #1e2229;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  gap: 8px;
  display: flex;
  border-bottom: 1px solid #e5e5ff;
  width: 100%;
  background-color: ${props => props.backgroundColor || '#fff'};
`;

export const Icon = styled.img`
  width: 24px; // adjust the size as needed
  height: 24px; // adjust the size as needed
`;
