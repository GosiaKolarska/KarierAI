import React, { useState } from "react";
import BoxTitle from "../../../components/BoxTitle/BoxTitle";
import {
  Container,
  SettingsGroup,
  Label,
  Input,
  UploadButton,
  ColorPalette,
} from "./characteristics.styles";

import SettingsIcon from "../../../assets/icons/settings.svg";

const SettingsView = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <BoxTitle
        title="Ustawienia"
        iconSrc={SettingsIcon}
        backgroundColor="#F0F0FF"
      />
      <div className="container-wrapper">
        <SettingsGroup>
          <Label htmlFor="email">Zmień email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Nowy email"
          />
        </SettingsGroup>

        <SettingsGroup>
          <Label htmlFor="password">Zmień hasło:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Nowe hasło"
          />
        </SettingsGroup>

        <SettingsGroup>
          <Label htmlFor="avatar">Zmień avatar:</Label>
          <UploadButton>
            Wybierz zdjęcie
            <Input
              type="file"
              id="avatar"
              name="avatar"
              hidden
              onChange={handleAvatarChange}
            />
          </UploadButton>
          {avatar && (
            <img
              src={avatar}
              alt="Avatar Preview"
              style={{ maxWidth: "100px", borderRadius: "50%" }}
            />
          )}
        </SettingsGroup>

        <SettingsGroup>
          <Label>Wybierz paletę kolorów:</Label>
          <ColorPalette>
            <div style={{ backgroundColor: "#FFD700" }}></div>
            <div style={{ backgroundColor: "#FF6347" }}></div>
            <div style={{ backgroundColor: "#40E0D0" }}></div>
            <div style={{ backgroundColor: "#DDA0DD" }}></div>
          </ColorPalette>
        </SettingsGroup>
      </div>
    </Container>
  );
};

export default SettingsView;
