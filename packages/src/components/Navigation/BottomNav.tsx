import React from 'react';
import { DivProps } from 'styled-chroma';
import { BottomNavSui } from '../../styles/navigation/styled';

interface BottomNavProps extends DivProps {
  children: React.ReactNode;
  /** The variant of the bottom navigation. Determines the shape and positioning. */
  variant?: 'rounded' | 'full' | 'wide';
  /** The background color of the bottom navigation. */
  background?: string;
}

/**
 * BottomNav component for displaying a bottom navigation bar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the bottom navigation.
 * @param {'rounded' | 'full' | 'wide'} [props.variant] - The variant of the bottom navigation.
 * @param {string} [props.background] - The background color of the bottom navigation.
 */
const BottomNav = ({
  children,
  variant = 'full',
  background,
  ...rest
}: BottomNavProps) => {
  return (
    <BottomNavSui variant={variant} background={background} {...rest}>
      {children}
    </BottomNavSui>
  );
};

export default BottomNav;
BottomNav.displayName = 'BottomNav';
