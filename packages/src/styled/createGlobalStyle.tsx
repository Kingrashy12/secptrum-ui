import React from "react";
import css from "./utils/css";
import { useTheme } from "./hooks/useTheme"; // Import useTheme if you're using styled-components for theming
import { styleSheetManager } from "./utils/StyleSheetManger";
import { Theme } from "./types/local";

/**
 * Creates a global style by injecting CSS into the document's head.
 *
 * @param {TemplateStringsArray} strings - The static parts of the template literal.
 * @param {...any} interpolations - The dynamic values to be interpolated into the CSS.
 * @returns {() => React.FC} A function that returns a React component to apply global styles.
 *
 * @example
 * const GlobalStyle = createGlobalStyle`
 *   body {
 *     margin: 0;
 *     padding: 0;
 *     background-color: ${(props) => props.theme.backgroundColor};
 *   }
 * `;
 */
const createGlobalStyle = (
  strings: TemplateStringsArray,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  ...interpolations: Array<(props: { theme: Theme }) => any | string>
) => {
  return () => {
    const GlobalStyles: React.FC = () => {
      const { theme } = useTheme();

      React.useEffect(() => {
        if (typeof window === "undefined" || !document) return;

        const styleElement = document.createElement("style");
        const cssText = css(
          strings,
          ...interpolations.map((interpolation) =>
            typeof interpolation === "function"
              ? interpolation({ theme })
              : interpolation
          )
        );
        styleElement.textContent = cssText;

        document.head.appendChild(styleElement);

        return () => {
          if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement);
          }
        };
      }, [theme]);

      // For SSR, collect styles
      if (typeof window === "undefined") {
        const cssText = css(
          strings,
          ...interpolations.map((interpolation) =>
            typeof interpolation === "function"
              ? interpolation({ theme })
              : interpolation
          )
        );
        styleSheetManager.addStyle(cssText);
      }

      return null;
    };
    // Add a getStyleElement method for SSR
    const GlobalStylesWithSSR = Object.assign(GlobalStyles, {
      getStyleElement: () => styleSheetManager.getStylesAsString(),
    });

    return <GlobalStylesWithSSR />;
  };
};

export default createGlobalStyle;
