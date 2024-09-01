import { ComponentPropsWithRef } from "react";
type ButtonTypes = ComponentPropsWithRef<"button">;
interface ButtonProps extends ButtonTypes {
    children: string;
    /**
     * Defines the styling variants for the `Button`.
     * @property {string} solid - A solid button style with no additional classes.
     * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
     * @property {string} outline - A button style with a border outline.
     * @property {string} ghost - A button style with a transparent background and transition effects.
     */
    variant?: "solid" | "outline" | "ghost";
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
}
/**
 * A React component that extends the HTML `<button>` element to provide additional styling and functionality.
 *
 * The `Button` component can be customized using standard HTML button attributes and additional props like `size`.
 * It supports the `children` prop to display content inside the button and can accept other props such as
 * `onClick`, `disabled`, `className`, and more.
 *
 * @component
 * @param {Object} props - The props for the Button component.
 * @param {string} props.radius - The radius style of the button default `xl`.
 * @param {('md' | 'lg' | 'xl')} [props.size='medium'] - The size of the button default `md`.
 * @param {string} [props.variant] - The variant style of the button default `solid`.
 * @param {string} [props.className] - Additional class names to apply to the button for styling.
 * @param {function} [props.onClick] - The function to call when the button is clicked.
 * @returns {JSX.Element} A customizable button component that supports standard button props.
 *
 * @example
 * // Usage in a React component
 * import {Button} from 'secptrum-ui';
 *
 * function App() {
 *   return (
 *     <Button size="lg" variant='outlined' >
 *       Click Me!
 *     </Button>
 *   );
 * }
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button for more information on standard HTML button attributes.
 */
declare const Button: {
    ({ children, radius, variant, size, ...props }: ButtonProps): JSX.Element;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
        props: {
            children: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
            };
            variant: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: {
                        name: string;
                        value: string;
                    }[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            radius: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: {
                        name: string;
                        value: string;
                    }[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            size: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: {
                        name: string;
                        value: string;
                    }[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
        };
        composes: string[];
    };
};
export default Button;
//# sourceMappingURL=Button.d.ts.map