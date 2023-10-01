import React from "react";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import { Container } from "./characteristics.styles";

import Heart from "../../../assets/icons/heart.svg";

const Favorites = () => {
  return (
    <Container>
      <BoxTitle title="Ulubione" iconSrc={Heart} backgroundColor="#F0F0FF"/>
    </Container>
  );
};

export default Favorites;
