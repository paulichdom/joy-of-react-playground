import * as React from "react";
import { Portal } from "./Portal";

export const PortalSandbox: React.FC = () => {
  const [isPortalRendered, setIsPortalRendered] = React.useState(true);
  return (
    <>
      <button onClick={() => setIsPortalRendered((prev) => !prev)}>
        Toggle Portal
      </button>
      <div style={{ border: "2px solid gray" }}>
        This box is rendered inside App.
        {isPortalRendered && (
          <Portal>
            <div style={{ border: "2px solid pink" }}>
              <div> This box should be rendered outside!</div>
            </div>
          </Portal>
        )}
      </div>
    </>
  );
};
