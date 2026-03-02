import { ReactNode } from "react";
import "./styles.css";

export const HolyGrail = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>{children}</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
};
