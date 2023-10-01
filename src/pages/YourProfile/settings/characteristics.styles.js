import styled from "styled-components";
import { Chip } from "@mui/material";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(30, 34, 41, 0.16);
  width: 100%;
  border-radius: 12px 12px 0px 0px;
`;

export const SectionHeader = styled.h3`
  color: #2e2e2e;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  padding-bottom: 8px;
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const StyledChip = styled(Chip)`
  border: 1px solid #e5e5ff !important;
  color: #5f55d0!important;
`;

export const BoxRowList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
`;

export const BoxRowItem = styled.li`
  border-radius: 12px;
  padding: 16px;
  border: 3.455px solid rgba(255, 255, 255, 0.8);
  background: #fafaff;
`;

export const SettingsGroup = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 10px;
  background: #fff;
`;

export const UploadButton = styled.label`
  background-color: #E0E0E0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  
  &:hover {
    background-color: #D0D0D0;
  }

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export const ColorPalette = styled.div`
  display: flex;
  gap: 10px;

  div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;