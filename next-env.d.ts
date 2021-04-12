/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
declare module "*.png";
declare module "*.webp";
declare module "*.jpg";
declare module "*.jpeg";
