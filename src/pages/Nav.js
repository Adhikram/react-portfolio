import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Spanner
} from "../styles/Navigation.styles";
import { SocialItem } from "../styles/Navigation.styles";
import {
  Instagram,
  Facebook,
  Github,
  LinkedIn
} from "../components/Socials";
import { withRouter } from "react-router";
import NavButton from "../components/NavButton";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "about":
            history.push("/about");
            setState(false);
            setLink("");
            break;
          case "work":
            history.push("/work");
            setState(false);
            setLink("");
            break;
          case "contact":
            history.push("/contact");
            setState(false);
            setLink("");
            break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 400);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 600);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = text => {
    setTimeout(() => setShouldAnimate(false), 300);
    setLink(text);
  };

  return (
    <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
      <Container
        open={isOn}
        onClick={closeHandler}
        hasBackground={hasBackground}
      >
        <NavButton open={isOn} />
      </Container>
      <Body open={isOn} shouldAnimate={shouldAnimate}>
        <Page variant="home" onClick={() => setLinkHandler("home")}>
          <LinkTag>Home</LinkTag>
          <Spanner opening={linking === "home"} />
        </Page>
        <Page variant="about" onClick={() => setLinkHandler("about")}>
          <LinkTag>About</LinkTag>
          <Spanner opening={linking === "about"} />
        </Page>
        <Page variant="work" onClick={() => setLinkHandler("work")}>
          <LinkTag>Work</LinkTag>
          <Spanner opening={linking === "work"} />
        </Page>
        <Page variant="contact" onClick={() => setLinkHandler("contact")}>
          <LinkTag>Contact</LinkTag>
          <Spanner opening={linking === "contact"} />
        </Page>
      </Body>
      <SocialContainer open={isOn}>
        <SocialItem>
          <Facebook />
        </SocialItem>
        <SocialItem>
          <LinkedIn />
        </SocialItem>
        <SocialItem>
          <Instagram />
        </SocialItem>
        <SocialItem>
          <Github />
        </SocialItem>
      </SocialContainer>
    </Wrapper>
  );
};

export default withRouter(NavigationMenu);
