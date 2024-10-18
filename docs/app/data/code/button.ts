export const buttonCodes = {
  basic: `
import { Button } from 'secptrum-ui';
  
export const App = () => (
    <Button size="lg" radius="lg">
     Solid Button
    </Button>
);
    `,
  variants: `
import { Button, Stack, useTheme } from 'secptrum-ui';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Stack align="horizontal">
      {/* Solid Button */}
      <Button size="lg" radius="lg">
        Solid Button
      </Button>

      {/* Outline Button */}
      <Button
        size="lg"
        radius="lg"
        variant="outline"
        color={theme.colors?.text}
      >
        Outline Button
      </Button>

      {/* Light Button */}
      <Button
        variant="light"
        size="lg"
        radius="lg"
      >
        Light Button
      </Button>

      {/* Ghost Button */}
      <Button
        variant="ghost"
        size="lg"
        radius="lg"
      >
        Ghost Button
      </Button>

      {/* Danger Button */}
      <Button
        variant="danger"
        size="lg"
        radius="lg"
      >
        Danger Button
      </Button>
    </Stack>
  );
};
    `,
  size: `
import { Button, Stack, useTheme } from 'secptrum-ui';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Stack align="horizontal">
         <Button size="md" radius="lg">
            Medium Button
          </Button>
          <Button
            size="lg"
            radius="lg"
            variant="outline"
            color={theme.colors?.text}
          >
            Large Button
          </Button>
          <Button variant="danger" size="xl" radius="lg">
            Extra Large Button
          </Button>
    </Stack>
  );
};
    `,
  radius: `
import { Button, Stack, useTheme } from 'secptrum-ui';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Stack align="horizontal">
         <Button size="md" radius="md">
            Medium Radius Button
          </Button>
          <Button size="md" radius="lg">
            Large Radius Button
          </Button>
          <Button size="md" radius="xl">
            Extra Large Radius Button
          </Button>
          <Button size="lg" radius="full">
            Full Radius Button
          </Button>
    </Stack>
  );
};
    `,
  loading: `
import { Button, Stack, useTheme } from 'secptrum-ui';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Stack align="horizontal">
        <Button isLoading>Login</Button>
    </Stack>
  );
};
    `,
};
