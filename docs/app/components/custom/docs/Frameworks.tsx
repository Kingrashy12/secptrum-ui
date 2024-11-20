import { frameworks } from '@/data/frameworks';
import React from 'react';
import { FlexBox, Icon } from 'secptrum-ui';
import { FrameWorkContent } from '@/styles/docs/docs.styled';
import Link from 'next/link';

const Frameworks = () => {
  return (
    <FlexBox gap="6px" wrap="wrap" style={{ marginTop: '12px' }} width="100%">
      {frameworks.map((framework) => (
        <Link href={framework.uri} key={framework.name}>
          <FrameWorkContent>
            <div>
              <Icon icon={framework.img} />
              <h3>{framework.name}</h3>
            </div>
            <p>{framework.description}</p>
          </FrameWorkContent>
        </Link>
      ))}
    </FlexBox>
  );
};

export default Frameworks;
