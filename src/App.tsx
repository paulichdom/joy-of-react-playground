import * as Tooltip from "@radix-ui/react-tooltip";
import Layout from "./components/Layout";
import { useState } from "react";
import { ComponentKey, components } from "./components";

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
      <Layout
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      >
        <SelectedComponent />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
