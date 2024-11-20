import CodeBlock from "../../../custom/code/CodeBlock";
import { toastCodes } from "../../../../data/codes/toast";
import React from "react";
import { TabPanel, Tabs, TabHandle, Card } from "secptrum-ui";

const ToasterConfig = () => {
  return (
    <Card>
      <Tabs variant="solid">
        <TabHandle value="vite">Vite</TabHandle>
        <TabHandle value="nextjs-(page router)">Nextjs (page router)</TabHandle>
        <TabHandle value="nextjs-(app router)">Nextjs (app router)</TabHandle>
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
    </Card>
  );
};

export default ToasterConfig;
