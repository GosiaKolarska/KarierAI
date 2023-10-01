import React from "react";
import { TitleContainer, Icon } from "./BoxTitle.styles";

const BoxTitle = ({ title, iconSrc, backgroundColor }) => {
  return (
    <TitleContainer backgroundColor={backgroundColor}>
      {iconSrc && <Icon src={iconSrc} alt="Icon" />}
      {title}
    </TitleContainer>
  );
};

export default BoxTitle;
