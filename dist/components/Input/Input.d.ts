import { InputType } from "../../types";
/**
 * A versatile input field component that supports different types, styles, and additional features
 * like icons. The Input component is designed to be highly customizable, making it suitable for
 * various use cases such as forms, search bars, and user data entry.
 *
 * Props:
 * - `icon`: Allows an icon to be displayed inside the input field. Accepts JSX icons (e.g., `FaUser` from react-icons)
 *   without a fragment. If a fragment is used, it may cause the component to break.
 * - `Type`: Specifies the type of input. Accepts standard HTML input types such as "text", "password", "email".
 * - `variant`: Controls the style variant of the input. Options include:
 *   - `"solid"`: A filled input style with a background.
 *   - `"outline"`: An input with an outline border.
 *   - `"ghost"`: A transparent input with no border or background.
 * - `radius`: Defines the border-radius of the input to create rounded corners. Accepts predefined sizes:
 *   - `"sm"`: Small radius.
 *   - `"md"`: Medium radius.
 *   - `"lg"`: Large radius.
 *   - `"xl"`: Extra-large radius.
 *   - `"full"`: Completely rounded corners.
 *
 * Usage:
 * Use the Input component to create user input fields with different types, styles, and optional icons.
 * This component provides a flexible way to handle input across your application with consistent styling.
 *
 * Example:
 * ```
 * <Input
 *   icon={FaUser}
 *   Type="text"
 *   variant="outline"
 *   radius="md"
 *   placeholder="Enter your username"
 * />
 * ```
 */
declare const Input: ({ icon, variant, radius, Type, ...props }: InputType) => JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map