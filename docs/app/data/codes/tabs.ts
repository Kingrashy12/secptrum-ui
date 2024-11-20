export const tabsCode = {
  basic: `
import { Tabs, TabHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs>
         <TabHandle value="overview">Overview</TabHandle>
         <TabHandle value="settings">Settings</TabHandle>
         <TabHandle value="profile">Profile</TabHandle>

         <TabPanel>
         <Typography theme={theme}>Overview Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Settings Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Profile Content</Typography>
         </TabPanel>
         </Tabs>
        </Card>
  );
 };
    `,
  solid: `
import { Tabs, TabHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs variant='solid'>
         <TabHandle value="overview">Overview</TabHandle>
         <TabHandle value="settings">Settings</TabHandle>
         <TabHandle value="profile">Profile</TabHandle>

         <TabPanel>
         <Typography theme={theme}>Overview Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Settings Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Profile Content</Typography>
         </TabPanel>
         </Tabs>
        </Card>
  );
 };
    `,
  disabled: `
import { Tabs, TabHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs>
         <TabHandle value="overview">Overview</TabHandle>
         <TabHandle value="settings">Settings</TabHandle>
         <TabHandle value="profile" disabled>Profile</TabHandle>

         <TabPanel>
         <Typography theme={theme}>Overview Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Settings Content</Typography>
         </TabPanel>
         <TabPanel>
         <Typography theme={theme}>Profile Content</Typography>
         </TabPanel>
         </Tabs>
        </Card>
  );
 };
    `,
  fullWidth: `
import { Tabs, TabHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Tabs fullWidth>
          <TabHandle value="tab1">Tab 1</TabHandle>
          <TabHandle value="tab2">Tab 2</TabHandle>

          <TabPanel>
            <Text theme={theme}>Tab1 Content</Text>
          </TabPanel>
          <TabPanel>
            <Text theme={theme}>Tab2 Content</Text>
          </TabPanel>
          </Tabs>
          <Tabs fullWidth variant="solid">
            <TabHandle value="tab1">Tab 1</TabHandle>
            <TabHandle value="tab2">Tab 2</TabHandle>

            <TabPanel>
              <Text theme={theme}>Tab1 Content</Text>
            </TabPanel>
            <TabPanel>
              <Text theme={theme}>Tab2 Content</Text>
            </TabPanel>
          </Tabs>
      </Card>
  );
 };
    `,
  icons: `
import { Tabs, TabHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";
import { MdAlternateEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs variant="solid">
            <TabHandle value="email" icon={MdAlternateEmail}>
              Email
            </TabHandle>
            <TabHandle value="phone" icon={RiPhoneFill}>
              Phone
            </TabHandle>

            <TabPanel>
              <Text theme={theme}>Login with email</Text>
            </TabPanel>
            <TabPanel>
              <Text theme={theme}>Login with Phonenumber</Text>
            </TabPanel>
          </Tabs>
        </Card>
  );
 };
    `,
};
