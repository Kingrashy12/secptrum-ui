# SecptrumUI

**SecptrumUI** is a customizable and modern UI component library built with Tailwind CSS. Designed to help developers quickly build beautiful and responsive web applications, SecptrumUI offers a range of components that are easy to use and adapt to any project.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)

## Features

- 🎨 **Customizable**: Easily customize components with Tailwind CSS classes.
- 🧩 **Modular**: Import only the components you need, reducing bundle size.
- 💻 **Responsive**: All components are designed to be fully responsive.
- ⚡ **Fast Development**: Speed up your development process with pre-built, easy-to-integrate components.
- 🔍 **Accessible**: Built with accessibility best practices in mind.

## Installation

To install SecptrumUI, you can use npm or yarn:

```bash
# Using npm
npm install secptrum-ui

# Using yarn
yarn add secptrum-ui
```

## Usage

To use SecptrumUI components in your project, first ensure that Tailwind CSS is properly configured. Then, import the components you need

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

## Input

- `Input`: A customizable input field component for user text input. Supports various types, sizes, and validation.

## Stack

- `Stack`: A layout component that arranges its children in a vertical or horizontal stack with adjustable spacing.

## Box

- `Box`: A flexible container component that can be used for layout, styling, and spacing. Supports padding, margins, borders, and other styling options.

For a full list of components and their usage, please refer to the [documentation](https://secptrumui.vercel.app).

## Coutomization

SecptrumUI leverages Tailwind CSS for customization. You can adjust the appearance of components by modifying the Tailwind configuration or applying utility classes directly:

`1`. `Override Tailwind Config`: Edit your `tailwind.config.js` file to customize theme colors, spacing, typography, and more.
`2`. Extend Classes: Use Tailwind utility classes directly on components to achieve your desired look.

```bash
<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 Customized Button
</Button>
```
