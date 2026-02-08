import * as React from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  children?: React.ReactNode;
};

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const [portalRoot, setPortalRoot] = React.useState<HTMLDivElement | null>(
    null,
  );

  React.useEffect(() => {
    const element = document.createElement("div");
    element.setAttribute("data-react-portal-host", "");
    document.body.appendChild(element);
    setPortalRoot(element);

    return () => {
      element.remove();
    };
  }, []);

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, portalRoot);
};
