import styled, { css } from "styled-components";
import theme from "./theme";
import { caseToWork, disappear, toWork } from "../animation/keyframes";

export const BackButton = styled.div`
  z-index: 3;
  left: 2%;
  padding: 19px;
  top: 2%;
  height: 75px;
  width: 75px;
  position: fixed;
  float: left;
  transition: background-color 0.1s ease-in-out, border-radius 0.1s ease-in-out,
    opacity 0.3s ease-in-out;
  ${({ toBack }) =>
    toBack &&
    css`
      z-index: 10;
      animation: ${caseToWork} 0.2s ease-in-out 0s 1;
      animation-fill-mode: forwards;

      > img {
        animation: ${disappear} 0.2s ease-in-out 0s 1;
        animation-fill-mode: forwards;
      }
    `}
  background-color: ${({ hasBackground }) =>
    hasBackground && theme.colors.black};

  

  &:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: ${theme.colors.red} !important;
  }
`;

export const BackArrow = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;

const ContentWrapper = styled.section`
  padding: 80px 17%;
  height: auto;
`;

const List = styled.ul`
  line-height: 35px;
  padding-left: 50px;
  text-indent: 25px;
  font-size: 1.2em;
  margin-bottom: 25px;
  list-style: disc !important;
`;

export const OrderedList = styled.ol`
  line-height: 35px;
  padding-left: 50px;
  text-indent: 25px;
  font-size: 1.2em;
  margin-bottom: 25px;
`;

export const Subheading = styled.h4`
  font-size: 1.8em;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 50px;
`;

export const TinyHeading = styled.h5`
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 800;
  margin: 10px 0;
`;

export const Anchor = styled.a`
  font-size: 1.3em;
  text-transform: capitalize;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.red};
  line-height: 35px;
  margin-bottom: 25px;
  z-index: 3;
  position: relative;
`;

export const CaseWrapper = styled.main`
  position: relative;
  height: auto;
  width: 100%;
  padding-bottom: 80px;
  opacity: 1;
`;

export const Hero = styled.section`
  height: 100vh;
  position: relative;
  ${({ image }) => `background-image: url(${image});`}
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleTab = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 52%;
  position: absolute;
  bottom: 12%;
  color: white;
  padding: 25px 50px 25px 75px;
`;

export const ClientHeader = styled.h3`
  font-size: 0.69em;
  text-transform: capitalize;
`;

export const Title = styled.h1`
  font-size: 4.65em;
  width: 80%;
  text-transform: uppercase;
`;

export const TechniqueTitle = styled.h4`
  font-size: 1.1em;
`;

export const Introduction = styled(ContentWrapper)``;

export const QuickInfo = styled.div`
  padding: 70px 0;
  display: flex;
`;

export const InfoText = styled.div`
  width: 70%;
  vertical-align: bottom;
`;

export const InfoTitle = styled.h1`
  font-size: 6.9em;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const InfoClient = styled.h3`
  text-transform: uppercase;
  font-size: 0.9em;
`;

export const InfoSubtitle = styled.h2`
  margin-bottom: 40px;
  font-size: 1.45em;
`;

export const InfoListContainer = styled.div`
  width: 30%;
  float: right;
  position: relative;
`;

export const InfoList = styled(List)`
  top: 10em;
  position: absolute;
  right: 0;
`;

export const InfoItem = styled.li`
  margin-bottom: 50px;

  &:nth-child(3) {
    margin-bottom: 0;
  }
`;

export const InfoSubject = styled.h4`
  font-size: 1.1em;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const InfoContent = styled.h5`
  font-size: 1.15em;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 35px;
  margin-bottom: 25px;
  text-indent: 50px;
`;

export const Problem = styled.article`
  padding-top: 70px;
`;

export const Process = styled(ContentWrapper)`
  background-color: black;
  color: ${theme.colors.white};
`;

const CaseImages = styled.div`
  width: 100%;
  display: block;
  position: relative;
  margin: 75px auto 75px;

  > img {
    position: relative;
    max-width: 100%;
    text-align: center;
  }
`;

export const CaseImagesLeft = styled(CaseImages)`
  text-align: left;
`;

export const CaseImagesCenter = styled(CaseImages)`
  text-align: center;

  > img {
    vertical-align: middle;
    display: inline-block;
    max-width: 45%;
    margin-left: 1.25%;
    margin-right: 1.25%;
  }
`;

export const CaseImageCenterLarge = styled(CaseImages)`
  text-align: center;
  margin: 25px auto 50px;

  > img {
    width: 100%;
  }
`;

export const CaseImagesRight = styled(CaseImages)`
  text-align: right;
`;

export const Results = styled(ContentWrapper)`
  z-index: 3;
`;

export const NextCase = styled.div`
  width: 100%;
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

    > p {
      color: ${theme.colors.white};
      top: 50%;
      font-weight: 600;

      > span {
        font-weight: 900;
      }
    }
  }
`;

export const NextLink = styled.p`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: capitalize;
  color: black;
  font-weight: 300;
  transition: top 0.1s ease-in-out, color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out;
`;

export const NextCaseTitle = styled.span`
  font-weight: 700;
`;
