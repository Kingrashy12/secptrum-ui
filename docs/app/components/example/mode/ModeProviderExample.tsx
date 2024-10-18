import React from 'react';
import { Card, TabPanel, Tabs, TabsHandle } from 'secptrum-ui';
import PlainReactJsx from './js/Plain';
import PlainTsx from './ts/Plain';
import NextJsx from './js/Next';
import NextTsx from './ts/Next';

const ModeProviderExample = () => {
  return (
    <Card>
      <Tabs>
        <TabsHandle value="react-jsx">React (jsx)</TabsHandle>
        <TabsHandle value="react-tsx">React (tsx)</TabsHandle>
        <TabsHandle value="next-jsx">Next.js (jsx)</TabsHandle>
        <TabsHandle value="next-tsx">Next.js (tsx)</TabsHandle>
        <TabPanel>
          <PlainReactJsx />
        </TabPanel>
        <TabPanel>
          <PlainTsx />
        </TabPanel>
        <TabPanel>
          <NextJsx />
        </TabPanel>
        <TabPanel>
          <NextTsx />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ModeProviderExample;
