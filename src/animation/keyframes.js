import { keyframes } from "styled-components";
import theme from "../styles/theme";

export const toWork = keyframes`
  0% {
    height: 80px;
  }

  100% {
    height: 100%;
  }
`;

export const toAbout = keyframes`
  0% {
    width: 8%;
  }

  100% {
    width: 100%;
  }
`;

export const loadIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const workToHome = keyframes`
  0% {
    height: 100px;
  }

  100% {
    height: 100%;
  }
`;

export const loadHeaders = keyframes`
  0% {
    left: 100%;
  }

  100% {
    left: 10%;
  }
`;

export const loadImage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const loadOverlay = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
`;

export const loadHome = keyframes`
  0% {
    h2 {
      left: 100%;
    }

    h5 {
      left: 100%;
    }
    img {
      opacity: 0;
    }
  }

  60% {
    h2 {
      left: 10%;
    }
  }
  65% {
    h5 {
      left: 10%;
    }
  }
  80% {
    img {
      opacity: 1;
    }
  }
`;

export const openSpan = keyframes`
  0% {
    height:20px;
    width: 100%;
  }

  100% {
    height: 3000%;
    width: 2000%;
  }
`;

export const openNavigation = hasBackground => keyframes`
	0%{
    background-color: ${hasBackground ? theme.colors.black : `transparent`};
		right: 2%;
    top: 2%;
		width: 80px;
		height: 80px;
    border-radius: 0;
	}
	50% {
		border-radius: 25px;
	}
	100% {
    background-color: ${theme.colors.black};
    right: 0px;
    top:0px;
		border-radius: 0;
		width: 100%;
		height: 100%;
	}
`;

export const closeNavigation = keyframes`
  0%{
		right: 0px;
    top:0px;
		border-radius: 0;
		width: 100%;
		height: 100%;
    background-color: ${theme.colors.black};
	}
	50% {
		border-radius: 50px;
	}
	100% {
    right: 2%;
    top: 2%;
		width: 80px;
		height: 80px;
    border-radius: 0;
    background-color: transparent;
	}
`;

export const disappear = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const workToCase = keyframes`
  0% {
    height: 70%;
    width: 75%;
    z-index: 1;
  }

  100% {
    z-index: 10;
    height: 101%;
    width: 101%;
  }
`;

export const caseToWork = keyframes`
  0% {
    left: 2%;
    border-radius: 50%;
    top: 2%;
    height: 75px;
    width: 75px;
    background-color: ${theme.colors.red};
  }
  50% {
    border-radius: 0;
  }
  100% {
    left: 0;
    border-radius: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.red};
  }
`;
