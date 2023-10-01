import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f0f0ff;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  padding-left: 256px;
  z-index: 1;
`;

export const Title = styled.h1`
  color: #1e2229;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  margin: 0;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ProgressBadge = styled.div`
  padding: 9px 12px;
  border-radius: 100px;
  background: #8383F2;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export const Notifications = styled.div`
  border-radius: 8px;
  border: 1px solid #e5e5ff;
  background: #fff;
  padding: 12px;
  display: flex;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #ff1f80;
    border-radius: 100%;
    top: 12px;
    right: 11px;
  }
`;

export const NotificationsIcon = styled.img`
  width: 16px;
  height: 16px;
`;
