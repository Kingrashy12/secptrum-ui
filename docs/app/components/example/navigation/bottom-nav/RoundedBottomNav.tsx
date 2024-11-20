import CodeBlock from "@/components/custom/code/CodeBlock";
import { bottomNavCode } from "@/data/codes/bottomnav";
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
  TabHandle,
  styled,
  Card,
} from "secptrum-ui";

const Bn_Rounded = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
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
          <CodeBlock code={bottomNavCode.rounded} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default Bn_Rounded;

const Container = styled(Card)`
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
