/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaNoteSticky } from 'react-icons/fa6';
import { RiErrorWarningFill, RiInformationFill } from 'react-icons/ri';
import { Icon } from 'secptrum-ui';
import { styled } from 'styled-chroma';

type DocNoteType = 'info' | 'warning' | 'note';

interface DocNoteProps {
  type?: DocNoteType; // Type of message: info, warning, or note
  children: React.ReactNode; // Message content
  mt?: number;
  iconSize?: number;
}

// Define the colors for each type of note
const noteStyles: Record<
  DocNoteType,
  { background: string; border: string; icon: any }
> = {
  info: {
    background: '#e7f4ff',
    border: '#007bff',
    icon: RiInformationFill,
  },
  warning: {
    background: '#fff3cd',
    border: '#ffc107',
    icon: RiErrorWarningFill,
  },
  note: {
    background: '#f5f5f5',
    border: '#999',
    icon: FaNoteSticky,
  },
};

// Styled component for the Note container
const StyledDocNote = styled<{ noteType: DocNoteType; mt: number | any }>(
  'div'
)`
  background-color: ${(props) => noteStyles[props.noteType].background};
  border-left: 4px solid ${(props) => noteStyles[props.noteType].border};
  padding: 16px;
  margin-bottom: 20px;
  margin-top: ${(props) => props.mt}px;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  display: flex;
  gap: 12px;

  p {
    margin: 0;
  }
`;

// The DocNote component itself
const DocInfo: React.FC<DocNoteProps> = ({
  type = 'note',
  children,
  mt,
  iconSize,
}) => {
  return (
    <StyledDocNote mt={mt} noteType={type}>
      <Icon
        icon={noteStyles[type].icon}
        size={iconSize || 25}
        color={noteStyles[type].border}
      />
      <div>{children}</div>
    </StyledDocNote>
  );
};

export default DocInfo;
