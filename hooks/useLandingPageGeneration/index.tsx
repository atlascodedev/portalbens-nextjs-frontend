import React from "react";
import {
  LandingGenerationItem,
  MenuItem,
  NavigableComponent,
} from "../../@types";
import converToSlug from "../../helper/convertToSlug";

const useLandingPageGeneration = (
  items: LandingGenerationItem[]
): NavigableComponent[] => {
  const [landingItems, setLandingItems] = React.useState<NavigableComponent[]>(
    []
  );

  React.useEffect(() => {
    let landingItemTemp: NavigableComponent[] = [];

    for (let i = 0; i < items.length; i++) {
      const menuItem = items[i];

      let landingItemInternal: NavigableComponent = {
        sectionElement: null,
      };

      let menuIdInternal: string = converToSlug(menuItem.label);

      landingItemInternal.sectionElement = (
        <div ref={menuItem.ref} id={menuIdInternal}>
          {menuItem.component ? (
            menuItem.component
          ) : (
            <div> No child element was passed </div>
          )}
        </div>
      );

      landingItemTemp.push(landingItemInternal);
    }

    setLandingItems(landingItemTemp);
  }, []);

  return landingItems;
};

export default useLandingPageGeneration;
