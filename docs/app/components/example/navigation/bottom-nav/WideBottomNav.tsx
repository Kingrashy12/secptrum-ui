import CodeBlock from "@/components/custom/code/CodeBlock";
import { bottomNavCode } from "@/data/codes/bottomnav";
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
  TabHandle,
  styled,
  Card,
} from "secptrum-ui";

const BN_WideBottom = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <BottomNav className="custom-nav" variant="wide">
            <BottomNavTab icon={AiFillHome} preventPush title="Home" href="/" />
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
              iconSize={26}
              isactive
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
          <CodeBlock code={bottomNavCode.wide} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default BN_WideBottom;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 0;
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
