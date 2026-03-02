import { FC, ReactNode } from "react";
import { ComponentKey } from "..";
import { ComponentSelector } from "../ComponentSelector";

import "./styles.css";

/**
 * https://www.greatfrontend.com/interviews/study/gfe75/questions/user-interface/holy-grail
 */
type HolyGrailProps = {
  selectedComponent: ComponentKey;
  setSelectedComponent: React.Dispatch<React.SetStateAction<ComponentKey>>;
  children: ReactNode;
};

export const HolyGrail: FC<HolyGrailProps> = ({
  children,
  selectedComponent,
  setSelectedComponent,
}) => {
  return (
    <>
      <header>
        <div className="header-container">
          <h1>Sandbox</h1>
          <ComponentSelector
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
          />
        </div>
      </header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>{children}</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
};
