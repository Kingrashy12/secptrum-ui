import { forwardRef, useEffect, useState } from 'react';
import { Input, InputForm } from '../../styles/input/styled';
import { RiErrorWarningFill, RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import Icon from '../Icon/Icon';
import { InputType } from '../../types/sui';
import { colors } from '../../styles/colors';
import { useMode } from '../../hooks/useMode';

/**
 * A customizable Input component for text, email, password, and number inputs.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.icon - Optional icon to display inside the input
 * @param {'outline' | 'filled' | 'unstyled'} [props.variant='outline'] - The input variant
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'full'} [props.radius='lg'] - The border radius of the input
 * @param {'text' | 'password' | 'email' | 'number'} props.Type - The type of input
 * @param {number} [props.iconSize=20] - The size of the icon
 * @param {string} props.outLineBorderColor - The color of the outline border
 * @param {string} props.focusBorderColor - The color of the border when focused
 * @param {string} props.focusColor - The color of the input text when focused
 * @param {boolean} props.hasError - Whether the input has an error
 * @param {string} props.errorMessage - The error message to display
 * @param {string} props.width - The width of the input
 * @param {'light' | 'dark'} props.mode - The color mode of the input
 * @param {React.CSSProperties} props.inputStyle - Custom styles for the input element
 * @param {React.CSSProperties} props.formStyle - Custom styles for the form element
 * @param {string} props.color - The color of the input text
 * @param {string} props.formClassName - Additional class name for the form element
 * @param {string} props.backgroundColor - The background color of the input
 * @param {string} props.inputClass - Additional class name for the input element
 * @param {boolean} props.fullWidth - Whether the input should take full width
 * @param {React.Ref<HTMLInputElement>} ref - Ref forwarded to the input element
 * @returns {JSX.Element} The rendered Input component
 */

const TextInput = forwardRef<HTMLInputElement, InputType>(
  (
    {
      icon,
      variant = 'outline',
      radius = 'lg',
      Type,
      iconSize = 20,
      outLineBorderColor,
      focusBorderColor,
      focusColor,
      hasError,
      errorMessage,
      width,
      mode,
      inputStyle,
      formStyle,
      color,
      formClassName,
      backgroundColor,
      inputClass,
      fullWidth,
      ...props
    },
    ref
  ): JSX.Element => {
    const [inputType, setInputType] = useState(props.type);
    const { mode: themeMode } = useMode();
    const currentMode = mode ?? themeMode;

    const typeMap = {
      email: 'email',
      text: 'text',
      password: 'password',
      number: 'number',
    };

    const getType = (type: InputType['Type']) => {
      if (!type) {
        setInputType('text');
        return;
      }
      setInputType(typeMap[type] || 'text');
    };

    useEffect(() => {
      getType(Type);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Type]);

    const isPassword = inputType === 'password';

    const togglePasswordVisibility = () => {
      setInputType((prevType) =>
        prevType === 'password' ? 'text' : 'password'
      );
    };

    const getWidth = () => {
      if (fullWidth) {
        return `100%`;
      } else return width;
    };

    return (
      <InputForm className={formClassName} width={getWidth()} style={formStyle}>
        <Input
          disabled={props.disabled}
          backgroundcolor={backgroundColor}
          error={hasError}
          color={color}
          mode={currentMode as InputType['mode']}
          outLineBorderColor={outLineBorderColor}
          variant={variant}
          radius={radius}
          className={props.className}
          focusBorderColor={focusBorderColor}
          focusColor={focusColor}
          style={props.style}
          Type={Type}
        >
          {icon ? (
            <Icon
              className="Icon__Sui"
              size={iconSize}
              icon={icon}
              color={colors.neutral[500]}
            />
          ) : null}
          <input
            {...props}
            ref={ref}
            className={inputClass}
            style={inputStyle}
            type={inputType}
            placeholder={props.placeholder || 'Type here...'}
          />
          {Type === 'password' && (
            <Icon
              onClick={togglePasswordVisibility}
              size={20}
              icon={isPassword ? RiEyeFill : RiEyeOffFill}
              className="eye_pass"
            />
          )}
        </Input>
        {hasError && (
          <p>
            {' '}
            <Icon
              className="Icon__Sui"
              size={15}
              icon={RiErrorWarningFill}
              color="red"
            />{' '}
            {errorMessage}
          </p>
        )}
      </InputForm>
    );
  }
);

export default TextInput;
TextInput.displayName = 'TextInputSui';
