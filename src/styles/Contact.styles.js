import styled from "styled-components";
import { MediumHead } from "./fonts";
import theme from "./theme";

export const Wrapper = styled.main`
  position: relative;
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.peach};
`;

export const Container = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled(MediumHead)`
  display: block;
  opacity: 0.3;
  font-size: 3em;
  text-align: center;
`;
