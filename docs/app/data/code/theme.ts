export const themeCodes = {
  default: `
  colors: {
    background: "#ffffff", // Default background color
    text: "#000000", // Default text color
    outline_ButtonBorderColor: colors.neutral[200], // Border color for outline variant buttons
    active_TabColor: "black", // Active tab color for TabHandle
    active_TabColor_Solid: "black", // Active tab color for solid variant TabHandle
    inActiveTabColor: colors.neutral[400], // Inactive tab color for TabHandle
    tabListBackground: colors.gray[100], // Background color for TabList component
    button_OutlineHoverColor: colors.gray[50], // Hover color for outline buttons
    card: "white", // Default background color for card components
    card_BorderColor: colors.neutral[200], // Border color for cards
    cardShadow: "rgba(0, 0, 0, 0.1)", // Shadow effect for card components
    icon: "white", // Icon color
    drop: "rgb(255, 255, 255, 0.5)", // Background color for dropdowns or overlays with transparency
    checkBoxBorderColor: colors.neutral[200], // Border color for checkboxes
  },
 fonts: {
    body: "'Poppins-Medium', sans-serif", // Font family for body text
    heading: "'Poppins-Semibold', sans-serif", // Font family for heading text
 },
 effects: {
   drop_blur: 6, // Blur effect applied to dropdowns or overlay components
 },
  spacing: {
    xs: "4px", // Smallest unit of spacing, typically for compact layouts.
    sm: "8px", // Small spacing, useful for padding or margin.
    md: "16px", // Medium spacing, the base unit for consistent spacing.
    lg: "24px", // Large spacing, suitable for separating major sections.
  },
  breakpoints: {
    sm: "640px", // Breakpoint for mobile screens.
    md: "768px", // Breakpoint for tablet screens.
    lg: "1024px", // Breakpoint for small desktop screens.
    xl: "1280px", // Breakpoint for large desktop screens.
  },
    `,
  customize: `
import { ThemeProvider } from "secptrum-ui";

const customTheme = {
 dark:{
    colors: {
    background: "#ff5733", // Change the background color to a custom value.
  },
  fonts: {
    body: "Roboto, sans-serif", // Set a custom font family.
  },
 },
 light:{
  colors: {
    background: "#0000", // Change the background color to a custom value.
  },
  fonts: {
    body: "Roboto, sans-serif", // Set a custom font family.
  },
 },
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>;
    `,
  provider: `
import { ThemeProvider } from "secptrum-ui";

const customTheme = {
 dark:{
    colors: {
    .....
  },
  fonts: {
    .....
  },
 },
 light:{
  colors: {
    .....
  },
  fonts: {
    .....
  },
 },
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>;
    `,
  toggler: `
// Usage in a component
import { useTheme, Stack } from 'secptrum-ui';

const ThemeTogglerExample = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Stack align="horizontal">
        <Text theme={theme}>Light</Text>
          <Switch
            checked={isOn}
            onSwitch={() => {
              setIsOn(!isOn);
              toggleTheme();
            }}
        />
        <Text theme={theme}>Dark</Text>
    </Stack>
  );
};
    `,
  usetheme: `
// Usage in a component
import { useTheme, Stack } from 'secptrum-ui';

const ThemeTogglerExample = () => {
  const { toggleTheme, theme, mode } = useTheme();

  return (
    <Stack>
        <Text theme={theme}>Current Mode: {mode}</Text>
          <Switch
            checked={isOn}
            onSwitch={() => {
              setIsOn(!isOn);
              toggleTheme();
            }}
        />
    </Stack>
  );
};
    `,
  singleMode: `
import { TextInput } from 'secptrum-ui';

const LightModeComponent = () => (
  <TextInput variant="solid" mode="light" />Light Mode TextInput
);

// Or using dark mode explicitly
const DarkModeComponent = () => (
  <TextInput variant="solid" mode="dark" />Dark Mode TextInput
);
    `,
};
