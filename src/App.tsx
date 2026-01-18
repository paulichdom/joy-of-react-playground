import * as Tooltip from "@radix-ui/react-tooltip";
import Layout from "./components/Layout";
import { useState } from "react";
import { ComponentKey, components } from "./components";

function App() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>("gradient-generator");

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
