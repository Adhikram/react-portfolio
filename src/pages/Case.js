import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  TitleTab,
  Title,
  TechniqueTitle,
  Introduction,
  InfoTitle,
  InfoText,
  QuickInfo,
  InfoClient,
  Paragraph,
  InfoList,
  InfoListContainer,
  InfoItem,
  InfoSubject,
  InfoContent,
  InfoSubtitle,
  ClientHeader,
  CaseWrapper,
  Problem,
  Process,
  Results,
  NextCase,
  Anchor,
  Subheading,
  TinyHeading,
  CaseImagesCenter,
  CaseImagesLeft,
  NextLink,
  NextCaseTitle,
  BackButton,
  BackArrow
} from "../styles/Case.styles";
import { withRouter } from "react-router";

// Has a scroll function to detect if the body is a black background and therefore
// Has to switch the backbutton to a black background

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      introTop: this.introRef.current.getBoundingClientRect().top - 40
    });
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/work");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }

  componentWillUnmount() {
    if (this.state.toBack) {
      window.scrollTo(0, 0);
    }
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const introTop = this.introRef.current.getBoundingClientRect().top;
    if (introTop < 40) {
      this.setState({
        hasBackground: true
      });
      this.props.setNavBackground(true);
    } else {
      this.setState({
        hasBackground: false
      });
      this.props.setNavBackground(false);
    }
  };

  render() {
    const hero = require("../assets/cases/case-1-shuttershare/shuttershare-hero.jpg");
    const backButton = require("../assets/icons/back.png");
    return (
      <Fragment>
        <BackButton
          onClick={() => this.setState({ toBack: true, hasBackground: false })}
          toBack={this.state.toBack}
          hasBackground={this.state.hasBackground}
        >
          <BackArrow src={backButton} alt="Back to work" />
        </BackButton>
        <CaseWrapper>
          <Hero image={hero}>
            <div>
              <TitleTab>
                <ClientHeader>Northumbria University</ClientHeader>
                <Title>Shutter Share</Title>
                <TechniqueTitle>
                  A camera can be expensive. To get your money's worth,
                  ShutterShare allows the user to rent it out to other
                  photographers in need
                </TechniqueTitle>
              </TitleTab>
            </div>
          </Hero>
          <Introduction ref={this.introRef}>
            <QuickInfo>
              <InfoText>
                <InfoClient>Northumbria University</InfoClient>
                <InfoTitle>Shutter Share</InfoTitle>
                <InfoSubtitle>
                  A camera can be expensive. To get your money's worth,
                  ShutterShare allows the user to rent it out to other
                  photographers in need
                </InfoSubtitle>
                <Paragraph>
                  As part of a person-to-person assignment for university,
                  ShutterShare was created as an experiment to see what it's
                  like to set up a marketplace run by users. Drawing inspiration
                  from powerful examples such as Airbnb and Amazon, a platform
                  was created that could also play with design and emphasize
                  visual presentation, through the use of photography. The
                  project comes with a functional admin system, messaging and
                  sharing functionality, and allows users to rent out and post
                  an advert, in addition to secure logging in.
                </Paragraph>
                <Paragraph>
                  I grouped up with four other individuals, together tackling a
                  specific section while adhering to designs built to sustain
                  the full use of the site and a database that would sustain the
                  needs of the user experience. The prototype makes use of a
                  mock payment system and user-to-system and user-to-user
                  response mechanism to get camera owners and renters paired up
                  to discuss the terms of renting one out, and system responses
                  that provides evidence of actions taken through the system.
                </Paragraph>
              </InfoText>
              <InfoListContainer>
                <InfoList>
                  <InfoItem>
                    <InfoSubject>Project Client</InfoSubject>
                    <InfoContent>Northumbria University</InfoContent>
                  </InfoItem>
                  <InfoItem>
                    <InfoSubject>Focus</InfoSubject>
                    <InfoContent>Back-end</InfoContent>
                  </InfoItem>
                  <InfoItem>
                    <InfoSubject>Date</InfoSubject>
                    <InfoContent>February 2017</InfoContent>
                  </InfoItem>
                </InfoList>
              </InfoListContainer>
            </QuickInfo>
            <Problem>
              <Subheading>Problem</Subheading>
              <Paragraph>
                Most of the group members were not comfortable with the back-end
                development aspect of this website, which would mean that any
                back-end they'd have to do would have to go through me.
                Additionally, the project itself is doable for a high mark, but
                it's important to keep everyone on board on that goal.
              </Paragraph>
              <Paragraph>
                Although each individual had their own section to manage, we
                were to work together and agree on common designs and user
                experiences that both incorporated their list of features and
                tools, as well as sustaining those of the others.
              </Paragraph>
              <Paragraph>
                Additionally, no one has any API experimentation, so
                demonstrating skills in using them would be extremely difficult.
              </Paragraph>
            </Problem>
          </Introduction>
          <Process>
            <Subheading>Process</Subheading>
            <Paragraph>
              We started off asking each other what we wanted out of this
              project. All of us agreed a fully functioning service that looks
              as great as it works, and aimed for an easy top score.
            </Paragraph>
            <TinyHeading>Site Map &amp; Functionality</TinyHeading>
            <Paragraph>
              After our sections were divided, we created user journey's to
              illustrate how a user would accomplish tasks, and how it would
              flow.
            </Paragraph>
            <CaseImagesCenter>
              <img src="resources/img/ss/left-map.jpg" />
              <img src="resources/img/ss/right-map.jpg" />
            </CaseImagesCenter>
            <CaseImagesCenter>
              <img src="resources/img/ss/groupsite.PNG" />
              <img src="resources/img/ss/MindMap.PNG" />
            </CaseImagesCenter>
            <Paragraph>
              These were amended based on how it would structure together.
            </Paragraph>
            <TinyHeading>Branding</TinyHeading>
            <Paragraph>
              The overall theme of the site was to mimic camera brands, so we
              selected a shade of yellow and complemented it with a shade of
              blue.
            </Paragraph>
            <CaseImagesCenter>
              <img src="resources/img/ss/Colorscheme.png" />
              <img src="resources/img/ss/Font.png" />
            </CaseImagesCenter>
            <Paragraph>
              Alongside these details, we felt like creating a platform that
              could inspire users to rent out a camera, and we made the decision
              to add a background with a similar color scheme as our branding
              guidelines.
            </Paragraph>
            <CaseImagesCenter>
              <img src="resources/img/ss/hero-image-1.jpg" />
              <img src="resources/img/ss/shutterstock_337780691.jpg" />
            </CaseImagesCenter>
            <CaseImagesCenter>
              <img src="resources/img/ss/hero-image-2.jpg" />
              <img src="resources/img/ss/hero-image-3.jpg" />
            </CaseImagesCenter>
            <TinyHeading>Design</TinyHeading>
            <Paragraph>
              After setting up all the tool we decided to create our pages based
              on the site map and functionality list that we have. My section
              was messaging, and so I took major inspiration off of emailing
              clients, providing an inbox and a messaging inbox, with the
              ability to attach files and photos, customize one's email, and
              also receive system notifications. My designs below:
            </Paragraph>
            <CaseImagesLeft>
              <img src="resources/img/ss/inbox.png" />
            </CaseImagesLeft>
            <CaseImagesLeft>
              <img src="resources/img/ss/openemail.png" />
            </CaseImagesLeft>
            <Paragraph>
              The decision to take an email client as a model is to create a
              serious atmosphere when it comes to organizing the renting of a
              user's camera, so as to give users an incentive to be more
              professional in their approach. In addition to the email client, I
              designed the advert page as well.
            </Paragraph>
            <CaseImagesLeft>
              <img src="resources/img/ss/new.png" />
            </CaseImagesLeft>
            <CaseImagesLeft>
              <img src="resources/img/ss/reply.png" />
            </CaseImagesLeft>
            <CaseImagesLeft>
              <img src="resources/img/ss/productpage.jpg" />
            </CaseImagesLeft>
            <Paragraph>
              In addition to the designs, I set up a database after reviewing
              the following diagram with the team, which was based off of their
              designs, and their functionality. This is not the final, but was a
              starting point.
            </Paragraph>
            <CaseImagesLeft>
              <img src="resources/img/ss/database.png" />
            </CaseImagesLeft>
            <Paragraph>
              After the designs were completed, we began coding, and setting up
              the necessary system functions. Despite some issues regarding
              individual's level of commitment, I took charge of the entire
              project, directly overseeing one of our colleagues and taking over
              to finish the work of another, and got it to a prototype-state
              completion level.
            </Paragraph>
            <CaseImagesLeft>
              <img src="resources/img/ss/inboxlive.png" />
            </CaseImagesLeft>
            <Paragraph>
              The payment model is a mimic that takes proper credit card details
              but does not process any of the information. It uses an internal
              credit system that each new user has, which is 1000 upon logging
              in. Processing the payment would do the according math, taking
              numbers off of the user who rents and giving it to the user who
              rents out.
            </Paragraph>
          </Process>
          <Results>
            <Subheading>Result</Subheading>
            <Paragraph>
              With regards to the design, there are some clunky issues with the
              front-end decor. I believe the advert page prevents using a lot of
              available space despite organizing the sections very well. Despite
              being a prototype, the background image can take away from the
              adverts being promoted as well, so potentially taking a different
              approach to the front end design would've potentially worked
              better.
            </Paragraph>
            <Paragraph>
              The messaging service would've been much better done as a
              chatting-type interface, mainly due to the design preventing a
              relationship to be instigated with the users. The friendliness
              approach would've made the usage of the system much more friendly.
              A source I'd refer to is the likes of Whatsapp or Messenger's
              interfaces.
            </Paragraph>
            <Paragraph>
              Finally, the project served its purpose, but in moving forward,
              this prototype would undergo more changes to easing its user
              experience to make renting things a lot more pleasing. In
              addition, I feel the platform has room to rent any object out, so
              the adaptation to perhaps expanding the software to allow more
              types of rentals. Regardless, it suits its purpose, but it could
              be much more efficient.
            </Paragraph>
            <Anchor href="http://unn-w13020720.newnumyspace.co.uk/shuttershare/index.php">
              View Live Here
            </Anchor>
          </Results>
          <NextCase
            onClick={() => this.setState({ animateCase: "/case" })}
            animating={!!this.state.animateCase}
          >
            <NextLink>
              Next: <NextCaseTitle>Adscope</NextCaseTitle>
            </NextLink>
          </NextCase>
        </CaseWrapper>
      </Fragment>
    );
  }
}

export default withRouter(Case);
