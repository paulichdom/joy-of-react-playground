import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { ComponentKey, components } from "./components";
import { HolyGrail } from "./components/HolyGrail/HolyGrail";

function App() {
  const componentsKeys = Object.keys(components);
  const defaultComponent = componentsKeys[
    componentsKeys.length - 1
  ] as ComponentKey;

  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>(defaultComponent);

  const SelectedComponent = components[selectedComponent].component;

  return (
    <Tooltip.Provider delayDuration={200}>
      <HolyGrail
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      >
        <SelectedComponent />
      </HolyGrail>
    </Tooltip.Provider>
  );
}

export default App;
