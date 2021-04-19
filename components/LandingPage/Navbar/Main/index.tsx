import React, { FunctionComponent, SVGProps } from "react";
import { MenuItem } from "../../../../@types";
import LayoutDrawer from "../Drawer";
import NavbarMainLayout from "./styles";

interface Props {
  logo: string;
  menu: MenuItem[];
  navbarAnchored?: boolean;
}

const Navbar = ({ logo, menu, navbarAnchored }: Props) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <LayoutDrawer
        toggleDrawer={toggleDrawer}
        open={drawerOpen}
        logo={logo}
        sidebarItems={menu}
      />
      <NavbarMainLayout
        anchored={navbarAnchored}
        menu={menu}
        openDrawer={toggleDrawer}
        logo={logo}
      ></NavbarMainLayout>
    </React.Fragment>
  );
};

export default Navbar;
