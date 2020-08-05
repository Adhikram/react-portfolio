import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  NumberList,
  Current,
  SliderContainer,
  SlideWrapper,
  LinkWrap,
  Overlay,
  ContentWrap,
  CaseTitle,
  Button,
  SlickSwitch,
  Section,
  Spanner,
  Subtitle,
  HomeLink,
  TextLink
} from "../styles/Work.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Github
} from "../components/Socials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = ({ history }) => {
  const [carouselSet, setCarousel] = useState(false);
  const [currentSlide, setSlide] = useState(1);
  const [animateHome, setAnimeHome] = useState(false);
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    animateHome &&
      setTimeout(() => {
        history.push("/");
      }, 400);
  }, [animateHome, history]);

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 1000);
  }, [toCase, history]);

  if (!carouselSet) {
    setCarousel(true);
  }

  const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (old, next) => setSlide(next + 1)
  };
  

  const PreviousIcon = require("../assets/icons/left-arrow.png");
  const NextIcon = require("../assets/icons/right-arrow.png");

  const CaseOne = require("../assets/cases/unnamed.png");
  const CaseTwo = require("../assets/cases/adscope-hero.jpg");
  const CaseThree = require("../assets/cases/KBL.jpg");
  const CaseFour = require("../assets/cases/schoolforjustice-hero.jpg");
  

  return (
    <>
      <Wrapper>
        <HomeLink onClick={() => setAnimeHome(true)} animating={animateHome}>
          <TextLink>Home</TextLink>
        </HomeLink>
        <Section>
          <SliderContainer {...settings} ref={carousel} toCase={!!toCase}>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseOne} active={toCase === "/case"}>
                  <Overlay
                    // active={!!toCase}
                    // onMouseDown={e => setCoords(e.nativeEvent.x)}
                    // onMouseUp={e => handleCaseSwap(e.nativeEvent, "/case")}
                  >
                    <ContentWrap>
                      <CaseTitle>
                        Weather App
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>React & Open Weather Api</Subtitle>
                  
                      <a href="https://github.com/Adhikram/weather"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab','github']} pulse size="4x" style={{ color: 'red' }} /> </a>                      
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseTwo}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        CHATAP
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>React & Chatkit Api</Subtitle>
                      <Subtitle>A chatting app</Subtitle>
                    
                    <a href="https://github.com/Adhikram/CHAtap" target ="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab','github']} pulse size="4x" style={{ color: 'red' }} /> </a>

                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseThree}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        KBL
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>KON BANEGA LAKHPATI </Subtitle>
                      <Subtitle>A Project on JAVA ,Basic Gui using Swing and AWT library implementing a quiz game </Subtitle>
                   
                      <a href="https://github.com/Adhikram/KBL" target ="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab','github']} pulse size="4x" style={{ color: 'red' }} /> </a>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
  
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseFour}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Programming Library
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>C++ Codes</Subtitle>
                      <a href="https://github.com/Adhikram/Programming" target ="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab','github']} pulse size="4x" style={{ color: 'red' }} /> </a>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
          </SliderContainer>
          <NumberList navigating={!!toCase}>
            <SlickSwitch onClick={() => carousel.current.slickPrev()}>
              <Button src={PreviousIcon} alt="Previous case" />
            </SlickSwitch>
            <Current>
              <p>0{currentSlide} / 04</p>
            </Current>
            <SlickSwitch onClick={() => carousel.current.slickNext()}>
              <Button src={NextIcon} alt="Next case" />
            </SlickSwitch>
          </NumberList>
        </Section>
      </Wrapper>
    </>
  );
};

export default withRouter(Work);
