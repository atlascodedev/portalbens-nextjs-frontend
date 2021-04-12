import React from "react";
import {
  LandingGenerationItem,
  MenuItem,
  NavigableComponent,
} from "../../@types";
import converToSlug from "../../helper/convertToSlug";

const useLandingPageGeneration = (
  items: LandingGenerationItem[]
): { navigableArray: NavigableComponent[]; menuItemArray: MenuItem[] } => {
  const [landingItems, setLandingItems] = React.useState<NavigableComponent[]>(
    []
  );
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([]);

  React.useEffect(() => {
    let landingItemTemp: NavigableComponent[] = [];
    let menuItemsTemp: MenuItem[] = [];

    for (let i = 0; i < items.length; i++) {
      const menuItem = items[i];

      let menuItemInternal: MenuItem = {
        label: "",
        ref: null,
        hidden: menuItem.hidden ? true : false,
      };

      let landingItemInternal: NavigableComponent = {
        navigableElement: null,
      };

      let menuIdInternal: string = converToSlug(menuItem.label);

      menuItemInternal.label = menuItem.label;
      menuItemInternal.ref = menuItem.ref;

      landingItemInternal.navigableElement = (
        <div ref={menuItem.ref} id={menuIdInternal}>
          {menuItem.component ? (
            menuItem.component
          ) : (
            <div> No child element was passed </div>
          )}
        </div>
      );

      landingItemTemp.push(landingItemInternal);
      menuItemsTemp.push(menuItemInternal);
    }

    setMenuItems(menuItemsTemp);
    setLandingItems(landingItemTemp);
  }, []);

  return { navigableArray: landingItems, menuItemArray: menuItems };
};

export default useLandingPageGeneration;
