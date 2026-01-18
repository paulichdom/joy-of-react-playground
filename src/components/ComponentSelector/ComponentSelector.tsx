import * as React from "react";
import { ComponentKey, components } from "..";
import styled from "styled-components";

type ComponentSelectorProps = {
  selectedComponent: string;
  setSelectedComponent: React.Dispatch<React.SetStateAction<ComponentKey>>;
};

export const ComponentSelector: React.FC<ComponentSelectorProps> = ({
  selectedComponent,
  setSelectedComponent,
}) => {
  return (
    <Select
      id="component-selector"
      value={selectedComponent}
      onChange={(event) =>
        setSelectedComponent(event.target.value as ComponentKey)
      }
    >
      {Object.entries(components).map(([key, { name }]) => (
        <option key={key} value={key}>
          {name}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  padding: 4px 8px;
`
