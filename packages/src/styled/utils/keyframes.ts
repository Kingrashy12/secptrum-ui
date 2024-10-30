import { styleSheetManager } from "./StyleSheetManger";

/**
 * Creates a keyframe animation and returns a unique name for it.
 *
 * @param {TemplateStringsArray} strings - The static parts of the template literal.
 * @param {...any} interpolations - The dynamic parts of the template literal.
 * @returns {string} A unique name for the generated keyframe animation.
 *
 * @example
 * const fadeIn = keyframes`
 *   from { opacity: 0; }
 *   to { opacity: 1; }
 * `;
 *
 * // Use the returned name in your styled component
 * const FadeInDiv = styled.div`
 *   animation: ${fadeIn} 1s ease-in;
 * `;
 */

const keyframes = (
  strings: TemplateStringsArray,
  ...interpolations: Array<any>
) => {
  const css = strings.reduce((acc, str, i) => {
    const interpolation = interpolations[i];
    return acc + str + (interpolation || "");
  }, "");

  const name = `keyframe-${Math.random().toString(36).substr(2, 7)}`;
  const keyframeString = `@keyframes ${name} { ${css} }`;
  styleSheetManager.addStyle(keyframeString);

  return name;
};

export default keyframes;
