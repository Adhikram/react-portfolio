import styled, { css } from "styled-components";
import theme from "./theme";
import {
  openSpan,
  loadImage,
  openNavigation,
  closeNavigation,
  disappear
} from "../animation/keyframes";
import { Bar1, Bar2, Bar3 } from "../components/NavButton";

export const Wrapper = styled.div`
  z-index: 4;
  right: 2%;
  top: 2%;
  position: fixed;
  opacity: 1;

  ${({ open, shouldAnimate, hasBackground }) =>
    !shouldAnimate
      ? css`
          right: 2%;
          top: 2%;
          width: 80px;
          height: 80px;

          &:hover {
            border-radius: 50px;
          }
        `
      : open
      ? css`
          animation: ${openNavigation(hasBackground)} 0.4s ease-in-out 0s 1
            normal forwards;
        `
      : css`
            right: 0px;
            top: 0px;
            border-radius: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.black}
            animation: ${closeNavigation} 0.4s ease-in-out 0.3s 1 normal forwards;      
          `}
`;

export const Body = styled.div`
  opacity: 0;
  display: none;
  z-index: 2;
  ${({ open, shouldAnimate }) =>
    open
      ? css`
          display: block;
          animation: ${loadImage} 0.3s ease-in-out 0.5s 1 normal forwards;
        `
      : css`
          ${shouldAnimate && `display: block;`}
          animation: ${disappear} 0.3s ease-in-out 0s 1 normal;
          animation-fill-mode: forwards;
        `}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: width 0.2s;
`;

export const Page = styled.h3`
  position: relative;

  &:hover {
    cursor: pointer;

    > a {
      cursor: pointer;
      opacity: 1;
      transform: skewX(-20deg);
      color: ${({ variant }) => {
        switch (variant) {
          case "home":
            return theme.colors.blue;
          case "work":
            return theme.colors.red;
          case "about":
            return theme.colors.green;
          case "contact":
            return theme.colors.peach;
          default:
            return theme.colors.white;
        }
      }};
    }

    span {
      z-index: 2;
      width: 100%;
      background-color: ${({ variant }) => {
        switch (variant) {
          case "home":
            return theme.colors.blue;
          case "work":
            return theme.colors.red;
          case "about":
            return theme.colors.green;
          case "contact":
            return theme.colors.peach;
          default:
            return theme.colors.white;
        }
      }};
    }
  }
`;

export const LinkTag = styled.a`
  color: white;
  display: block;
  opacity: 0.7;
  text-decoration: none;
  transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
`;

export const Spanner = styled.span`
  height: 20px;
  width: 0;
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;

  ${({ opening }) =>
    opening &&
    css`
      min-width: 100%;
      z-index: 8;
      animation: ${openSpan} 0.4s ease-in-out 0s 1;
    `}
`;

export const SocialContainer = styled.ul`
  position: absolute;
  bottom: 3%;
  right: 2%;
  list-style: none;
  opacity: 0;
  z-index: 1;
  display: ${({ open }) => (open ? "block" : "none")};
  ${({ open }) =>
    open
      ? css`
          display: block;
          animation: ${loadImage} 0.2s ease-in-out 0.7s 1 normal forwards;
        `
      : css`
          display: none;
        `}
`;

export const SocialItem = styled.li`
  float: left;
  height: 30px;
  padding: 0 10px;

  &:first-child {
    padding: 0;
    padding-right: 10px;
  }

  &:hover > a {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  transition: height 0.1s ease-in-out, background-color 0.1s ease-in-out, border-radius 0.1s ease-in-out;
  
  ${({ open, hasBackground }) =>
    !open
      ? `
			left:2%;		
			top:2%;
			z-index: 5;
			width: 75px;
      height: 75px;
      background-color: ${hasBackground ? theme.colors.black : `transparent`};
		`
      : `
			top: 2%;
			left: 5%;
			width: 50px;
      height: 50px;
		`}

  &:hover {
    cursor: pointer;
    background-color: ${({ open }) => !open && theme.colors.black};
    border-radius: 50%;

    ${Bar1}, ${Bar2}, ${Bar3} {
      width: 100% !important;
    }
  }
`;
