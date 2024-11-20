import React, { ReactNode } from 'react';
import { styled } from 'secptrum-ui';
import { fonts } from '@/styles/global';

type BadgeType = {
  children?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  style?: React.CSSProperties;
  width?: string;
};

const ComponentsBadge = ({ children, style, width }: BadgeType) => {
  return (
    <Badge style={style} width={width}>
      {children}
    </Badge>
  );
};

export default ComponentsBadge;

const Badge = styled<{ width?: string }>('span')`
  padding: 2px 4px;
  border-radius: 5px;
  font-family: ${fonts.poppins};
  border: 1px solid ${({ theme }) => theme.colors.prop_border};
  background-color: ${({ theme }) => theme.colors.prop_bg};
  color: ${({ theme }) => theme.colors.text};
  width: ${({ width }) => width || 'auto'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;
