import React from "react";

import styled from "styled-components";

const EtusBarRoot = styled.div<EtusBarProps>`
  .bar {
    height: 4px;
    width: 120px;
    background: ${(props) => (props.color ? props.color : "#DA4E49")};
    margin: ${(props) => (props.margin ? props.margin : "5px")};
    position: relative;
    border-radius: 5px;
    overflow: hidden;
  }

  .bar::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: #fff;
    -webkit-animation-duration: 2.5s;
    animation-duration: 2.5s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: MOVE-BG;
    animation-name: MOVE-BG;
  }

  @-webkit-keyframes MOVE-BG {
    from {
      -webkit-transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(120px);
    }
  }
  @keyframes MOVE-BG {
    from {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(120px);
      transform: translateX(120px);
    }
  }
`;

interface EtusBarProps {
  color?: string;
  height?: string;
  width?: string;
  margin?: string;
}

const EtusBar = ({ color, height, margin, width }: EtusBarProps) => {
  return (
    <EtusBarRoot>
      <div className="bar"></div>
    </EtusBarRoot>
  );
};

export default EtusBar;
