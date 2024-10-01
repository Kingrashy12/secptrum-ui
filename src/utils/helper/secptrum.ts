const getClassName = (Component: any) => {
  const name = Component.displayName;

  return `${name}-Sui`;
};
