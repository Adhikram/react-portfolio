import React from "react";
import styled, { css } from "styled-components";

const NavButton = ({ open, closing }) => {
  return (
    <Circle open={open} closing={closing}>
      <Bar1 />
      <Bar2 />
      <Bar3 />
    </Circle>
  );
};

export default NavButton;

const BaseBarStyle = styled.div`
  float: right;
  margin: 5px 0 5px 5px;
  height: 4px;
  background-color: white;
  transition: width 0.2s ease-in-out, transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
`;

export const Bar1 = styled(BaseBarStyle)`
  width: 100%;
`;

export const Bar2 = styled(BaseBarStyle)`
  width: 61%;
`;

export const Bar3 = styled(BaseBarStyle)`
  width: 21%;
`;

const BaseCircle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled(BaseCircle)`
  ${({ open }) =>
    open
      ? css`
          padding: 0;

          ${Bar1} {
            margin: 0;
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }
          ${Bar2} {
            opacity: 0;
          }
          ${Bar3} {
            margin: 0;
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%) rotate(-45deg);
          }
        `
      : css`
          padding: 15px;
        `}
`;
