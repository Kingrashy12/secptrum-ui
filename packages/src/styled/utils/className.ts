/**
 * Generates a class name for a given tag or component type.
 * @param tag - The tag name or component type to generate a class name for.
 * @param className - The base class name to combine with the generated class name.
 * @param props - The props object containing additional class names.
 * @returns The combined class name.
 */
export function cls(
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>,
  className: string,
  props: any
) {
  const sc = `sc-${
    typeof tag === 'string' ? tag : tag.displayName || 'Component'
  }`;
  if (typeof sc === 'string' && sc !== 'undefined') {
    return `${className} ${props.className || sc}`;
  }
  return '';
}
