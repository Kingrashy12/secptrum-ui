import CodeBlock from "@/components/custom/code/CodeBlock";
import { modeConfigCode } from "@/data/code/mode";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { TabPanel, Tabs, TabsHandle } from "secptrum-ui";

const SingleModeLayout = () => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="react">React</TabsHandle>
        <TabsHandle value="mext.js">Next.js (Page router)</TabsHandle>
        <TabsHandle value="mext.js-app">Next.js (App router)</TabsHandle>
        <TabPanel>
          <CodeBlock code={modeConfigCode.react} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={modeConfigCode.next} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={modeConfigCode.next_app} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default SingleModeLayout;
