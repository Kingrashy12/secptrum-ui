import CodeBlock from "@/components/custom/code/CodeBlock";
import { fabCode } from "@/data/codes/fab";
import React from "react";
import { HiArchiveBox, HiTrash } from "react-icons/hi2";
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

const FabColorScheme = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap>
            <Fab moveOnScroll position="top-left">
              <IoAdd />
            </Fab>
            <Fab moveOnScroll colorScheme="secondary" position="top-center">
              <HiArchiveBox />
            </Fab>
            <Fab moveOnScroll colorScheme="danger" position="top-right">
              <HiTrash />
            </Fab>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={fabCode.colorScheme} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default FabColorScheme;

const Container = styled(Card)`
  width: 100%;
  min-height: 180px;
  max-height: 100%;
  position: relative;
`;
