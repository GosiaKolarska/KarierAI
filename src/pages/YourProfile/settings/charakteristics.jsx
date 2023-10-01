import React from "react";
import {
  Container,
  SectionHeader,
  StyledChip,
  BoxRowItem,
  ChipList,
  BoxRowList,
} from "./characteristics.styles";

import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import ProfileIcon from '../../../assets/icons/profile2.svg'

const Charakteristics = () => {
  return (
    <Container>
      <BoxTitle title="Charakterystyka" iconSrc={ProfileIcon} backgroundColor="#F0F0FF"/>
      <BoxRowList>
        <BoxRowItem>
          <SectionHeader>Podstawowe</SectionHeader>
          <ChipList>
            <StyledChip label={`Imię: Kacper`} variant="outlined" />
            <StyledChip label={`Wiek: 18`} variant="outlined" />
            <StyledChip label={`Szkoła: Liceum`} variant="outlined" />
            <StyledChip label={`Zamieszkanie: Kraków`} variant="outlined" />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Cechy charakteru</SectionHeader>
          <ChipList>
            <StyledChip
              label={`|||: Skupienie na detalach`}
              variant="outlined"
            />
            <StyledChip label={`|||: Kreatywność`} variant="outlined" />
            <StyledChip label={`|||: Cierpliwość`} variant="outlined" />
            <StyledChip
              label={`|||: Analityczne myślenie`}
              variant="outlined"
            />
            <StyledChip
              label={`|||: Zdolności komunikacyjne`}
              variant="outlined"
            />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Doświadczenie edukacyjne</SectionHeader>
          <ChipList>
            <StyledChip
              label={`Liceum: 3 Liceum Ogólnokształcące w Krakowie`}
              variant="outlined"
            />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Osiągnięcia</SectionHeader>

          <ChipList>
            <StyledChip
              label={`Matura (j. angielskiego rozszerzona): 80%`}
              variant="outlined"
            />
            <StyledChip
              label={`Matura (matematyki rozszerzona): 90%`}
              variant="outlined"
            />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Umiejętności</SectionHeader>
          <ChipList>
            <StyledChip label={`Podstawy Python`} variant="outlined" />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Zainteresowania</SectionHeader>
          <ChipList>
            <StyledChip label={`Jeździectwo konne`} variant="outlined" />
          </ChipList>
        </BoxRowItem>

        <BoxRowItem>
          <SectionHeader>Dodatkowe aktywności</SectionHeader>
          <ChipList>
            <StyledChip
              label={`Korepetytor j. angielskiego`}
              variant="outlined"
            />
          </ChipList>
        </BoxRowItem>
      </BoxRowList>
    </Container>
  );
};

export default Charakteristics;
