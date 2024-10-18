'use client';

import {
  CodeContainer,
  CodeOptions,
  OptionSelector,
  OptionsLine,
} from '@/styles/global';
import React, { useState } from 'react';
import { Icon, toast } from 'secptrum-ui';
import { TbCopy, TbCopyCheckFilled } from 'react-icons/tb';

type ContentType = {
  hasOptions?: boolean;
  firstCmd?: string;
  secondCmd?: string;
  thirdCmd?: string;
  firstOpt?: string;
  secondOpt?: string;
  thirdOpt?: string;
  code: string;
};

const ContentWithOptions = ({
  hasOptions,
  firstCmd,
  secondCmd,
  thirdCmd,
  firstOpt,
  secondOpt,
  thirdOpt,
  code,
}: ContentType) => {
  const [currentCmd, setCurrentCmd] = useState<string | null>(firstCmd || '');
  const [currId, setCurrId] = useState<string>('option-1');
  const [copied, setCopied] = useState(false);

  function switchCmd(cmd: string, optionId: string) {
    setCurrId(optionId); // Set the id of the clicked option
    setCurrentCmd(cmd);
  }

  function copyCode() {
    setCopied(true);
    toast.success('Code copied');
    navigator.clipboard.writeText(currentCmd + ' ' + code);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <CodeContainer>
      {hasOptions && (
        <CodeOptions>
          <OptionSelector
            id="option-1"
            isactive={currId === 'option-1'} // Check if this option is active based on currId
            onClick={() => switchCmd(firstCmd!, 'option-1')}
          >
            {firstOpt}
          </OptionSelector>
          <OptionSelector
            id="option-2"
            isactive={currId === 'option-2'}
            onClick={() => switchCmd(secondCmd!, 'option-2')}
          >
            {secondOpt}
          </OptionSelector>
          <OptionSelector
            id="option-3"
            isactive={currId === 'option-3'}
            onClick={() => switchCmd(thirdCmd!, 'option-3')}
          >
            {thirdOpt}
          </OptionSelector>
          <Icon
            icon={copied ? TbCopyCheckFilled : TbCopy}
            color="white"
            onClick={copyCode}
          />
        </CodeOptions>
      )}
      {hasOptions && <OptionsLine />}
      <pre>
        <code>{hasOptions ? currentCmd + ' ' + code : code}</code>
      </pre>
    </CodeContainer>
  );
};

export default ContentWithOptions;
