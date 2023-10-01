import React from "react";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import { Container } from "./characteristics.styles";

import Chart from "../../../assets/icons/chart.svg";

const Analysis = () => {
  return (
    <Container>
      <BoxTitle title="Analizy" iconSrc={Chart} backgroundColor="#F0F0FF"/>
    </Container>
  );
};

export default Analysis;
