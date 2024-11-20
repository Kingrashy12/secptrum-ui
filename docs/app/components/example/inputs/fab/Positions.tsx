import CodeBlock from "@/components/custom/code/CodeBlock";
import { fabCode } from "@/data/codes/fab";
import React from "react";
import {
  HiArchiveBox,
  HiOutlineNoSymbol,
  HiOutlinePaperAirplane,
  HiTrash,
} from "react-icons/hi2";
import { IoAdd } from "react-icons/io5";
import {
  Stack,
  Tabs,
  TabHandle,
  styled,
  Card,
  TabPanel,
  Fab,
} from "secptrum-ui";

const FabPosition = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="tab">
          <Stack wrap>
            <Fab moveOnScroll position="top-left">
              <HiOutlinePaperAirplane />
            </Fab>
            <Fab moveOnScroll colorScheme="secondary" position="top-center">
              <HiArchiveBox />
            </Fab>
            <Fab moveOnScroll colorScheme="danger" position="top-right">
              <HiOutlineNoSymbol />
            </Fab>

            <Fab moveOnScroll position="bottom-left">
              <IoAdd />
            </Fab>

            <Fab moveOnScroll colorScheme="danger" position="bottom-right">
              <HiTrash />
            </Fab>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={fabCode.position} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default FabPosition;

const Container = styled(Card)`
  width: 100%;
  min-height: 250px;
  max-height: 100%;
  position: relative;

  .tab {
    transform: translateY(4.5rem);
  }
`;
