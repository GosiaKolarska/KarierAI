import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SettingsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const SettingsNav = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: #fff;
`;

export const SettingsNavList = styled.ul`
  list-style: none;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SettingsNavItem = styled.li`
  border-radius: 8px;
  border: 1px solid #e5e5ff;
`;

export const SettingsNavLink = styled(NavLink)`
  text-decoration: none;
  color: #31314c;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  padding: 12px;
  display: flex;
  justify-content: space-between;

  &.active {
    border: 1px solid #E5E5FF;
    background: #F0F0FF;
  }

  & > div {
    display: flex;
    gap: 8px;
  }
`;

export const SettingsLinkIcon = styled.img``;

export const ChevronRight = styled.img``;

export const SettingsView = styled.div`

`;
