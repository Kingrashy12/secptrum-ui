import { ComponentProps } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps = ComponentProps<"input">;
type ButtonTypes = ComponentProps<"button">;
type BoxProps = ComponentProps<"div">;

export interface InputType extends InputProps {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: React.ElementType;
  /**
   * @param variant Indicates the style which the Input Components will inherits to, default `outline`
   */
  variant?: "solid" | "outline" | "ghost";
  /**
   * @param radius Defines the border-radius size of the input, determining how rounded the corners will be.
   * Available options: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large), or "full" (completely rounded).
   */
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * @param Type Specifies the type of input to render. Determines the kind of data that the input will handle.
   * Possible values: "password" (for password input), "text" (for generic text), "email" (for email addresses), or "file" (for file uploads).
   */
  Type: "password" | "text" | "email" | "number";
  /**
   * The size of the icon.
   *
   * @type {number}
   * @optional
   */
  iconSize?: number;
  /**
   * The color of the outline border.
   *
   * @type {string}
   * @optional
   */
  outLineBorderColor?: string;
  /**
   * The color of the input when focused.
   *
   * @type {string}
   * @optional
   */
  focusColor?: string;
  /**
   * The color of the border when the input is focused.
   *
   * @type {string}
   * @optional
   */
  focusBorderColor?: string;
  /**
   * Indicates if the input is in an error state.
   *
   * @type {boolean}
   * @optional
   */
  hasError?: boolean | any;
  /**
   * The error message to display when the input is in an error state.
   *
   * @type {string}
   * @optional
   */
  errorMessage?: string;
  /**
   * Defines whether the input has a label.
   * @type {string}
   */
  hasLabel?: string;

  /**
   * The label text to display for the input field.
   * @type {string}
   */
  label?: string;

  /**
   * Specifies the width of the input, e.g., '100%' or '250px'.
   * @type {string}
   */
  width?: string;

  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";

  /**
   * Additional class name to apply to the form container element.
   * @type {string}
   */
  formClassName?: string;

  /**
   * Inline styles to apply to the form container.
   * @type {React.CSSProperties}
   */
  formStyle?: React.CSSProperties;

  /**
   * Inline styles to apply to the input element.
   * @type {React.CSSProperties}
   */
  inputStyle?: React.CSSProperties;

  /**
   * Additional class name to apply to the input element.
   * @type {string}
   */
  inputClass?: string;

  /**
   * The text color for the input field.
   * @type {string}
   */
  color?: string;

  /**
   * The background color for the input field.
   * @type {string}
   */
  backgroundColor?: string;

  /**
   * Override the default hover background color for the input.
   * @type {string}
   * @default inherited from theme
   */
  onHoverBg?: string;

  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
}

export interface ButtonProps extends ButtonTypes {
  children?: React.ReactNode;
  /**
   * Defines the styling variants for the `Button`.
   * @property {string} solid - A solid button style with no additional classes.
   * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
   * @property {string} outline - A button style with a border outline.
   * @property {string} ghost - A button style with a transparent background and transition effects.
   */
  variant?: "solid" | "outline" | "ghost" | "light" | "danger";
  /**
   * Defines the border radius options for the `Button`.
   * @property {string} sm - A small border radius.
   * @property {string} md - A medium border radius.
   * @property {string} lg - A large border radius.
   * @property {string} xl - An extra-large border radius.
   * @property {string} full - A fully rounded border (circular).
   */

  radius?: "md" | "lg" | "xl" | "full";
  /**
   * Defines the size variants for the `Button`.
   * @property {string} md - A medium button size with standard padding and text.
   * @property {string} lg - A large button size with larger padding and text.
   * @property {string} xl - A extra large button size with larger padding and text.
   */
  size?: "md" | "lg" | "xl";
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  leftIcon?: React.ElementType;
  /**
   * @param isLoading A loading indicator used to signal a pending state action `e.g` Login
   */
  isLoading?: boolean;
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  rightIcon?: React.ElementType;

  /**
   * The color of the button's text or icon.
   * @example "#ffffff" | "blue"
   */
  color?: string;

  /**
   * The background color of the button in its default state.
   * @example "#000000" | "red"
   */
  backgroundColor?: string;

  /**
   * The background color of the button when hovered.
   * @example "#333333" | "green"
   */
  onHoverBackground?: string;

  /**
   * The border style for the button when in outline variant.
   * @default "#000000"
   */
  outlineBorderColor?: string;
  /**
   * Specifies the width of the button. If provided, it sets the button’s width
   * to the specified value. If not provided, the button will use the default width of `auto`
   */
  width?: string;
  /** Specifies the size of the rendered icon */
  iconSize?: number;
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "dark" | "light";
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
  /**
   * Controls the spacing (gap) between child elements within the Stack component.
   * Accepts predefined sizes: "sm" (small), "md" (medium), "lg" (large), "xl" (extra-large), "2xl" (2 times extra-large), "3xl" (3 times extra-large).
   */
  spacing?: SizeVariantType;
}

export interface BoxType extends BoxProps {
  /**
   * The child elements to be rendered inside the Box component.
   */
  children?: React.ReactNode;

  /**
   * Sets the padding for all sides of the Box. Accepts any valid CSS padding value.
   */
  padding?: string;

  /**
   * Sets the top padding of the Box. Accepts predefined size variants.
   */
  paddingTop?: SizeVariantType;

  /**
   * Sets the bottom padding of the Box. Accepts predefined size variants.
   */
  paddingBottom?: SizeVariantType;

  /**
   * Sets the left padding of the Box. Accepts predefined size variants.
   */
  paddingLeft?: SizeVariantType;

  /**
   * Sets the right padding of the Box. Accepts predefined size variants.
   */
  paddingRight?: SizeVariantType;

  /**
   * Sets the border style for the Box. Accepts any valid CSS border value.
   */
  border?: string;

  /**
   * Sets the margin for all sides of the Box. Accepts any valid CSS margin value.
   */
  margin?: string;

  /**
   * Sets the top margin of the Box. Accepts predefined size variants.
   */
  marginTop?: SizeVariantType;

  /**
   * Sets the bottom margin of the Box. Accepts predefined size variants.
   */
  marginBottom?: SizeVariantType;

  /**
   * Sets the left margin of the Box. Accepts predefined size variants.
   */
  marginLeft?: SizeVariantType;

  /**
   * Sets the right margin of the Box. Accepts predefined size variants.
   */
  marginRight?: SizeVariantType;

  /**
   * If true, centers the content both vertically and horizontally within the Box.
   */
  centered?: boolean;

  /**
   * Specifies the flex direction of the Box. Can be either "row" or "column".
   */
  direction?: "row" | "column";
  /**
   * Enables wrapping for items if they exceed the available space in a row layout.
   */
  wrap?: boolean;
  /**
   * Controls the spacing (gap) between child elements within the Stack component.
   * Accepts predefined sizes: "sm" (small), "md" (medium), "lg" (large), "xl" (extra-large), "2xl" (2 times extra-large), "3xl" (3 times extra-large).
   */
  spacing?: SizeVariantType;
  /**
   * If true, the Box will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
  width?: string;
}

export declare type SizeVariantType =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";
export declare type ToastVariant = "info" | "error" | "success" | "warning";
export declare type ToastTransitionType =
  | "dropIn"
  | "slideIn"
  | "popIn"
  | "walkIn";
export declare type ToastPositionType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export declare type ToastType = {
  [key in ToastVariant]: (
    message: string,
    options?: {
      position?: ToastPositionType;
      className?: string;
      transition?: ToastTransitionType;
    }
  ) => void;
};

export declare type ToastOptionsType = {
  /**
   * The position where the toast should appear on the screen.
   */
  position?: ToastPositionType;

  /**
   * Additional CSS class name(s) to be applied to the toast.
   */
  className?: string;

  /**
   * The animation transition effect for the toast's appearance.
   */
  transition?: "dropIn" | "slideIn" | "popIn" | "walkIn";
};

export interface StackType extends BoxType {
  children?: React.ReactNode;
  /**
   * Defines the padding inside the Stack component.
   * Accepts any valid CSS padding value (e.g., "8px", "1rem", "10px 20px").
   */
  padding?: string;

  /**
   * Defines the margin outside the Stack component.
   * Accepts any valid CSS margin value (e.g., "8px", "1rem", "10px 20px").
   */
  margin?: string;

  /**
   * Specifies the alignment direction of the Stack component's children.
   * `vertical` for stacking items one above the other (column),
   * `horizontal` for stacking items side by side (row).
   */
  align?: "vertical" | "horizontal";

  /**
   * Controls the spacing (gap) between child elements within the Stack component.
   * Accepts predefined sizes: "sm" (small), "md" (medium), "lg" (large), "xl" (extra-large), "2xl" (2 times extra-large), "3xl" (3 times extra-large).
   */
  spacing?: SizeVariantType;
  /**
   * Enables wrapping for items if they exceed the available space in a row layout.
   */
  wrap?: boolean;
}

export interface CardProps extends BoxType {
  /**
   * The width of the card.
   */
  width?: string;
  /**
   * Whether the card should take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The direction of the card's content layout.
   */
  direction?: "row" | "column";
  /**
   * The visual mode of the card.
   */
  mode?: "light" | "dark";
  /**
   * The background color of the card.
   */
  background?: string;
  /**
   * The border color of the card.
   */
  borderColor?: string;
  /**
   * The box shadow of the card.
   */
  boxShadow?: string;
  /**
   * The spacing between child elements in the card.
   */
  space?: string;
  centerContent?: boolean;
}

export interface FloatProps extends BoxProps {
  /**
   * The React element that will be positioned to float.
   */
  children?: React.ReactNode;
  /**
   * The position of the float element, which defines where the element
   * should appear on the screen. It can be of type `ToastPositionType`.
   */
  position?: ToastPositionType | "bottom-center" | "top-center";
  /**
   * The background color of the float element.
   */
  backgroundColor?: string;
  /**
   * The size of the float element. Can be "md", "lg", or "xl".
   */
  size?: "md" | "lg" | "xl";
  /**
   * Whether the float element is disabled.
   */
  disabled?: boolean;
  /**
   * The visual variant of the float element. Can be "solid" or "light".
   */
  variant?: "solid" | "light";
  /**
   * The color scheme of the float element. Can be "primary", "secondary", or "danger".
   */
  colorScheme?: "primary" | "secondary" | "danger";
  /**
   * Whether the float element should move when the page is scrolled.
   */
  moveOnScroll?: boolean;
  /**
   * Determines the stack order of the Fab, ensuring it appears
   * above other content but behind interactive elements.
   */
  zIndex?: number;
}
export type DrawerProps = {
  /**
   * Determines if the drawer is open.
   */
  open: boolean;
  /**
   * Function to be called when the drawer is closed.
   */
  onClose: () => void;
  /**
   * The content to be rendered inside the drawer.
   */
  children: React.ReactNode;
  /**
   * The position of the drawer. Can be 'left' or 'right'.
   */
  position?: "left" | "right";
  /**
   * The variant of the drawer. Can be 'default' or 'modal'.
   */
  variant?: "default" | "modal";
  /**
   * The intensity of the glass effect for the backdrop.
   */
  glassEffect?: number;
  /**
   * The background color of the drawer.
   */
  background?: string;
  /**
   * The color mode of the drawer. Can be 'light' or 'dark'.
   */
  mode?: "light" | "dark";
  /**
   * The width of the drawer.
   */
  width?: string;
  /**
   * The spacing between elements inside the drawer.
   */
  spacing?: number;
  /**
   * The content to be rendered in the drawer's header.
   */
  header?: React.ReactNode;
  /**
   * If true, prevents the drawer from being closed when clicking outside.
   */
  preventClose?: boolean;
  /**
   * Additional CSS class name(s) to be applied to the drawer.
   */
  className?: string;
  /**
   * Additional inline styles to be applied to the drawer.
   */
  style?: React.CSSProperties;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
};

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Menu content, typically menu items.
   */
  children: React.ReactNode;

  /**
   * Optional CSS class name to apply to the menu.
   */
  className?: string;

  /**
   * Optional inline styles to apply to the menu.
   */
  style?: React.CSSProperties;

  /**
   * Flag indicating whether the menu is initially open.
   * @default false
   */
  open?: boolean;

  /**
   * Theme mode, either 'light' or 'dark'.
   * @default 'light'
   */
  mode?: "light" | "dark";

  /**
   * Z-index value for positioning the menu.
   * @default 100
   */
  zIndex?: number;

  /**
   * Top position value (e.g., pixels).
   */
  top?: number;

  /**
   * Left position value (e.g., pixels).
   */
  left?: number;

  /**
   * Right position value (e.g., pixels).
   */
  right?: number;

  /**
   * Bottom position value (e.g., pixels).
   */
  bottom?: number;
}

export interface DropType {
  /**
   * The content to be rendered inside the drop component.
   */
  children?: React.ReactNode;

  /**
   * Additional CSS class names to apply to the drop component.
   */
  className?: string;

  /**
   * Inline styles to apply to the drop component.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the drop component is currently open (visible) or not.
   */
  open: boolean;

  /**
   * Callback function triggered to close the drop component.
   */
  onClose: () => void;

  /**
   * Determines whether to center the content within the drop component.
   * @default true
   */
  centerContent?: boolean;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
  /**
   * Prevents the modal from closing if an action is in progress.
   * When set to `true`, the modal will remain open and cannot be closed
   * until the ongoing action completes.
   * Useful for preventing accidental closure during important tasks or loading states.
   */
  preventClose?: boolean;
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";
  /**
   * Controls the intensity of the backdrop glass effect (blur).
   * A higher value increases the blur, creating a stronger glass effect.
   *
   * @type {number} - The intensity of the glass effect (blur).
   * @default '6'
   */
  glassEffect?: number;
}

export type PageLoaderOption = {
  /** The color of the loader.*/
  color?: string;
  /** If true, the loader will have rounded corners. @default 'true' */
  rounded?: boolean;
  /** The color of the container that holds the loader.*/
  containerColor?: string;
  className?: string;
};

export type DynamicImportProps = {
  importFunc: () => Promise<{ default: React.ComponentType }>;
  loaderOptions?: PageLoaderOption;
};
