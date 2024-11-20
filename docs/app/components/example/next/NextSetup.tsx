import React from 'react';
import { Box, TabPanel, Tabs, TabHandle } from 'secptrum-ui';
import App_Setup from './App_Setup';
import Page_setup from './Page_setup';
import Enjoy from '@/components/custom/docs/Enjoy';

const NextSetup = () => {
  return (
    <Box direction="column" spacing="md">
      <Tabs variant="solid">
        <TabHandle value="app-router">App Router</TabHandle>
        <TabHandle value="pages-router">Pages Router</TabHandle>
        <TabPanel>
          <App_Setup />
        </TabPanel>
        <TabPanel>
          <Page_setup />
        </TabPanel>
      </Tabs>
      <Enjoy />
    </Box>
  );
};

export default NextSetup;
