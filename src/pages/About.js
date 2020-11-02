import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  X,
  Article,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  Image,
  WorkLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";
// import ".../node_modules/font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);


const About = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        setAnimateWork(false);
        history.push("/work");
      }, 400);
    animateHome &&
      setTimeout(() => {
        setAnimateHome(false);
        history.push("/");
      }, 400);
  }, [animateWork, animateHome, history]);

  const canada = require("../assets/images/IMG_20191012_124520-min.jpg");

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
        <HomeText>Home</HomeText>
      </HomeLink>
      <Body>
        <ImageBackground backgroundImage={canada}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Who am i?</Heading>
            <Subtitle>
              So I'm Adhikram Maitra, an {" "}<X>Indian</X>. I've lived
              in Kolkata ,CoochBehar. Skilled in {" "}<X>C++, Data Structures, Algorithms</X>,
              . I'd like to think I'm a decent{" "} <X>Web Developer & Competitve Coder</X>, but I know I
              have much to learn, and I make it a mission to learn something new{" "}
              {" "}<X>every day</X>. I hope I get the chance to {" "}<X>grow</X> with{" "}
              <X>you</X>!
            </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EDUCATION</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>CoochBehar Government Engineering College</Role>
                <Time>06/2017-Present</Time>
              </RoleTime>
              <Client>Computer Science &amp; Engineering</Client>
              <DetailPoint>CGPA - 8.22</DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Nebadhui High School</Role>
                <Time>2014 - 2016</Time>
              </RoleTime>
              <Client>Science</Client>
              <DetailPoint>85.5%</DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Nebadhui High School</Role>
                <Time>2008 - 2016</Time>
              </RoleTime>
              <DetailPoint>82.57% </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>EXTRA THINGS</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Training and Placement Cell Representative, CSE2021</Role>
                <Time>2018</Time>
              </RoleTime>
              <Client></Client>
              <DetailPoint>
                
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Google Code Jam</Role>
                <Time>04/2020</Time>
              </RoleTime>
              <a href="https://drive.google.com/file/d/1-NKwyp_Np43OkwNs9PekWQpnf72bgxTU/view?usp=sharing" target ="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab','google']} spin size="lg" style={{ color: 'red' }} /> </a>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Google Hash Code</Role>
                <Time>02/2020</Time>
              </RoleTime>

              
              <a href="https://drive.google.com/file/d/1-TaRa1hB4fzXL_E2rR_Wd0aes68RV7jg/view?usp=sharing" target ="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','google']} spin size="lg" style={{ color: 'red' }} /></a>

              
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Google Kick Start Round H </Role>
                <Time>11/2019</Time>
              </RoleTime>              
              <a href="https://drive.google.com/file/d/1-H7L2VBDNP42Am_hT00ZXAMz3dnl8e8z/view?usp=sharing" target ="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','google']} spin size="lg" style={{ color: 'red' }} /></a>

              

            </DetailBlock>
          </ExperienceContainer>
        </Container>
      </Body>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <TextLink>Take a look at some of my work!</TextLink>
      </WorkLink>
    </Wrapper>
  );
};

export default withRouter(About);
