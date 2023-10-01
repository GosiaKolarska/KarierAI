import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Analysis from "./settings/Analysis";
import Charakteristics from "./settings/charakteristics";
import Favorites from "./settings/Favorites";
import SettingsView from "./settings/Settings";

const SettingsContent = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="charakterystyka" />} />
      <Route path="charakterystyka" element={<Charakteristics />} />
      <Route path="ulubione" element={<Favorites />} />
      <Route path="analizy" element={<Analysis />} />
      <Route path="ustawienia" element={<SettingsView />} />
    </Routes>
  );
};

export default SettingsContent;
