import { getTabVariantStyle } from "../../utils/variant";
import styled from "styled-components";
import { spacingValues } from "../../utils/spacing";
import { StackType } from "../../components/Stack/Stack";
import { BoxType } from "../../types";
import shouldForwardProp from "../../utils/is-prop-valid";
import { colors } from "../colors";

//************Box Components***************//
export const BoxSui = styled.div.withConfig({
  shouldForwardProp,
})<{
  padding?: BoxType["padding"];
  margin?: BoxType["margin"];
  centered?: BoxType["centered"];
  paddingTop?: BoxType["paddingTop"];
  paddingBottom?: BoxType["paddingBottom"];
  paddingLeft?: BoxType["paddingLeft"];
  paddingRight?: BoxType["paddingRight"];
  border?: BoxType["border"];
  marginTop?: BoxType["marginTop"];
  marginBottom?: BoxType["marginBottom"];
  marginLeft?: BoxType["marginLeft"];
  marginRight?: BoxType["marginRight"];
  direction?: BoxType["direction"];
  wrap?: BoxType["wrap"];
  spacing?: BoxType["spacing"];
}>`
  position: relative;
  display: flex;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  flex-direction: ${(props) => props.direction || "row"};
  padding-left: ${(props) => spacingValues(props.paddingLeft)};
  padding-right: ${(props) => spacingValues(props.paddingRight)};
  padding-top: ${(props) => spacingValues(props.paddingRight)};
  padding-bottom: ${(props) => spacingValues(props.paddingBottom)};
  margin-top: ${(props) => spacingValues(props.marginTop)};
  margin-right: ${(props) => spacingValues(props.marginRight)};
  margin-left: ${(props) => spacingValues(props.marginLeft)};
  margin-bottom: ${(props) => spacingValues(props.marginBottom)};
  justify-content: ${(props) => props.centered && "center"};
  align-items: ${(props) => props.centered && "center"};
  flex-wrap: ${(props) => props.wrap && "wrap"};
  gap: ${(props) => spacingValues(props.spacing)};
`;

//*************Card Component************//
export const CardSui = styled(BoxSui).withConfig({
  shouldForwardProp,
})<{
  centerContent?: boolean;
  backgroundcolor: string | any;
  borderColor: string | any;
  space: number | any;
  cardShadow: string | any;
}>`
  flex-direction: column;
  background: ${(props) => props.backgroundcolor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 11px;
  padding: ${(props) => props.padding || "16px"};
  gap: ${(props) => props.space || 16}px;
  width: auto;
  max-width: 100%;
  justify-content: center;
  align-items: ${(props) => props.centerContent && "center"};
  height: auto;
  box-shadow: 0 4px 8px ${(props) => props.cardShadow};

  @media screen and (max-width: 550px) {
    padding: 10px;
  }
`;

//*************Stack Components*************//
export const StackSui = styled(BoxSui).withConfig({
  shouldForwardProp,
})<{
  spacing?: StackType["spacing"];
  align?: StackType["align"];
  wrap: StackType["wrap"];
}>`
  flex-direction: ${(props) => (props.align === "vertical" ? "column" : "row")};
  height: 100%;
  gap: ${(props) => spacingValues(props.spacing)};
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 18px;
  flex-wrap: ${(props) => props.wrap && "wrap"};
`;

//*************Tabs Components************//
export const TabHandle = styled.button.withConfig({ shouldForwardProp })<{
  isCurrent: boolean;
  activeColor: string | any;
  variant: "line" | "solid";
  inActiveColor: string;
  disabled: boolean;
}>`
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  border: none;
  padding: 9px;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  ${(props) =>
    getTabVariantStyle(
      props.variant,
      props.isCurrent,
      props.activeColor,
      props.inActiveColor,
      props.disabled
    )}

  &:hover {
    border-bottom-color: ${(props) => !props.isCurrent && colors.neutral[300]};
  }
`;
