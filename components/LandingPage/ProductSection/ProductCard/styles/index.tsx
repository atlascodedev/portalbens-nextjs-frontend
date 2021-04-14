import { SvgIcon, Tooltip } from "@material-ui/core";
import {
  Commute,
  DriveEta,
  Email,
  Home,
  Mail,
  Star,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import { Product } from "../../../../../@types";
import _ from "lodash";

const ProductCardRoot = styled.div`
  width: 295px;
  height: 320px;
  background: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: "Roboto";
`;

const ProductCardInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const ProductCardHeader = styled.div`
  background: #585858;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 0px 0px;
  max-height: 47px;
  min-height: 47px;
  width: 100%;
`;

const ProductCardHeaderInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
`;

const ProductCardHeaderInnerIconContainer = styled.div`
  width: 52.33px;
  height: 58.5px;
  background: #da4e49;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 2.25rem;
  }
`;

const ProductCardHeaderInnerLabel = styled.div`
  font-size: 25px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 100%;
`;

const ProductCardHeaderInnerSpecialDealIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProductSpecialDealIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .MuiSvgIcon-root {
    fill: #585858;
    font-size: 1.25rem;
  }
`;

const ProductCardContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 18.6px;
  padding-top: 30px;
`;

const ProductCardContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  font-size: 16px;

  .infoContainer {
    display: flex;
    margin-bottom: auto;
    flex-direction: column;

    .title {
      font-weight: bold;
    }

    .info {
    }
  }

  .infoContainer.last {
    margin-bottom: 0px;
  }
`;

const ProductCardContentContact = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 20%;
  align-items: center;
`;

const CircleAroundIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #78e08f;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 1.75rem;
  }
`;

interface ProductCardLayoutProps extends Product {}

const ProductCardLayout = ({
  admin,
  entradaCredito,
  featured,
  saldoCredito,
  type,
  valorCredito,
}: ProductCardLayoutProps) => {
  return (
    <ProductCardRoot>
      <ProductCardInnerContainer>
        <ProductCardHeader>
          <ProductCardHeaderInnerContainer>
            <div
              style={{
                width: "100%",
              }}
            >
              <ProductCardHeaderInnerIconContainer>
                <SvgIcon
                  component={type == "vehicle" ? DriveEta : Home}
                ></SvgIcon>
              </ProductCardHeaderInnerIconContainer>
            </div>
            <ProductCardHeaderInnerLabel>
              {type == "vehicle" ? "Veículo" : "Imóvel"}
            </ProductCardHeaderInnerLabel>
            <ProductCardHeaderInnerSpecialDealIconContainer>
              <Tooltip
                title={
                  <React.Fragment>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ fontWeight: "bold" }}>
                        Alerta para grande oferta:
                      </div>
                      <div>Este pode ser um ótimo negócio!</div>
                    </div>
                  </React.Fragment>
                }
              >
                <ProductSpecialDealIconWrapper
                  style={{ display: featured ? "flex" : "none" }}
                >
                  <SvgIcon component={Star} />
                </ProductSpecialDealIconWrapper>
              </Tooltip>
            </ProductCardHeaderInnerSpecialDealIconContainer>
          </ProductCardHeaderInnerContainer>
        </ProductCardHeader>
        <ProductCardContentContainer>
          <ProductCardContentInfo>
            <div className="infoContainer">
              <div className="title">Valor do crédito</div>
              <div className="info">{valorCredito}</div>
            </div>
            <div className="infoContainer">
              <div className="title">Entrada</div>
              <div className="info">{entradaCredito}</div>
            </div>
            <div className="infoContainer">
              <div className="title">Saldo</div>
              <div className="info">{saldoCredito}</div>
            </div>
            <div className="infoContainer last">
              <div className="title">Administradora</div>
              <div className="info">{_.capitalize(admin)}</div>
            </div>
          </ProductCardContentInfo>
          <ProductCardContentContact>
            <Tooltip title={"Contato via formulário"}>
              <div style={{ marginTop: "29px" }}>
                <CircleAroundIcon>
                  <SvgIcon component={Email} />
                </CircleAroundIcon>
              </div>
            </Tooltip>

            <Tooltip title={"Contato via WhatsApp"}>
              <CircleAroundIcon>
                <SvgIcon component={WhatsApp} />
              </CircleAroundIcon>
            </Tooltip>
          </ProductCardContentContact>
        </ProductCardContentContainer>
      </ProductCardInnerContainer>
    </ProductCardRoot>
  );
};

export default ProductCardLayout;
