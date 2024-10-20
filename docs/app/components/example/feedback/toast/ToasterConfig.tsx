import CodeBlock from "@/components/custom/code/CodeBlock";
import { toastCodes } from "@/data/code/toast";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { TabPanel, Tabs, TabsHandle } from "secptrum-ui";

const ToasterConfig = () => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="react">React</TabsHandle>
        <TabsHandle value="nextjs-(page router)">
          Nextjs (page router)
        </TabsHandle>
        <TabsHandle value="nextjs-(app router)">Nextjs (app router)</TabsHandle>
        <TabPanel>
          <CodeBlock code={toastCodes.cra} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={toastCodes.next} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={toastCodes.next_app} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default ToasterConfig;
