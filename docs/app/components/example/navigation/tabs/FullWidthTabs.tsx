import { Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { tabsCode } from "@/data/codes/tabs";
import { fonts } from "@/styles/global";
import React from "react";
import { Box, Tabs, TabHandle, styled, TabPanel, Card } from "secptrum-ui";

const FullWidthTabs = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Account>
            <Tabs fullWidth>
              <TabHandle value="tab1">Tab 1</TabHandle>
              <TabHandle value="tab2">Tab 2</TabHandle>

              <TabPanel>
                <Text>Tab1 Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab2 Content</Text>
              </TabPanel>
            </Tabs>
            <Tabs fullWidth variant="solid">
              <TabHandle value="tab1">Tab 1</TabHandle>
              <TabHandle value="tab2">Tab 2</TabHandle>

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
          <CodeBlock code={tabsCode.fullWidth} />
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
