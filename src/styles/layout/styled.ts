import { getTabVariantStyle } from "@/utils/test/variant";
import Box from "../../components/Box/Box";
import styled from "styled-components";
import { colors, shouldForwardProps } from "../../../src/index";

const shouldForwardProp = shouldForwardProps;

//*************Card Component************//
export const CardWrap = styled(Box).withConfig({
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

//*************Tabs Components************//
export const TabHandle = styled.button.withConfig({ shouldForwardProp })<{
  isCurrent: boolean;
  activeColor: string | any;
  variant: "line" | "solid";
  inActiveColor: string;
  disabled: boolean;
}>`
  font-family: "Poppins-Medium", sans-serif;
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
