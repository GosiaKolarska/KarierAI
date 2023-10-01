import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: fixed;
  left: 0;
  width: 240px;
  background: #fff;
  z-index: 2;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 8px;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

export const StyledListItem = styled.li`
  transition: transform 0.3s ease;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #747980;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  gap: 8px;

  &.active {
    background-color: #f0f0ff;
    color: #5f55d0;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 16px;
`;

export const LogoImage = styled.img``;

export const LogoText = styled.span`
  color: #4d516e;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.1px;
  padding-left: 10px;
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomNavList = styled.ul`
  list-style: unset;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border-top: 1px solid #edf0fa;
  margin: 0;
`;

export const BottomNavItem = styled.li``;

export const BottomNavLink = styled(NavLink)`
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const BottomNavLinkWrapper = styled.div`
  text-decoration: none;
  color: #747980;
  display: flex;
  gap: 8px;
`;

export const LinkIcon = styled.img``;
