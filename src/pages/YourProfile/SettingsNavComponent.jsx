import React from "react";
import {
  SettingsNavList,
  SettingsNavItem,
  SettingsNavLink,
  SettingsLinkIcon,
  ChevronRight,
} from "./YourProfile.styles";

import Heart from "../../assets/icons/heart.svg";
import Chart from "../../assets/icons/chart.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import ProfileIcon from "../../assets/icons/profile2.svg";
import ChevronRightIcon from "../../assets/icons/chevronRight.svg";

const SettingsNavComponent = () => {
  return (
    <SettingsNavList>
      <SettingsNavItem>
        <SettingsNavLink to="/profil/charakterystyka">
          <div>
            <SettingsLinkIcon src={ProfileIcon} alt="profil" />
            Charakterystyka
          </div>
          <ChevronRight src={ChevronRightIcon} alt="strzałka w prawo" />
        </SettingsNavLink>
      </SettingsNavItem>
      <SettingsNavItem>
        <SettingsNavLink to="/profil/ulubione">
          <div>
            <SettingsLinkIcon src={Heart} alt="serce" />
            Ulubione
          </div>
          <ChevronRight src={ChevronRightIcon} alt="strzałka w prawo" />
        </SettingsNavLink>
      </SettingsNavItem>
      <SettingsNavItem>
        <SettingsNavLink to="/profil/analizy">
          <div>
            <SettingsLinkIcon src={Chart} alt="wykres" />
            Analizy
          </div>
          <ChevronRight src={ChevronRightIcon} alt="strzałka w prawo" />
        </SettingsNavLink>
      </SettingsNavItem>
      <SettingsNavItem>
        <SettingsNavLink to="/profil/ustawienia">
          <div>
            <SettingsLinkIcon src={SettingsIcon} alt="ustawienia" />
            Ustawienia
          </div>
          <ChevronRight src={ChevronRightIcon} alt="strzałka w prawo" />
        </SettingsNavLink>
      </SettingsNavItem>
    </SettingsNavList>
  );
};

export default SettingsNavComponent;
