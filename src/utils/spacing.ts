/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSpacing = (size: number) => {
  const spacingScale: Record<number, string> = {
    0: "0px",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
    40: "10rem", // 160px
    48: "12rem", // 192px
    56: "14rem", // 224px
    64: "16rem", // 256px
    96: "24rem", // 384px
  };
  return spacingScale[size] || "0px";
};

export const spacingValues = (spacing: string | any) => {
  const space: Record<string, string> = {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "52px",
  };
  return space[spacing] || "0px";
};
