<div align="center">
  <img src="https://github.com/Kingrashy12/secptrum-ui/blob/main/images/secptrumui-logo.png" alt="SecptrumUI Logo" width="200" height="200" />
</div>

#

**SecptrumUI** A comprehensive React component library

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [CLI Tool](#cli)
- [Customization](#customization)
- [Contributing](#contributing)

## Features

- 🎨 **Customizable**: Easily customize components using `styled` for advanced styling.
- 🧩 **Modular**: Import only the components you need, reducing bundle size.
- 💻 **Responsive**: All components are designed to be fully responsive.
- ⚡ **Fast Development**: Speed up your development process with pre-built, easy-to-integrate components.
- 🔍 **Accessible**: Built with accessibility best practices in mind.

## Installation

### Prerequisites

Before installing SecptrumUI, ensure you have:

- React `>= 18.0.0`
- ReactDOM `>= 18.0.0`

installed in your project.

### Install SecptrumUI

To install SecptrumUI, you can use npm or yarn:

```bash
# Using npm
npm install secptrum-ui

# Using yarn
yarn add secptrum-ui
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
      <Button size='lg' radius='lg' variant="solid">
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
- [Toast](#Toast): Notifications and messages to provide feedback to users.
- [Input](#Input): Customizable input fields with validation support.
- [Tabs](#Tabs): A tabs component for navigation or selection options.
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

## Tabs

- `Tabs`: A tabs component that allows users to switch between different views or sections of content. The Tabs component provides a clean and intuitive interface for navigating between different parts of an application.

For a full list of components and their usage, please refer to the [documentation](https://secptrumui.vercel.app//docs/components/action/button).

## CLI Tool

SecptrumUI includes a CLI tool to help set up your Next.js project with SecptrumUI.

> **Note:** This setup is specific to Next.js and provides detailed instructions for configuration.

### Setup

1. **Install SecptrumUI**

First, ensure you have Secptrum UI installed in your project. If not, you can install it using npm or yarn:

```bash
npm install secptrum-ui
```

2. **Initialize SecptrumUI**

To initialize SecptrumUI next configuration in your Next.js project, run the following command:

```bash
npx secptrum-ui init
```

This will create a `SecptrumUIRegistry` component in your project and add it to your `lib/registry.js` or `lib/registry.tsx` file.

3. **Import SecptrumUIRegistry into your root layout**

Finally, import the `SecptrumUIRegistry` component in your `layout.js` or `layout.tsx` file:

- `app/layout` for App Router
- `src/layout` for Pages Router

- **TypeScript**

```bash
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}
```

- **JavaScript**

```bash
import SecptrumUIRegistry from '@/lib/registry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SecptrumUIRegistry>{children}</SecptrumUIRegistry>
      </body>
    </html>
  );
}
```

These steps ensure that SecptrumUI components are properly registered and available throughout your application.

> **Note:** When using `styled` to customize components, you need to add the `'use client'` directive at the top of the file. Don't worry about style glitches; SecptrumUI will handle those for you.

## Coutomization

SecptrumUI leverages `styled`, a css-in-js method, to provide a flexible way to customize components.

### Example

```bash
import { Button, styled } from 'secptrum-ui';

// Customizing the Button component

const CustomButton = styled(Button)`
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
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

> **Note:** You can use your favorite styling library to customize components, such as `TailwindCSS`, `styled-components`, etc., or even plain CSS.

## Contributing

Contributions are welcome to improve SecptrumUI! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to submit improvements and bug fixes.
