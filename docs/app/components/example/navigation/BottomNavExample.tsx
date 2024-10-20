import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import { fonts } from "@/styles/global";
import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import {
  BottomNav,
  BottomNavTab,
  TabPanel,
  Tabs,
  TabsHandle,
} from "secptrum-ui";
import { styled } from "styled-chroma";

const BottomNavExample = ({ code }: { code: string }) => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <BottomNav className="custom-nav" variant="full">
            <BottomNavTab
              icon={AiFillHome}
              preventPush
              title="Home"
              isactive
              href="/"
            />
            <BottomNavTab
              icon={AiFillMessage}
              preventPush
              title="Chat"
              href="/chat"
            />

            <BottomNavTab
              icon={IoNotificationsCircle}
              preventPush
              title="Notifications"
              href="/notifications"
            />
            <BottomNavTab
              icon={FaUserCircle}
              preventPush
              title="Profile"
              href="/profile"
            />
          </BottomNav>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default BottomNavExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;
  /* min-height: 200px; */
  flex-direction: column;

  .custom-nav {
    position: sticky;
    bottom: 0;
    display: flex;

    p {
      font-family: ${fonts.poppins};
    }
  }

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
