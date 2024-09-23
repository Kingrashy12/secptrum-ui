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
    "backgroundColor",
    "backgroundcolor",
    "solidBorder",
    "onHoverBackgroundSolid",
    "onHoverBackgroundOutline",
    "onHoverBackgroundLight",
    "onHoverBackgroundGhost",
    "borderColor",
    "outlineBorderColor",
    "isCurrent",
    "activeColor",
    "moveOnScroll",
    "colorScheme",
    "containerColor",
    "size",
    "color",
    "transition",
    "outLineBorderColor",
    "focusBorderColor",
    "focusColor",
    "transition",
    "cardShadow",
    "space",
    "gap",
    "notavailable",
    "light",
    "outlinebordercolor",
    "checked",
    "rounded",
    "textColor",
    "position",
    "wrap",
    "spacing",
  ];

  return !invalidProps.includes(prop); // Only forward valid props
};

export default shouldForwardProp;
