import CodeBlock from "@/components/custom/code/CodeBlock";
import { toastCodes } from "@/data/code/toast";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { TabPanel, Tabs, TabsHandle } from "secptrum-ui";

const ToasterConfigTs = () => {
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
          <CodeBlock code={toastCodes.next_ts} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={toastCodes.next_app_ts} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default ToasterConfigTs;
