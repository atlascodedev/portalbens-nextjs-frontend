import { SvgIcon, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Add, Check } from "@material-ui/icons";
import styled from "styled-components";

const DefenseCardRoot = styled.div`
  width: 293.35px;
  height: 221.74px;
  background: #fbfbfb;
  box-shadow: 0px 3.2148px 3.2148px rgba(0, 0, 0, 0.25);
  border-radius: 8.037px;

  @media (min-width: 1024px) {
    width: 365px;
    height: 275.9px;
  }
`;

const DefenseCardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 25px;
  height: 100%;
`;

const DefenseCardInnerTitle = styled.div`
  color: #333;
  font-size: 28.13px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-left: 10px;
  }
`;

const DefenseCardInnerText = styled.div`
  font-size: 14.47px;
  font-family: "Roboto";
  color: #333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const DefenseCardIconContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #da4e4a;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transform: translate(-20px, -15px);

  .MuiSvgIcon-root {
    font-size: 45px;
  }

  @media (min-width: 1024px) {
    height: 91px;
    width: 91px;
  }
`;

interface DefenseCardLayoutContainerProps {
  title?: string;
  text?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const DefenseCardLayoutContainer = ({
  icon,
  text,
  title,
}: DefenseCardLayoutContainerProps) => {
  return (
    <DefenseCardRoot>
      <DefenseCardInnerContainer>
        <DefenseCardIconContainer>
          <SvgIcon style={{ fill: "#fff" }} component={icon} />
        </DefenseCardIconContainer>

        <DefenseCardInnerTitle>{title}</DefenseCardInnerTitle>
        <DefenseCardInnerText>{text}</DefenseCardInnerText>
      </DefenseCardInnerContainer>
    </DefenseCardRoot>
  );
};

export default DefenseCardLayoutContainer;
