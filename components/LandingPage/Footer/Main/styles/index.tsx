import { SvgIcon, TextField } from "@material-ui/core";
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons";
import styled from "styled-components";

const FooterRoot = styled.div`
  width: 100%;
  font-family: "Roboto";
`;

const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const FooterUpperContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 15px;
  padding-top: 35px;
  padding-bottom: 35px;
  font-size: 16px;

  @media (min-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const FooterUpperGridContainer = styled.div`
  display: grid;
  width: 100%;
  justify-items: stretch;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  @media (min-width: 1024px) {
    justify-items: center;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const FooterUpperContactNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-child {
    color: #324e3e;
    font-weight: 800;
  }
`;

const FooterUpperContactEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    color: #324e3e;
    font-weight: 800;
  }
`;

const FooterUpperContactPartnershipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    color: #324e3e;
    font-weight: 800;
  }
`;

const FooterUpperSocialContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;

const FooterBottomContainer = styled.div`
  padding: 40px;
  width: 100%;
  background-color: #324e3e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  @media (min-width: 1024px) {
    > div {
      width: 25%;
    }
  }
`;

const FooterSocialIconContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: #333333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 1.75em;
  }
`;

interface FooterLayoutProps {}

const FooterLayout = ({}: FooterLayoutProps) => {
  return (
    <FooterRoot>
      <FooterInnerContainer>
        <FooterUpperContainer>
          <FooterUpperGridContainer>
            <FooterUpperContactNumberContainer>
              <div>Contato comercial</div>
              <div>{"(54) 99984-8770"}</div>
            </FooterUpperContactNumberContainer>
            <FooterUpperContactEmailContainer>
              <div>Contato por email</div>
              <div>contato@portalbens.com</div>
            </FooterUpperContactEmailContainer>
            <FooterUpperContactPartnershipContainer>
              <div>Quer ser nosso parceiro?</div>
              <div>
                <TextField variant={"standard"} label="Deixe aqui seu email" />
              </div>
            </FooterUpperContactPartnershipContainer>
            <FooterUpperSocialContainer>
              <FooterSocialIconContainer>
                <SvgIcon component={Instagram} />
              </FooterSocialIconContainer>
              <FooterSocialIconContainer>
                <SvgIcon component={Facebook} />
              </FooterSocialIconContainer>
              <FooterSocialIconContainer>
                <SvgIcon component={WhatsApp} />
              </FooterSocialIconContainer>
            </FooterUpperSocialContainer>
          </FooterUpperGridContainer>
        </FooterUpperContainer>
        <FooterBottomContainer>
          <div>
            {`© ${new Date().getFullYear()} - Todos Direitos Reservados - Atlas Code Dev - Desenvolvimento web & estratégia`}
          </div>
        </FooterBottomContainer>
      </FooterInnerContainer>
    </FooterRoot>
  );
};

export default FooterLayout;
