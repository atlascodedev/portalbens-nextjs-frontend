import {
  FormControl,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Info, Search } from "@material-ui/icons";
import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { ProductSearchProps } from "..";
import { ProductType } from "../../../../../@types";

const ProductSearchRoot = styled.div`
  width: 323.84px;
  height: 84.3px;
  background: #ffffff;
  box-shadow: -1px 4.10064px 4.10064px rgba(0, 0, 0, 0.25);
  border-radius: 7.75161px;
  font-size: 12px;

  .MuiSelect-root {
    font-size: 12px;
  }

  .MuiInputBase-root {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    width: 729.43px;
    height: 91.47px;
    font-size: 17.5px;
  }
`;

const ProductSearchInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  height: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 45% 35% 20%;
  }
`;

const ProductSearchPriceRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 2.32548px dashed #d3d5d9;
  padding: 10px;

  .title {
    display: flex;
    text-align: center;

    .MuiSvgIcon-root {
      margin-left: 10px;
      font-size: 1.35rem;
      cursor: pointer;
      fill: #0c6936;
    }
  }
`;

const ProductSearchTypeSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  .title {
    text-align: center;
  }

  .select {
    .MuiSelect-root {
      min-width: 50px;
    }
  }

  @media (min-width: 1024px) {
    .select {
      .MuiSelect-root {
        min-width: 125px;
      }
    }
  }
`;

const ProductSearchButtonContainer = styled.div`
  background-color: #0c6936;
  border-radius: 0px 6px 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    .MuiSvgIcon-root {
      font-size: 4rem;
    }
  }
`;

interface ProductSearchLayoutProps extends ProductSearchProps {}

const ProductSearchLayout = ({
  maxValue,
  productType,
  setMaxValue,
  setProduct,
  filterProduct,
}: ProductSearchLayoutProps) => {
  return (
    <ProductSearchRoot>
      <ProductSearchInnerContainer>
        <ProductSearchPriceRangeContainer>
          <div className="title">
            <div>Quanto você deseja investir?</div>
            <Hidden mdDown>
              <Tooltip title={"Valor referente ao valor de entrada"}>
                <SvgIcon component={Info} />
              </Tooltip>
            </Hidden>
          </div>
          <div className="priceField">
            <NumberFormat
              customInput={TextField}
              value={maxValue}
              //   decimalScale={2}
              allowNegative={false}
              thousandSeparator={","}
              prefix={"Até R$"}
              //   fixedDecimalScale={true}
              placeholder={"Até R$ 6000"}
              onValueChange={({ floatValue, formattedValue, value }) =>
                setMaxValue(floatValue)
              }
            />
          </div>
        </ProductSearchPriceRangeContainer>
        <ProductSearchTypeSelectContainer>
          <div className="title">O que você procura?</div>
          <div className="select">
            <TextField
              //   defaultValue="vehicle"
              onChange={(e) => setProduct(e.target.value as ProductType)}
              value={productType}
              select
            >
              <MenuItem value={"vehicle"}>Veículos</MenuItem>
              <MenuItem value={"housing"}>Imóveis</MenuItem>
            </TextField>
          </div>
        </ProductSearchTypeSelectContainer>
        <Tooltip
          title={
            "Ajuste os parâmetros de busca e então clique aqui para pesquisar por uma carta."
          }
        >
          <ProductSearchButtonContainer
            onClick={() => filterProduct(maxValue, productType)}
          >
            <SvgIcon component={Search} />
          </ProductSearchButtonContainer>
        </Tooltip>
      </ProductSearchInnerContainer>
    </ProductSearchRoot>
  );
};

export default ProductSearchLayout;
