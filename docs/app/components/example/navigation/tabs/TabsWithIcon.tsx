import { Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { tabsCode } from "@/data/codes/tabs";
import { fonts } from "@/styles/global";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { Box, Tabs, TabHandle, styled, TabPanel, Card } from "secptrum-ui";

const TabsWithIcons = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Account>
            <Text as="h4">Account</Text>
            <Tabs variant="solid">
              <TabHandle value="email" icon={MdAlternateEmail}>
                Email
              </TabHandle>
              <TabHandle value="phone" icon={RiPhoneFill}>
                Phone
              </TabHandle>

              <TabPanel>
                <Text>Login with email</Text>
              </TabPanel>
              <TabPanel>
                <Text>Login with Phonenumber</Text>
              </TabPanel>
            </Tabs>
          </Account>
        </TabPanel>
        <CodeCard>
          <CodeBlock code={tabsCode.icons} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default TabsWithIcons;

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
