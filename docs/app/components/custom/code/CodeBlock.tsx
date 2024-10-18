'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Icon, toast } from 'secptrum-ui';
import { TbCopy, TbCopyCheckFilled } from 'react-icons/tb';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { styled } from 'styled-chroma';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <BlockWrap>
      <CodeContainer>
        <SyntaxHighlighter
          language={language}
          wrapLines
          wrapLongLines
          style={{
            ...a11yDark,
            // Base theme from dracula
            hljs: {
              background: '#0000', // Black background
              color: 'lightblue', // Main text color (you can replace it with your theme's main color)
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              lineHeight: '1.2rem',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </CodeContainer>
      <CopyWrap>
        <button
          onClick={handleCopy}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <Icon
            icon={copied ? TbCopyCheckFilled : TbCopy}
            color="white"
            size={17}
          />
        </button>
      </CopyWrap>
    </BlockWrap>
  );
};

export default CodeBlock;

const CodeContainer = styled('div')`
  width: 100%;
  position: relative;
  padding: 5px;
  overflow-x: auto;
  background: #000;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
`;

const BlockWrap = styled('div')`
  width: 100%;
  position: relative;
  border-radius: 15px;
  padding: 1rem;
  background: #000;
`;

const CopyWrap = styled('div')`
  position: absolute;
  top: 10px;
  right: 10px;
  background: black;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 6px;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
