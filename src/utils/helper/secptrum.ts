export const getClassName = (Component: any) => {
  const name = Component.displayName.split("__").slice(1);

  return `${name}-Sui`;
};
