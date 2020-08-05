import styled, { css } from "styled-components";
import theme from "./theme";
import Slider from "react-slick";
import { loadIn, workToHome, workToCase } from "../animation/keyframes";

export const Wrapper = styled.main`
  opacity: 1;
  height: 100%;
  display: block;
  position: relative;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  background-color: ${theme.colors.red};
`;

export const HomeLink = styled.section`
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  height: 6%;
  margin: 0;
  z-index: 3;
  transition: background-color 0.1s ease-in-out, height 0.1s ease-in-out,
    top 0.2s ease-in-out;
  ${({ animating }) =>
    animating &&
    css`
      z-index: 3;
      animation: ${workToHome} 0.2s ease-in-out 0s 1;
      animation-fill-mode: forwards;
      > p {
        position: relative;
        color: ${theme.colors.blue};
      }
      background-color: ${theme.colors.blue};
    `}

  &:hover {
    background-color: ${theme.colors.blue};
    cursor: pointer;
    height: 8%;
  }

  &:hover > p {
    top: 50%;
    font-weight: 700;
  }
`;

export const TextLink = styled.p`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg);
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  transition: top 0.15s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
`;

export const Section = styled.section`
  padding: 50px;
  height: 100%;
  text-align: center;
  animation: ${loadIn} 0.2s ease-in 0s forwards;
`;

export const SliderContainer = styled(Slider)`
  z-index: ${({ toCase }) => (toCase ? 3 : 10)};
  display: block;
  position: absolute !important;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  transition: opacity 0.1s ease-in-out, height 0.3s ease-in-out;
  width: 100%;
  height: 100%;

  div {
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  &:hover {
    cursor: grab, -webkit-grab;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;

  &:active {
    cursor: -webkit-grabbing;
  }

  .draggable:hover {
    cursor: grab, -webkit-grab;
  }
`;

export const LinkWrap = styled.a`
  ${({ coverImage }) => `
    background-image: url(${coverImage});
  `}
  height: 70%;
  width: 75%;
  display: block;
  background-size: cover;
  background-position: center center;

  ${({ active }) =>
    active &&
    css`
      animation: ${workToCase} 0.3s ease-in-out 0.2s 1;
      animation-fill-mode: forwards;
    `}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
  color: white;
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    cursor: pointer;

    > div {
      background-color: rgba(0, 0, 0, 0.6);
    }
    div > div > h3 {
      color: ${theme.colors.red};
      cursor: pointer;
      opacity: 1;
      transform: skewX(-20deg);
    }
    div > div > h3 > span {
      background-color: ${theme.colors.red};
      transform: skewX(20deg) translate(-50%, -50%);
      width: 100%;
    }

    div > div > h4 {
      transform: skewX(-10deg);
    }
  }
`;

export const Spanner = styled.span`
  height: 15px;
  width: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  opacity: ${({ active }) => (active ? 0 : 1)};
`;

export const ContentWrap = styled.div`
  position: absolute;
  height: auto !important;
  top: 65%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -65%);
  font-style: italic;
`;

export const CaseTitle = styled.h3`
  font-size: 5em;
  font-weight: 700;
  margin-bottom: 15px;
  padding-bottom:4rem;
  position: relative;
  display: block;
  transition: color 0.1s ease-in-out, transform 0.1s ease-in-out;
`;

export const Subtitle = styled.h4`
  font-size: 1.7em;
  font-weight: 300;
  transition: transform 0.1s ease-in-out;
`;

export const NumberList = styled.article`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: ${({ navigating }) => (navigating ? 0 : 10)};
`;

export const SlickSwitch = styled.a`
  margin: 0 15px;
  display: inline-block;
  height: 1.1em;
  vertical-align: middle;
  transition: height 0.2s ease-in-out;

  &:hover {
    height: 1.3em;
    cursor: pointer;
  }
`;

export const Button = styled.img`
  height: 100%;
`;

export const Current = styled.h5`
  font-size: 1.1em;
  font-style: italic;
  display: inline-block;
  vertical-align: middle;
`;
