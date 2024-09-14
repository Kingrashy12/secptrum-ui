const shouldForwardProp = (prop: string) => {
  const invalidProps = [
    "padding",
    "margin",
    "centered",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "border",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "direction",
    "align",
    "isactive",
    "centerContent",
    "checked",
    "color",
    "checkedColor",
    "width",
    "height",
  ];

  return !invalidProps.includes(prop); // Only forward valid props
};

export default shouldForwardProp;
