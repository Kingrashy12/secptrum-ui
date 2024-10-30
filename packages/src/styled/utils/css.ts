/**
 * A utility function to process tagged template literals for CSS-in-JS.
 *
 * @param {TemplateStringsArray} strings - The static parts of the template literal.
 * @param {...any} interpolations - The dynamic values to be interpolated into the CSS.
 * @returns {string} The processed CSS string with interpolations applied.
 *
 * @example
 * const styles = css`
 *   color: ${props => props.color};
 *   font-size: ${props => props.fontSize}px;
 * `;
 */

const css = (
  strings: TemplateStringsArray,
  ...interpolations: any[]
): string => {
  return strings.reduce((result, string, i) => {
    return result + string + (interpolations[i] || "");
  }, "");
};

export default css;
