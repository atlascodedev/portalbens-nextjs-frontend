import React from "react";
import { MenuItem } from "../../@types";
import Navbar from "../../components/LandingPage/Navbar/Main";
import logo from "../../public/images/portalbens-logo.svg";

interface Props {
  children: React.ReactNode;
  menu: MenuItem[];
}

const LandingPageLayout = ({ children, menu }: Props) => {
  return (
    <React.Fragment>
      <Navbar menu={menu} logo={"/images/portalbens-logo.svg"} />
      <div style={{ backgroundColor: "#083617", height: "100vh" }}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default LandingPageLayout;
