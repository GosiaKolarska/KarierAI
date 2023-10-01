import React from "react";
import { CardContent, CardMedia } from "@mui/material";
import schools from "./schools.json";
import {
  SchoolContainer,
  SchoolCard,
  SchoolName,
  SchoolAddress,
  SchoolRating,
  SchoolBadge,
  ImageBadgeContainer,
  SchoolBadgeWrapper,
  SchoolDistance,
  SchoolDetails,
  SchoolFavorite,
} from "./SchoolList.styles";

import BoxTitle from "../../components/BoxTitle/BoxTitle";

import star from "../../assets/icons/star.svg";
import pin from "../../assets/icons/pin.svg";
import heartWhite from "../../assets/icons/heartWhite.svg";

const SchoolList = () => {
  return (
    <SchoolContainer>
      <BoxTitle title="Sugerowane szkoły" />
      {schools.szkoly_srednie.map((school) => (
        <SchoolCard key={school.nazwa}>
          <ImageBadgeContainer>
            {school.img && (
              <CardMedia
                component="img"
                height="240"
                image={school.img}
                alt={school.nazwa}
              />
            )}
            <SchoolBadgeWrapper>
              {school.category && (
                <SchoolBadge
                  data-type={school.category}
                  badgeType={school.category}
                >
                  {school.category}
                </SchoolBadge>
              )}
              {school.type && (
                <SchoolBadge data-type={school.type} badgeType={school.type}>
                  {school.type}
                </SchoolBadge>
              )}
            </SchoolBadgeWrapper>
            <SchoolFavorite src={heartWhite} />
          </ImageBadgeContainer>
          <CardContent>
            <SchoolName>{school.nazwa}</SchoolName>
            <SchoolAddress>{school.adres}</SchoolAddress>

            <SchoolDetails>
              <SchoolDistance>
                <img src={pin} />
                600m
              </SchoolDistance>
              <span>|</span>
              <SchoolRating>
                <img src={star} />
                {school.rating} ({school.liczba_opinii})
              </SchoolRating>
            </SchoolDetails>
          </CardContent>
        </SchoolCard>
      ))}
      {schools.szkoly_wyzsze.map((school) => (
        <SchoolCard key={school.nazwa}>
          <ImageBadgeContainer>
            {school.img && (
              <CardMedia
                component="img"
                height="240"
                image={school.img}
                alt={school.nazwa}
              />
            )}
            <SchoolBadgeWrapper>
              {school.category && (
                <SchoolBadge
                  data-type={school.category}
                  badgeType={school.category}
                >
                  {school.category}
                </SchoolBadge>
              )}
              {school.type && (
                <SchoolBadge data-type={school.type} badgeType={school.type}>
                  {school.type}
                </SchoolBadge>
              )}
            </SchoolBadgeWrapper>
          </ImageBadgeContainer>
          <CardContent>
            <SchoolName>{school.nazwa}</SchoolName>
            <SchoolAddress>{school.adres}</SchoolAddress>
            <SchoolRating>
              Ocena: {school.rating} ({school.liczba_opinii} opinii)
            </SchoolRating>
          </CardContent>
        </SchoolCard>
      ))}
    </SchoolContainer>
  );
};

export default SchoolList;
