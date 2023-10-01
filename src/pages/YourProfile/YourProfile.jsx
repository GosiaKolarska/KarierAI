import React from "react";
import { Routes, Route } from "react-router-dom";
import BoxTitle from "../../components/BoxTitle/BoxTitle";
import {
  SettingsNavList,
  SettingsNavItem,
  SettingsView,
  SettingsNavLink,
  SettingsNav,
  SettingsWrapper,
} from "./YourProfile.styles";

import SettingsNavComponent from "./SettingsNavComponent";
import SettingsContent from "./SettingsContent";

const YourProfile = () => {
  return (
    <SettingsWrapper>
      <SettingsNav>
        <BoxTitle title="Twój Profil" />
        <SettingsNavComponent />
      </SettingsNav>
      <SettingsContent />
    </SettingsWrapper>
  );
};

export default YourProfile;
