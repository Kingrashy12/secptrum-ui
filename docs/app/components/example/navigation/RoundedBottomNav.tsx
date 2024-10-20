import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import { fonts } from "@/styles/global";
import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
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
          <BottomNav className="custom-nav" variant="rounded">
            <BottomNavTab icon={AiFillHome} preventPush title="Home" href="/" />
            <BottomNavTab
              icon={AiFillMessage}
              preventPush
              title="Chat"
              href="/chat"
            />
            <BottomNavTab
              icon={GrAddCircle}
              title="Add post"
              href="/add"
              iconSize={26}
              preventPush
            />

            <BottomNavTab
              icon={IoSettings}
              title="Settings"
              href="/settings"
              iconSize={26}
              preventPush
            />
            <BottomNavTab
              icon={FaUserCircle}
              title="Profile"
              isactive
              href="/profile"
              preventPush
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
  flex-direction: column;
  z-index: 0;

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
