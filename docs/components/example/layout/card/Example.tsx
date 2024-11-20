import { Typography } from "../../..";
import CodeBlock from "../../../custom/code/CodeBlock";
import { cardCodes } from "../../../../data/codes/card";
import React from "react";
import {
  Box,
  Tabs,
  TabHandle,
  styled,
  TabPanel,
  Button,
  toast,
  Card,
} from "secptrum-ui";

const CardExample = () => {
  return (
    <Container fullWidth centered>
      <Tabs variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>

        <TabPanel style={{ width: "100%" }}>
          <CardWrap>
            <Typography as="h2">Welcome to Secptrum UI</Typography>
            <Typography>
              This card uses the default theme and shadowing for a raised
              effect.
            </Typography>
            <Button
              onClick={() =>
                toast.success("Welcome! I hope you'll stick around 🙂")
              }
            >
              Click me
            </Button>
          </CardWrap>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={cardCodes.ex} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default CardExample;

const Container = styled(Box)`
  flex-direction: column;
  gap: 20px;
`;

const CardWrap = styled(Card)`
  width: 350px;
  align-self: center;

  h2 {
    color: ${(props) => props.theme.colors?.text};
  }

  p {
    color: ${(props) => props.theme.colors?.body};
  }
`;
