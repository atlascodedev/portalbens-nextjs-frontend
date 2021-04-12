import React from "react";

export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement>;
}

export interface LandingGenerationItem extends MenuItem {
  component: React.FC<any> | JSX.Element;
}

export interface NavigableComponent {
  navigableElement: JSX.Element | null;
}
