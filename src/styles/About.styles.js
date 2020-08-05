import styled, { css } from "styled-components";
import theme from "./theme";
import { toWork, toAbout, loadIn } from "../animation/keyframes";

export const Wrapper = styled.main`
  position: relative;
  height: fit-content;
  padding-bottom: 80px;
  width: 100%;
  transition: opacity 0.2s ease-in-out;
  display: block;
  background-color: ${theme.colors.green};
`;

export const HomeLink = styled.div`
  display: block;
  width: 4%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  margin: 0;
  z-index: 3;
  transition: background-color 0.1s ease-in-out, width 0.1s ease-in-out;

  &:hover {
    width: 6%;
  }

  ${({ animating }) =>
    animating &&
    css`
      z-index: 3;
      animation: ${toAbout} 0.2s ease-in-out 0s 1;
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
  }

  &:hover > p {
    left: 55%;
    font-weight: 700;
    color: ${theme.colors.white};
    text-shadow: none;
  }
`;

export const HomeText = styled.p`
  position: absolute;
  top: 50%;
  left: 35%;
  text-transform: uppercase;
  color: ${theme.colors.green};
  font-weight: 700;
  transition: left 0.1s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
  transform: translate(-50%, -50%) rotate(90deg);
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.6);

  @media screen and (max-width: ${theme.mediaQueries.width.s}) {
    color: ${theme.colors.white};
  }
`;

const Section = styled.section`
  animation: ${loadIn} 0.2s ease-in 0s forwards;
  display: block;
  padding: 0 6%;
  height: auto;
  width: 100%;
  position: relative;
`;

export const Container = styled.article`
  background-color: ${theme.colors.green};
  width: 100%;
  position: relative;
`;

export const Body = styled(Section)`
  background-color: ${theme.colors.darkGreen};
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Hero = styled.div`
  position: relative;
  display: flex;
  height: 95vh;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 15vh 8vw 10vh;
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  color: ${theme.colors.white};
  line-height: 1;
  width: 60%;
`;

export const Subtitle = styled.h5`
  width: 100%;
  color: ${theme.colors.white};
`;

export const X = styled.span`
  color: ${theme.colors.lightGreen};
`;

export const ImageBackground = styled.article`
  position: sticky;
  top: 0;
  left: 0;
  ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 25vw;
  box-shadow: -3px 13px 34px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${theme.mediaQueries.width.s}) {
    display: none;
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background: rgb(57, 223, 147);
  background: linear-gradient(
    90deg,
    rgba(57, 223, 147, 0.5) 0%,
    rgba(45, 71, 57, 0.5) 100%
  );
`;

export const ExperienceContainer = styled.div`
  background-color: ${theme.colors.darkGreen};
  padding: 8vh 10vw 35px 10vw;
  width: 100%;
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.24);
`;

export const ExperienceTitle = styled.h4`
  color: ${theme.colors.white};
  margin-bottom: 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${theme.colors.white};
`;

export const DetailBlock = styled.div`
  margin: 25px 0 50px;
`;

export const RoleTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MiniTitle = styled.h5`
  color: ${theme.colors.white};
  display: inline;
`;

export const Role = styled(MiniTitle)``;

export const Time = styled(MiniTitle)``;

export const Client = styled.p`
  color: ${theme.colors.white};
  font-size: 0.8rem;
  font-style: italic;
  text-transform: uppercase;
`;

export const DetailPoint = styled.p`
  color: ${theme.colors.white};
  line-height: 2;
  width: 80%;
  margin-top: 16px;
  margin-bottom: 16px;
  color: white;
  font-size: 1em;
`;

export const WorkLink = styled(Section)`
  text-align: center;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  z-index: 5;
  transition: background-color 0.1s ease-in-out, height 0.3s ease-in-out,
    top 0.3s ease-in-out;
  ${({ animating }) =>
    animating &&
    css`
      z-index: 3;
      animation: ${toWork} 0.3s ease-in-out 0s 1;
      animation-fill-mode: forwards;
      > p {
        position: relative;
        color: ${theme.colors.red};
      }
      background-color: ${theme.colors.red};
    `}

  &:hover {
    background-color: ${theme.colors.red};
    cursor: pointer;
  }

  &:hover > p {
    top: 50%;
    font-weight: 700;
  }
`;

export const TextLink = styled.p`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  transition: top 0.1s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
`;
