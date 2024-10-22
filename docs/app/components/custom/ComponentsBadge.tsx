import React, { ReactNode } from 'react';
import { colors, ParagraphProps, styled } from 'styled-chroma';
import { fonts } from '@/styles/global';

type BadgeType = {
  children?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

const ComponentsBadge = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
}: BadgeType) => {
  return (
    <Badge
      backgroundColor={backgroundColor || colors.gray[200]}
      textColor={textColor || colors.neutral[800]}
      bordercolor={borderColor || colors.neutral[400]}
    >
      {children}
    </Badge>
  );
};

export default ComponentsBadge;

interface BadgeProps extends ParagraphProps {
  backgroundColor: string;
  textColor: string;
  bordercolor: string;
}

const Badge = styled<BadgeProps>('span')`
  padding: 2px 4px;
  border-radius: 5px;
  font-family: ${fonts.poppins};
  border: 1px solid ${({ bordercolor }) => bordercolor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;
