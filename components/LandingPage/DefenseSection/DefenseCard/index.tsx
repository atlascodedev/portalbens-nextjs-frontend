import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import DefenseCardLayoutContainer from "./styles";

export interface DefenseCardProps {
  title: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const DefenseCard = ({ icon, text, title }: DefenseCardProps) => {
  return <DefenseCardLayoutContainer icon={icon} text={text} title={title} />;
};

export default DefenseCard;
