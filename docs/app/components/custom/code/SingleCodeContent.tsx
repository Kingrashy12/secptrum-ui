import React from 'react';
import { Box } from 'secptrum-ui';
import { styled } from 'styled-chroma';
import CodeBlock from './CodeBlock';
type CodeContentType = {
  code: string;
};
const SingleCodeContent = ({ code }: CodeContentType) => {
  return <CodeBlock code={code} />;
};

export default SingleCodeContent;

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
    height: auto;
    margin: 0;
    /* padding: 5px; */
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
  code {
    color: yellowgreen;
    max-width: 100%;
  }
`;
