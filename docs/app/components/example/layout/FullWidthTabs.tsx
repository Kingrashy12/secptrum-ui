import { Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { fonts } from "@/styles/global";
import React from "react";
import { Box, Tabs, TabsHandle, TabPanel, Card } from "secptrum-ui";
import { styled } from "styled-chroma";

const FullWidthTabs = ({ code }: { code: string }) => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Account>
            <Tabs fullWidth>
              <TabsHandle value="tab1">Tab 1</TabsHandle>
              <TabsHandle value="tab2">Tab 2</TabsHandle>

              <TabPanel>
                <Text>Tab1 Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab2 Content</Text>
              </TabPanel>
            </Tabs>
            <Tabs fullWidth variant="solid">
              <TabsHandle value="tab1">Tab 1</TabsHandle>
              <TabsHandle value="tab2">Tab 2</TabsHandle>

              <TabPanel>
                <Text>Tab1 Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab2 Content</Text>
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

export default FullWidthTabs;

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
  font-family: ${fonts.poppins};
  font-weight: 500;
  color: ${(props) => props.theme.colors?.text};
`;

const Account = styled(Card)``;

export const CodeCard = TabPanel;
