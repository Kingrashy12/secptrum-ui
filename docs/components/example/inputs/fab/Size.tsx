import CodeBlock from "../../../custom/code/CodeBlock";
import { fabCode } from "../../../../data/codes/fab";
import React from "react";
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

const FabSize = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack align="horizontal" wrap>
            <Fab moveOnScroll position="top-left">
              <IoAdd />
            </Fab>
            <Fab size="lg" moveOnScroll position="top-center">
              <IoAdd />
            </Fab>
            <Fab size="xl" moveOnScroll position="top-right">
              <IoAdd />
            </Fab>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={fabCode.size} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default FabSize;

const Container = styled(Card)`
  width: 100%;
  min-height: 180px;
  max-height: 100%;
  position: relative;
`;
