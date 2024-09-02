# SecptrumUI

**SecptrumUI** is a customizable and modern UI component library for react, built with `styled-components`. Designed to help developers quickly build beautiful and responsive web applications, SecptrumUI offers a range of components that are easy to use and adapt to any project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)

## Features

- 🎨 **Customizable**: Easily customize components using `styled-components` for advanced styling.
- 🧩 **Modular**: Import only the components you need, reducing bundle size.
- 💻 **Responsive**: All components are designed to be fully responsive.
- ⚡ **Fast Development**: Speed up your development process with pre-built, easy-to-integrate components.
- 🔍 **Accessible**: Built with accessibility best practices in mind.

## Installation

To install SecptrumUI, you can use npm or yarn:

```bash
# Using npm
npm install secptrum-ui styled-components react-icons

# Using yarn
yarn add secptrum-ui styled-components react-icons
```

## Usage

To use SecptrumUI components in your project, import the components you need

```bash
import { Button, Input, Stack, Box } from 'secptrum-ui';

function App() {
  return (
     <Stack spacing="md">
      <Box padding="md" border="1px solid #ddd">
        <Input placeholder="Enter your text here" />
      </Box>
      <Button colorScheme="primary" size="md" variant="solid">
        Click Me
      </Button>
    </Stack>
  );
}

```

## Components

SecptrumUI includes a variety of components to help you build your application

- [Button](#Button): A versatile button component with multiple styles and sizes.
- [Card](#Card): A flexible card component for displaying content.
- [Modal](#Modal): A modal dialog for alerts, confirmations, or custom content.
- [Alert](#Alert): Notifications and messages to provide feedback to users.
- [Input](#Input): Customizable input fields with validation support.
- [Dropdown](#Dropdown): A dropdown menu for navigation or selection options.
- [Stack](#Stack): A layout component for arranging child elements with spacing.
- [Box](#Box): A versatile container component for layout and styling purposes.
- [ImagePicker](#ImagePicker): A picker components that allows users to select and upload an image.

## Button

- `Button`: A customizable button component designed to handle various actions and events in your application. The Button component supports multiple variants, sizes, and states, making it versatile and adaptable to different design and functionality needs.

## Input

- `Input`: A versatile input field component that supports different types, styles, and additional features like icons. The Input component is designed to be highly customizable, making it suitable for various use cases such as forms, search bars, and user data entry.

## Stack

- `Stack`: A layout component that arranges its children in a vertical or horizontal stack with configurable spacing. The Stack component simplifies the management of child components' spacing, alignment,

## Box

- `Box`: A flexible container component that serves as a building block for layout and styling. The Box component allows you to easily control spacing (padding and margin), alignment, borders, and other CSS properties through props.

For a full list of components and their usage, please refer to the [documentation](https://secptrumui.vercel.app).

## Coutomization

SecptrumUI leverages `styled-components` for customization. You can adjust the appearance of components by using the `styled-components` API to create your own styles.

### Example

```bash
import styled from "styled-components";
import { Button } from 'secptrum-ui';

const CustomButton = styled(Button)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  return (
    <CustomButton>
      Customized Button
    </CustomButton>
  );
}

export default App;
```
