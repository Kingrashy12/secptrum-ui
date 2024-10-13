/* eslint-disable @typescript-eslint/no-explicit-any */
import { DivProps } from "styled-chroma";
import {
  BoxType,
  FloatProps,
  StackType,
  ToastOptionsType,
  ToastPositionType,
  ToastVariant,
} from "./sui";
import { ModalPanelType } from "../components/modal/ModalPanel";

/**
 * Interface for styling Box component
 */
export interface IStyleBox {
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
  fullWidth?: BoxType["fullWidth"];
  width?: BoxType["width"];
}

/**
 * Interface for styling Stack component, extends IStyleBox
 */
export interface IStyleStack extends IStyleBox {
  spacing: StackType["spacing"];
  align: StackType["align"];
  wrap?: StackType["wrap"];
}

/**
 * Interface for styling Drop component
 */
export interface IStyleDrop extends DivProps {
  open: boolean;
  centerContent: boolean;
  backgroundColor: string;
  glassEffect: number | any;
}

/**
 * Interface for styling Checkbox component
 */
export interface IStyleCheckbox {
  rounded: boolean | any;
  size: number;
  disabled: boolean | any;
  borderColor: string | any;
  checked: boolean;
}

/**
 * Interface for styling Checked component
 */
export interface IStyleChecked {
  color: string;
  rounded: boolean | any;
  size: number;
}

/**
 * Interface for styling Fab (Floating Action Button) component
 */
export interface IStyleFab {
  backgroundcolor: string | any;
  position: ToastPositionType | "bottom-center" | "top-center";
  disabled: boolean | any;
  colorScheme: FloatProps["colorScheme"];
  variant: FloatProps["variant"];
  size: FloatProps["size"];
  moveOnScroll: FloatProps["moveOnScroll"];
}

/**
 * Interface for styling ModalPanel component
 */
export interface IStyleModalPanel {
  size: ModalPanelType["size"];
  transition: ModalPanelType["transition"];
  backgroundColor: string | any;
  align: ModalPanelType["align"];
  spacing: ModalPanelType["spacing"];
  isVisible: boolean;
}

/**
 * Interface for styling ModalFooter component
 */
export interface IStyleModalFooter {
  space?: number;
  position?: "right" | "left";
}

/**
 * Interface for styling Toast component
 */
export interface IStyleToast extends DivProps {
  position: ToastPositionType;
  isVisible: boolean;
  transition: ToastOptionsType["transition"];
}

/**
 * Interface for styling ToastCloseIcon component
 */
export interface IStyleToastCloseIcon extends DivProps {
  type: ToastVariant;
}

/**
 * Interface for styling Switch component
 */
export interface IStyleSwitch {
  width: string;
  height: string;
  checked: boolean;
  checkedColor: string;
  color: string;
  disabled: boolean | any;
}

/**
 * Interface for styling SwitchHandle component
 */
export interface IStyleSwitchHandle {
  height: string;
  checked: boolean;
  switchWidth: string;
}

/**
 * Interface for styling TabList component
 */

export interface IStyleTabList {
  variant: "line" | "solid" | any;
  backgroundcolor: string | any;
  fullWidth: boolean | any;
  lineColor: string | any;
}

/**
 * Interface for styling TabHandle component
 */

export interface IStyleTabHandle {
  iscurrent: boolean;
  activeColor: string | any;
  variant: "line" | "solid";
  inactivecolor: string;
  disabled: boolean;
  fullWidth: boolean | any;
}
