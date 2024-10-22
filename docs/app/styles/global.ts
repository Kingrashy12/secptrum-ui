'use client';

import { createGlobalStyle, styled } from 'styled-chroma';
import { Box, colors } from 'secptrum-ui';

export const fonts = {
  poppins: '"Poppins", system-ui',
  nunito: '"Nunito Sans", system-ui',
  off: '"Offside", system-ui',
  inter: '"Inter", sans-serif',
};

export const Container = styled(Box)`
  margin-top: 0;
  width: 100%;
`;

export const RootWrap = styled(Box)`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors?.background};
  }

  .modal-text{
    color: ${({ theme }) => theme.colors?.text};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Divider = styled('div')`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors?.divider};
`;

export const SpaceTop = styled(Box)`
  margin-top: 10px;
`;

export const CodeContainer = styled(Box)`
  background: #000;
  border-radius: 16px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3px;

  pre {
    position: relative;
    display: flex;
    height: auto;
    margin: 0;
    padding: 26px;
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
  code {
    color: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
  }
`;

export const CodeOptions = styled(Box)`
  align-items: center;
  gap: 10px;
  padding-left: 1rem;
  height: auto;
  margin: 0;
  padding: 12px;
  padding-left: 1.3rem;
  width: 100%;

  svg {
    cursor: pointer;
    position: absolute;
    right: 1rem;
  }
`;

export const OptionSelector = styled<{ isactive: boolean }>('p')`
  color: ${(props) => (props.isactive ? 'white' : colors.neutral[400])};
  font-size: 12px;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;

  &:hover {
    background: ${colors.neutral[800]};
  }
`;

export const OptionsLine = styled('div')`
  border-bottom: 1px solid ${(props) => props.theme.colors?.code_opt_line};
  width: 100%;
`;

export const AuthMain = styled('main')`
  /* flex: 1; */
  display: flex;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  justify-content: center;
  align-items: center;
`;
