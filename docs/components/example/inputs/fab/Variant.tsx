import CodeBlock from "../../../custom/code/CodeBlock";
import { fabCode } from "../../../../data/codes/fab";
import React from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import {
  Stack,
  Tabs,
  TabHandle,
  Card,
  styled,
  TabPanel,
  Fab,
} from "secptrum-ui";

const FabVariant = () => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel>
          <Stack align="horizontal" wrap>
            <Fab moveOnScroll size="lg" variant="light" position="top-left">
              <IoAdd />
            </Fab>
            <Fab size="lg" moveOnScroll position="top-right">
              <IoClose size={23} />
            </Fab>
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={fabCode.variant} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default FabVariant;

const Container = styled(Card)`
  width: 100%;
  min-height: 180px;
  max-height: 100%;
  position: relative;
`;
