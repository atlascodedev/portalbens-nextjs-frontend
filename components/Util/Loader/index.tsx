import styled from "styled-components";
import React from "react";

import AnimatedSVG from "./SVGPath";

const LoaderSpinnerBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #324e3e;
  z-index: 10000;
  position: absolute;

  .loadingSVG {
    width: auto;
    height: 90px;
  }

  @media (min-width: 1024px) {
    .loadingSVG {
      width: auto;
      height: initial;
    }
  }
`;

const LoaderSpinnerRoot = styled.div`
  position: absolute;
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 25px;
    position: relative;
    /* text-indent: -9999em; */
    border-top: 0.25em solid rgba(255, 255, 255, 0);
    border-right: 0.25em solid rgba(255, 255, 255, 0);
    border-bottom: 0.15em solid rgba(255, 255, 255, 1);
    border-left: 0.15em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (min-width: 1024px) {
    .loader {
      font-size: 50px;
    }
  }
`;

const LoaderSpinner = () => {
  return (
    <LoaderSpinnerBackground>
      <AnimatedSVG />
      <LoaderSpinnerRoot>
        <div className="loader"></div>
      </LoaderSpinnerRoot>
    </LoaderSpinnerBackground>
  );
};

export default LoaderSpinner;
