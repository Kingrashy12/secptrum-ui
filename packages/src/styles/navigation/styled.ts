import { colors, css, styled } from "styled-chroma";
import { getBottomNavVariant } from "../../utils/navigation";
import Box from "../../components/Box/Box";
import { BoxType } from "../../types/sui";

type IStyledBottomNav = {
  variant: "rounded" | "full" | "wide";
  background?: string;
};

export const BottomNavSui = styled<IStyledBottomNav>("div")`
  position: fixed;
  height: auto;
  background-color: ${(props) => props.background || "#000"};
  display: none;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.neutral[800]};
  border-radius: ${(props) =>
    getBottomNavVariant(props.variant)["border-radius"]};
  padding: ${(props) => getBottomNavVariant(props.variant).padding};
  width: ${(props) => getBottomNavVariant(props.variant).width};
  bottom: ${(props) => getBottomNavVariant(props.variant).bottom};
  padding-left: ${(props) =>
    props.variant === "rounded" ? "0.9rem" : "0.5rem"};
  padding-right: ${(props) =>
    props.variant === "rounded" ? "0.9rem" : "0.5rem"};
  padding-top: 0.6rem;

  @media (max-width: 550px) {
    display: flex;
  }
`;
BottomNavSui.displayName = "BottomNavSui";

interface IStyledBottomNavTab extends BoxType {
  color?: string;
  disabled?: boolean;
}

export const BottomNavTabSui = styled<IStyledBottomNavTab>(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.1rem;
  cursor: pointer;
  color: ${(props) => props.color ?? ""};

  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
          opacity: 0.7;
        `
      : ""}

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    font-family: inherit;
    user-select: none;
  }
`;
BottomNavTabSui.displayName = "BottomNavTabSui";
