import { colors, keyframes, styled } from "secptrum-ui";
import { fonts } from "./global";

const mark = keyframes`
from {
  width: 0;
}
to {
  width: 100%;
}
`;

//TODO: Animate the Text

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  width: 100%;
`;

// Top Section
export const TopSection = styled("header")`
  width: 100%;
  height: 60px;
  padding: 12px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    display: none;
  }

  @media screen and (max-width: 550px) {
    padding: 4px 6px;

    .menu {
      display: flex;
      margin-right: 6px;
    }
  }
`;

export const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 550px) {
    display: none !important;
  }
`;

export const Divider = styled<{ type: "long" | "short"; height?: string }>(
  "div"
)`
  background: ${(props) => props.theme.colors?.divider};
  width: ${(props) => (props.type === "long" ? "100%" : "1px")};
  height: ${(props) => props.height || "auto"};
`;

export const Secptrum = styled("p")`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${fonts.nunito};
  font-weight: 700;
  font-size: 22px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`;

export const LinkItem = styled("p")`
  font-family: ${fonts.poppins};
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors?.text};

  &:hover {
    color: ${colors.blue[500]};
    cursor: pointer;
  }
`;

// Hero Section
export const HeroSection = styled("section")`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors?.hero_gradient};
  overflow: hidden;
  flex-direction: column;
  padding: 24px 32px;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 12px 16px;
  }
`;

export const HeroContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: auto;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -0.025em;
    font-family: ${fonts.jakarta};
    color: ${(props) => props.theme.colors?.text};
    text-align: center;
    max-width: 700px;

    @media screen and (max-width: 550px) {
      font-size: 2rem;
      line-height: 45px;
      width: 100%;
    }

    .marker-underline {
      position: relative;
      display: inline-block;
      color: inherit;
    }

    .marker-underline::before {
      content: "";
      position: absolute !important;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.3em;
      width: 100%;
      height: 10px;
      background: linear-gradient(
        135deg,
        rgba(0, 121, 191, 0.5),
        rgba(0, 121, 191, 0.8)
      );
      border-radius: 2px;
      /* z-index: -1; */
      transform: translateY(0.1em);
      animation: ${mark} 0.5s ease-in-out forwards 0.5s;
      transition: all 0.5s ease-in-out;
    }
  }

  span {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 400;
    font-family: ${fonts.inter};
    color: ${(props) => props.theme.colors?.body};
    text-align: center;
    white-space: pre-line;
    margin-top: 6px;
    display: inline-block;
    max-width: 500px;

    @media screen and (max-width: 550px) {
      width: 100%;
    }
  }
`;
