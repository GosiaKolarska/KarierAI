import React from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  Title,
  Subtitle,
  StyledCard,
  CardIcon,
  OrDiv,
  StyledCardContent,
  StyledCardList,
  StyledTypographyH3,
  StyledTypographyP,
  PurpleChevronRightIcon,
  StyledCardContentInner,
  HomeHelp,
} from "./Home.styles";

import Home1Icon from "../../assets/icons/home1.svg";
import Home2Icon from "../../assets/icons/home2.svg";
import Home3Icon from "../../assets/icons/home3.svg";
import PurpleChevronRight from "../../assets/icons/chevronPurple.svg";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <div>
          <Title>
            <span>Witaj w</span>
            <span>
              Karier<span className="purple">AI</span>
            </span>
          </Title>
          <Subtitle variant="body1">Jak możemy Ci pomóc?</Subtitle>
        </div>
        <StyledCardList>
          <StyledCard>
            <Link to="/odkrywaj" style={{ textDecoration: "none" }}>
              <StyledCardContent>
                <CardIcon src={Home1Icon} />
                <StyledCardContentInner>
                  <StyledTypographyH3 variant="h3">
                    Zapytaj o radę
                  </StyledTypographyH3>
                  <StyledTypographyP color="textSecondary">
                    Pomożemy Ci odkryć Twoją wymarzoną ścieżkę kariery
                  </StyledTypographyP>
                </StyledCardContentInner>
                <PurpleChevronRightIcon
                  src={PurpleChevronRight}
                  alt="strzałka w prawo"
                />
              </StyledCardContent>
            </Link>
          </StyledCard>
          <StyledCard>
          <Link to="/szkoly" style={{ textDecoration: "none" }}>
            <StyledCardContent>
                <CardIcon src={Home2Icon} />
                <StyledCardContentInner>
                <StyledTypographyH3 variant="h3">
                    Wyszukaj szkołę
                </StyledTypographyH3>
                <StyledTypographyP color="textSecondary">
                    Skorzystaj z naszej wyszukiwarki i znajdź idealną szkołę
                </StyledTypographyP>
                </StyledCardContentInner>
                <PurpleChevronRightIcon
                src={PurpleChevronRight}
                alt="strzałka w prawo"
                />
            </StyledCardContent>
          </Link>
          </StyledCard>
          <OrDiv>lub</OrDiv>
          <StyledCard>
            <StyledCardContent>
              <CardIcon src={Home3Icon} />
              <StyledCardContentInner>
                <StyledTypographyH3 variant="h3">
                  Zostań metorem
                </StyledTypographyH3>
                <StyledTypographyP color="textSecondary">
                  Opowiedz swoją historię i zainspiruj innych
                </StyledTypographyP>
              </StyledCardContentInner>
              <PurpleChevronRightIcon
                src={PurpleChevronRight}
                alt="strzałka w prawo"
              />
            </StyledCardContent>
          </StyledCard>
        </StyledCardList>
      </div>
      <HomeHelp><Link to="/pomoc" style={{ textDecoration: "none" }}>Potrzebujesz pomocy?</Link></HomeHelp>
    </HomeContainer>
  );
};

export default Home;
