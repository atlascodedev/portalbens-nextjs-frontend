import { SvgIcon } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { MenuItem } from "../../../../../@types";
import returnHome from "../../../../../helper/returnHome";
import scrollIntoView from "../../../../../helper/scrollIntoView";

const NavbarMainRoot = styled.div`
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.55);
  mix-blend-mode: normal;
  backdrop-filter: blur(40px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  @media (min-width: 1024px) {
    height: 110px;
  }
`;

interface NavbarMainRootAnchorProps {
  anchored?: boolean;
}

const NavbarMainRootAnchor = styled.div<NavbarMainRootAnchorProps>`
  width: 100%;
  visibility: hidden;
  top: 0;
  left: 0;
  position: ${(props) => (props.anchored ? "relative" : "fixed")};
  height: 70px;

  @media (min-width: 1024px) {
    height: 110px;
  }
`;

const NavbarMainInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const NavbarMainLogoContainer = styled.div`
  width: fit-content;
  height: 100%;
  order: 1;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }

  padding: 10px;

  @media (min-width: 1024px) {
    margin-left: 15px;
    flex-grow: 0;
    order: 0;
  }
`;

const NavbarMainLogo = styled.img`
  width: auto;
  height: 100%;
`;

const NavbarMainItemContainer = styled.div`
  flex-grow: 1;
  justify-content: space-evenly;
  align-items: center;
  display: none;

  @media (min-width: 1024px) {
    margin-left: 25%;
    display: flex;
  }
`;

const NavbarMainItem = styled.div`
  width: auto;
  cursor: pointer;
`;

const NavbarMainDrawerButtonContainer = styled.div`
  display: flex;
  align-items: center;
  order: 0;
  margin-left: 25px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface NavbarMainLayoutProps {
  logo: string;
  openDrawer: (open: boolean) => void;
  menu: MenuItem[];
  anchored?: boolean;
}

const NavbarMainLayout = ({
  logo,
  openDrawer,
  menu,
  anchored,
}: NavbarMainLayoutProps) => {
  return (
    <React.Fragment>
      <NavbarMainRoot>
        <NavbarMainInnerContainer>
          <NavbarMainLogoContainer onClick={returnHome}>
            <NavbarMainLogo src={logo} alt="Portal Bens - Logotipo" />
          </NavbarMainLogoContainer>
          <NavbarMainDrawerButtonContainer onClick={() => openDrawer(true)}>
            <SvgIcon component={Menu} />
          </NavbarMainDrawerButtonContainer>
          <NavbarMainItemContainer>
            {menu.map((value, index) => {
              if (!value.hidden) {
                return (
                  <NavbarMainItem
                    onClick={() => scrollIntoView(value.label, value.ref)}
                    key={index}
                    ref={value.ref}
                  >
                    {value.label}
                  </NavbarMainItem>
                );
              }
            })}
          </NavbarMainItemContainer>
        </NavbarMainInnerContainer>
      </NavbarMainRoot>
      <NavbarMainRootAnchor anchored={anchored} />
    </React.Fragment>
  );
};

export default NavbarMainLayout;
