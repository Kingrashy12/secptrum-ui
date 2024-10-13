import { css, styled } from "styled-chroma";
import { IStyleBox, IStyleStack, IStyleTabHandle } from "../../types/istyle";
import { spacingValues } from "../../utils/spacing";
import { CardProps } from "../../types/sui";
import { cardStyles, getTabVariantStyle } from "../../utils/layout";
import { colors } from "../colors";

//************Box Components***************//
export const BoxSui = styled<IStyleBox>("div")`
  display: flex;
  position: relative;
  flex-direction: ${(props) => props.direction || ""};
  ${(props) =>
    props.fullWidth || props.width
      ? css`
          width: ${props.fullWidth ? "100%" : props.width};
        `
      : ""}
  ${(props) =>
    props.padding
      ? css`
          padding: ${props.padding};
        `
      : ""};
  ${(props) =>
    props.margin
      ? css`
          margin: ${props.margin};
        `
      : ""}
  ${(props) =>
    props.border
      ? css`
          border: ${props.border};
        `
      : ""}
  ${(props) =>
    props.paddingLeft
      ? css`
          padding-left: ${spacingValues(props.paddingLeft)};
        `
      : ""}
  ${(props) =>
    props.paddingRight
      ? css`
          padding-right: ${spacingValues(props.paddingRight)};
        `
      : ""}
  ${(props) =>
    props.paddingTop
      ? css`
          padding-top: ${spacingValues(props.paddingTop)};
        `
      : ""}
  ${(props) =>
    props.paddingBottom
      ? css`
          padding-bottom: ${spacingValues(props.paddingBottom)};
        `
      : ""}
  ${(props) =>
    props.marginTop
      ? css`
          margin-top: ${spacingValues(props.marginTop)};
        `
      : ""}
  ${(props) =>
    props.marginRight
      ? css`
          margin-right: ${spacingValues(props.marginRight)};
        `
      : ""}
  ${(props) =>
    props.marginLeft
      ? css`
          margin-left: ${spacingValues(props.marginLeft)};
        `
      : ""}
  ${(props) =>
    props.marginBottom
      ? css`
          margin-bottom: ${spacingValues(props.marginBottom)};
        `
      : ""}
  ${(props) =>
    props.centered
      ? css`
          align-items: center;
        `
      : ""}
  ${(props) =>
    props.wrap
      ? css`
          flex-wrap: wrap;
        `
      : ""}
  ${(props) =>
    props.spacing
      ? css`
          gap: ${spacingValues(props.spacing)};
        `
      : ""}
`;
BoxSui.displayName = "BoxSui";

//*************Stack Components*************//
export const StackSui = styled<IStyleStack>(BoxSui)`
  flex-direction: ${(props) => (props.align === "vertical" ? "column" : "row")};
  height: 100%;
  gap: ${(props) => spacingValues(props.spacing)};
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: ${(props) => props.padding || "18px"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
StackSui.displayName = "StackSui";

//*************Card Components*************//
export const CardSui = styled<CardProps>(BoxSui)`
  ${(props) =>
    props.centerContent
      ? css`
          align-items: center;
          justify-content: center;
        `
      : ""}
  border-radius: 10px;
  padding: 20px;
  gap: ${(props) => props.space || "16px"};
  background-color: ${({ background, mode }) =>
    background || cardStyles(mode).background};
  box-shadow: ${({ boxShadow, mode }) =>
    boxShadow || cardStyles(mode).boxShadow};
  border: ${({ mode }) => cardStyles(mode).border};
  width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width || "auto")};
`;
CardSui.displayName = "CardSui";

//*************Tabs Components************//
export const TabHandle = styled<IStyleTabHandle>("button")`
  font-family: "Poppins-Medium", sans-serif;
  font-size: 0.87rem;
  line-height: 1.2rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 30px;
  border: none;
  border-top: none;
  padding: 9px;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  gap: 7px;

  ${(props) => {
    const style = getTabVariantStyle(
      props.variant,
      props.iscurrent,
      props.activeColor,
      props.inactivecolor,
      props.disabled
    );
    return css`
      background: ${style.background};
      border-radius: ${style["border-radius"]};
      color: ${style.color};
      cursor: ${style.cursor};
      pointer-events: ${style["pointer-events"]};
      opacity: ${style.opacity};
      filter: ${style.filter};
      border-bottom-width: ${style["border-bottom-width"]};
      border-bottom-color: ${style["border-bottom-color"]};
      border-bottom-style: ${style["border-bottom-style"]};
    `;
  }}

  &:hover {
    ${(props) =>
      !props.iscurrent
        ? css`
            border-bottom-color: ${colors.gray[300]};
          `
        : ""}
  }
`;
TabHandle.displayName = "TabHandleSui";
