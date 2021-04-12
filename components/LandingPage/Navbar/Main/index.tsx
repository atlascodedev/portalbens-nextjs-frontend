import React, { FunctionComponent, SVGProps } from "react";
import { MenuItem } from "../../../../@types";
import NavbarMainLayout from "./styles";

interface Props {
  logo: string;
  menu: MenuItem[];
}

const Navbar = ({ logo, menu }: Props) => {
  return <NavbarMainLayout logo={logo}></NavbarMainLayout>;
};

export default Navbar;
