/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Icon from '../Icon/Icon';
import { ButtonProps } from '../../types/sui';
import { ButtonSui } from '../../styles/action/styled';
import { useTheme } from 'styled-chroma';

/**
 * A customizable button component designed to handle various actions and events in your application.
 * The Button component supports multiple variants, sizes, and states, making it versatile and adaptable
 * to different design and functionality needs.
 *
 * Props:
 * - `variant` (optional): Determines the style variant of the button. Options include:
 *   - `"solid"`: A button with a filled background.
 *   - `"outline"`: A button with a border and no background.
 *   - `"ghost"`: A transparent button with no border or background.
 * - `size` (optional): Specifies the size of the button. Common options might include:
 *   - `"sm"`: Small size.
 *   - `"md"`: Medium size (default).
 *   - `"lg"`: Large size.
 * - `mode` (optional): Determines the mode of the button. Options include:
 *   - `"light"`: Light mode.
 *   - `"dark"`: Dark mode.
 * - `fullWidth` (optional): A boolean that, when set to `true`, makes the button take the full width of its container.
 * - `radius` (optional): Defines the border-radius of the button. Options include:
 *   - `"sm"`: Small radius.
 *   - `"md"`: Medium radius
 *   - `"lg"`: Large radius.
 *   - `"xl"`: Extra large radius. (default).
 *   - `"full"`: Full radius, making the button circular.
 * - `icon` (optional): Allows an icon to be displayed inside the button. Accepts JSX icons (e.g., `FaUser` from react-icons)
 *   without a fragment. If a fragment is used, it may cause the component to break.
 * - `isLoading` (optional): A boolean that, when set to `true`, displays a loading indicator within the button,
 *   indicating that an action is being processed.
 *
 * Usage:
 * Use the Button component to trigger actions, submit forms, or navigate between pages.
 * This component is flexible enough to handle various scenarios in your application.
 *
 * Example:
 * ```
 * <Button
 *   variant="outline"
 *   size="md"
 *   radius="lg"
 *   onClick={() => console.log("Button clicked!")}
 *   icon={FaUser}
 * >
 *   Click Me
 * </Button>
 * ```
 */

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      mode,
      size = 'md',
      radius = 'xl',
      variant = 'solid',
      icon,
      iconPosition = 'left',
      iconSize,
      ...props
    },
    ref
  ) => {
    const { mode: themeMode } = useTheme();
    const [m, setM] = useState(mode);

    useEffect(() => {
      if (mode) {
        setM(mode);
      } else {
        setM(themeMode as ButtonProps['mode']);
      }
    }, [mode, themeMode]);

    const getWidth = () => {
      if (props.fullWidth) return '100%';
      if (props.width) return props.width;
      return 'fit-content';
    };

    return (
      <ButtonSui
        mode={m}
        size={size}
        radius={radius}
        variant={variant}
        width={getWidth()}
        disabled={props.disabled || props.isLoading}
        {...props}
        ref={ref}
      >
        {props.isLoading ? (
          <>
            <AiOutlineLoading3Quarters className="loader" />
            {children}
          </>
        ) : (
          ((
            <>
              {icon && iconPosition === 'left' && (
                <Icon size={iconSize} icon={icon} />
              )}
              {children}
              {icon && iconPosition === 'right' && (
                <Icon size={iconSize} icon={icon} />
              )}
            </>
          ) as any)
        )}
      </ButtonSui>
    );
  }
);

export default Button;
Button.displayName = 'Button';
