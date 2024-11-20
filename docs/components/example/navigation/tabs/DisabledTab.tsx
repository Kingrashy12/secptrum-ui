import { Typography } from "../../..";
import CodeBlock from "../../../custom/code/CodeBlock";
import { tabsCode } from "../../../../data/codes/tabs";
import { fonts } from "../../../../styles/global";
import React from "react";
import { Box, Tabs, TabHandle, TabPanel, styled, Card } from "secptrum-ui";

const DisabledTab = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Account>
            <Text as="h4">Account</Text>
            <Tabs>
              <TabHandle value="overview">Overview</TabHandle>
              <TabHandle value="settings">Settings</TabHandle>
              <TabHandle value="profile" disabled>
                Profile
              </TabHandle>

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
          <CodeBlock code={tabsCode.disabled} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default DisabledTab;

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
