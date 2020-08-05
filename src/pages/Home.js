import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../assets/images/DSC02518-min.jpg";
import {
  Wrapper,
  Article,
  Title,
  Caption,
  Emphasis,
  CoverSheet,
  CoverImg,
  WorkLink,
  WorkText,
  AboutLink,
  AboutText
} from "../styles/Home.styles";

const Home = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        history.push("/work");
        setAnimateWork(false);
      }, 400);
    animateAbout &&
      setTimeout(() => {
        history.push("/about");
        setAnimateAbout(false);
      }, 400);
  }, [animateWork, animateAbout, history]);
  const background = require("../assets/images/DSC02518-min.jpg");
  return (
    <Wrapper>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <WorkText>Work</WorkText>
      </WorkLink>
      <AboutLink onClick={() => setAnimateAbout(true)} animating={animateAbout}>
        <AboutText>About</AboutText>
      </AboutLink>
      <Article>
        <Title>Hello There.</Title>
        <Caption>
          The name's <Emphasis>Adhikram Maitra</Emphasis>,Competitive Coder and Web Developer.
        </Caption>
      </Article>
      <Article>
        <CoverSheet />
        <CoverImg src={background} alt="Adhikram Cover Photo" />
      </Article>
    </Wrapper>
  );
};

export default withRouter(Home);
