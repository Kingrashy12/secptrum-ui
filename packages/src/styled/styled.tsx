/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { StandardProperties } from "./types";
import { useTheme } from "./hooks/useTheme";
import { generateRandomString } from "./utils/genString";
import { validElementProps } from "./utils/props";
import { cls } from "./utils/className";
import { styleSheetManager } from "./utils/StyleSheetManger";

type ExtendedProperties = StandardProperties & {
  [key: string]: ExtendedProperties | string | number | undefined;
};
type Theme = Record<string, any>;
type Interpolation<P> =
  | string
  | number
  | ExtendedProperties
  | ((props: P & { theme: Theme }) => string | number);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type StyledFunction = <P extends object = {}>(
  tag: keyof JSX.IntrinsicElements | React.ComponentType<P>
) => (
  strings: TemplateStringsArray,
  ...interpolations: Array<Interpolation<P>>
) => //Add theme to props and all other props
React.ForwardRefExoticComponent<
  P & { theme?: Theme } & React.HTMLAttributes<HTMLElement> &
    Record<string, any>
>;

const parseStyles = (css: string, props: any): ExtendedProperties => {
  const result: ExtendedProperties = {};
  let currentObj = result;
  const stack: ExtendedProperties[] = [];

  css.split(/(?<=})|(?<=;)/).forEach((rule) => {
    rule = rule.trim();
    if (!rule) return;

    if (rule.includes("{")) {
      const [selector, styles] = rule.split("{");
      currentObj[selector.trim()] = {};
      stack.push(currentObj);
      currentObj = currentObj[selector.trim()] as ExtendedProperties;
      Object.assign(currentObj, parseStyles(styles, props));
    } else if (rule === "}") {
      currentObj = stack.pop() || result;
    } else {
      const [key, value] = rule.split(":").map((s) => s.trim());
      if (key && value) {
        currentObj[key] =
          typeof value === "function" ? value ?? props : value.replace(";", "");
      }
    }
  });

  return result;
};

/**
 * Generates a style string from a styles object.
 * @param {ExtendedProperties} styles - The styles object to be converted to a string.
 * @param {string} [selector] - The selector to be used for the styles.
 * @returns {string} The generated style string.
 */
const generateStyleString = (
  styles: ExtendedProperties,
  selector: string = ""
): string => {
  let styleString = "";
  Object.entries(styles).forEach(([key, value]) => {
    if (typeof value === "object") {
      if (key.startsWith("@media")) {
        styleString += `${key} { ${generateStyleString(value, selector)} }`;
      } else {
        const newSelector = selector
          ? key.startsWith("&")
            ? selector + key.slice(1)
            : `${selector} ${key}`
          : key;
        styleString += generateStyleString(value, newSelector);
      }
    } else {
      if (selector) {
        styleString += `${selector} { ${key}: ${value}; }`;
      } else {
        styleString += `${key}: ${value}; `;
      }
    }
  });
  return styleString;
};
/**
 * Generates a styled component function.
 *
 * @type {StyledFunction}
 * @param {keyof JSX.IntrinsicElements} tag - The HTML tag to be styled.
 * @returns {Function} A function that takes template literals and returns a React component.
 *
 * @example
 * const Button = styled('button')`
 *   background-color: blue;
 *   color: white;
 *   padding: 10px 20px;
 * `;
 *
 * // Usage:
 * <Button onClick={() => console.log('Clicked!')}>Click me</Button>
 */
//@ts-expect-error theme is not defined
const styled: StyledFunction = <P extends object>(
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>
) => {
  type Props = React.ComponentProps<typeof tag>;
  return (
    strings: TemplateStringsArray,
    ...interpolations: Array<Interpolation<P>>
  ) => {
    return React.forwardRef<
      unknown,
      P & { theme?: Theme } & Record<string, any>
    >((props: Props, ref) => {
      const { theme } = useTheme();

      const uniqueId = generateRandomString(10);

      // Memoize the styles
      const memoizedStyles = useMemo(() => {
        const css = strings.reduce((acc, str, i) => {
          const interpolation = interpolations[i];
          if (typeof interpolation === "function") {
            return acc + str + interpolation({ ...props, theme });
          }
          return acc + str + (interpolation || "");
        }, "");

        return parseStyles(css, props);
      }, [props, theme]);

      const className = `css-${uniqueId}`;
      const styleString = `.${className} { ${generateStyleString(
        memoizedStyles
      )} }`;

      styleSheetManager.addStyle(styleString);

      const validProps = Object.keys((tag as any).propTypes || {});

      //Filter out valid props and add the rest to remainingProps
      const { prefixedProps, remainingProps } = Object.entries(props).reduce<{
        prefixedProps: Record<string, any>;
        remainingProps: Record<string, any>;
      }>(
        (acc, [key, value]) => {
          if (
            key !== "children" &&
            !validElementProps.includes(key) &&
            !key.startsWith("data-") &&
            !validProps.includes(key)
          ) {
            if (typeof value === "function") {
              acc.remainingProps[key] = value;
            } else {
              acc.prefixedProps[`data-${key.toLowerCase()}`] = value;
            }
          } else {
            acc.remainingProps[key] = value;
          }
          return acc;
        },
        { prefixedProps: {}, remainingProps: {} }
      );

      const combinedClassName = cls(tag, className, props);

      if (typeof tag === "string") {
        return React.createElement(tag, {
          ...prefixedProps,
          ...remainingProps,
          ref,
          className: combinedClassName,
        });
      } else {
        return React.createElement(tag, {
          ...props,
          ref,
          className: combinedClassName,
        });
      }
    });
  };
};

export default styled;
