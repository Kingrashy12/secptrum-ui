"use-client";
import { fonts } from "@/styles/global";
import React, { ComponentProps, ElementType } from "react";

// Define the props type, allowing any HTML element type and adding custom props
interface TextProps extends ComponentProps<"p"> {
  children?: React.ReactNode; // Can be any type of child elements
  font?: "poppins" | "nunito" | "inter" | "off"; // Custom font prop
  as?: ElementType; // Element type to render, default to "p"
}

const getFonts = (font: TextProps["font"]) => {
  switch (font) {
    case "poppins":
      return fonts.poppins;
    case "inter":
      return fonts.inter;
    case "nunito":
      return fonts.nunito;
    case "off":
      return fonts.off;
    default:
      return fonts.poppins;
  }
};

const Typography = ({
  children,
  font,
  as: Component = "p",
  ...props
}: TextProps) => {
  return (
    <Component
      {...props}
      className={`${props.className}`}
      style={{ fontFamily: getFonts(font) }}
    >
      {children}
    </Component>
  );
};

export default Typography;
