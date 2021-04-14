import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { MenuItem } from "../../../../@types";
import { Grade } from "@material-ui/icons";
import scrollIntoView from "../../../../helper/scrollIntoView";

interface Props {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  logo: string;
  sidebarItems: MenuItem[];
}

const LayoutDrawerImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 75%;
    padding: 10px;
    height: 75%;
    max-width: 200px;
    max-height: auto;
  }
`;

const LayoutDrawer = ({ open, toggleDrawer, logo, sidebarItems }: Props) => {
  return (
    <div>
      <SwipeableDrawer
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        open={open}
        anchor="left"
      >
        <List style={{ color: "#5d6d7c" }}>
          <ListItem divider>
            <LayoutDrawerImageContainer>
              <img src={logo} alt="Logo" />
            </LayoutDrawerImageContainer>
          </ListItem>

          {sidebarItems.map((item, index: number) => {
            if (!item.hidden) {
              return (
                <ListItem
                  onClick={() =>
                    scrollIntoView(item.label, item.ref, toggleDrawer(false))
                  }
                  key={index}
                  style={{
                    padding: "10px",
                    paddingLeft: "20px",
                    marginTop: "15px",
                  }}
                  alignItems="center"
                >
                  <ListItemIcon>
                    <SvgIcon component={Grade} />
                  </ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
              );
            }
          })}
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default LayoutDrawer;
