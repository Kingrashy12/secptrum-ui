import { Typography } from '@/components';
import CodeBlock from '@/components/custom/code/CodeBlock';
import { fonts } from '@/styles/global';
import React from 'react';
import { Tabs, TabsHandle, TabPanel, Box, Card } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const BasicTabs = ({ code }: { code: string }) => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Account>
            <Text as="h4">Account</Text>
            <Tabs>
              <TabsHandle value="overview">Overview</TabsHandle>
              <TabsHandle value="settings">Settings</TabsHandle>
              <TabsHandle value="profile">Profile</TabsHandle>

              <TabPanel>
                <Text>Overview Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Settings Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Profile Content</Text>
              </TabPanel>
            </Tabs>
          </Account>
        </TabPanel>
        <CodeCard>
          <CodeBlock code={code} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default BasicTabs;

const Container = styled(Box)`
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Text = styled(Typography)`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${fonts.poppins};
  font-weight: 500;
`;

const Account = styled(Card)``;

export const CodeCard = TabPanel;
