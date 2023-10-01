import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledLogo,
  LogoImage,
  LogoText,
  BottomNav,
  BottomNavList,
  BottomNavItem,
  BottomNavLink,
  BottomNavLinkWrapper,
  LinkIcon,
} from "./Navigations.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Book from "../../assets/icons/book.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Compass from "../../assets/icons/compass.svg";
import Mike from "../../assets/icons/mike.svg";
import Profile from "../../assets/icons/profile.svg";

function Navigation() {
  const [language, setLanguage] = useState("pl");
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNav>
      <div>
        <Link to="/">
          <StyledLogo>
            <LogoImage src={logo} alt="Logo" />
            <LogoText>Karier<span className="purple">AI</span></LogoText>
          </StyledLogo>
        </Link>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/odkrywaj">
              <LinkIcon src={Compass} alt="kompas" />
              Odkrywaj
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/edukacja&testy">
              <LinkIcon src={Book} alt="ksiazka" />
              Edukacja & testy
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/mentorzy&historie">
              <LinkIcon src={Mike} alt="mikrofon" />
              Mentorzy & historie
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/wydarzenia">
              <LinkIcon src={Calendar} alt="kalendarz" />
              Wydarzenia
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/profil">
              <LinkIcon src={Profile} alt="avatar" />
              Twój Profil
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </div>
      <BottomNav>
        <BottomNavList>
          <BottomNavItem>
            <BottomNavLink to="/pomoc">
              <BottomNavLinkWrapper>
                <InfoOutlinedIcon />
                Pomoc
              </BottomNavLinkWrapper>
            </BottomNavLink>
          </BottomNavItem>
          <BottomNavItem>
            <BottomNavLink to="#">
              <BottomNavLinkWrapper>
                <LanguageIcon />
                PL
              </BottomNavLinkWrapper>
              <ExpandMoreIcon />
            </BottomNavLink>
          </BottomNavItem>
        </BottomNavList>
      </BottomNav>
    </StyledNav>
  );
}

export default Navigation;
