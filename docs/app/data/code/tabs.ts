export const tabsCode = {
  basic: `
import { Tabs, TabsHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs>
         <TabsHandle value="overview">Overview</TabsHandle>
         <TabsHandle value="settings">Settings</TabsHandle>
         <TabsHandle value="profile">Profile</TabsHandle>

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
import { Tabs, TabsHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs variant='solid'>
         <TabsHandle value="overview">Overview</TabsHandle>
         <TabsHandle value="settings">Settings</TabsHandle>
         <TabsHandle value="profile">Profile</TabsHandle>

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
import { Tabs, TabsHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs>
         <TabsHandle value="overview">Overview</TabsHandle>
         <TabsHandle value="settings">Settings</TabsHandle>
         <TabsHandle value="profile" disabled>Profile</TabsHandle>

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
import { Tabs, TabsHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Tabs fullWidth>
          <TabsHandle value="tab1">Tab 1</TabsHandle>
          <TabsHandle value="tab2">Tab 2</TabsHandle>

          <TabPanel>
            <Text theme={theme}>Tab1 Content</Text>
          </TabPanel>
          <TabPanel>
            <Text theme={theme}>Tab2 Content</Text>
          </TabPanel>
          </Tabs>
          <Tabs fullWidth variant="solid">
            <TabsHandle value="tab1">Tab 1</TabsHandle>
            <TabsHandle value="tab2">Tab 2</TabsHandle>

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
import { Tabs, TabsHandle, TabPanel, Card, useTheme } from "secptrum-ui";
import { Typography } from "@/components";
import { MdAlternateEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

 const BasicTabExample = () => {
 const { theme } = useTheme();

  return (
      <Card>
        <Typography theme={theme} as="h4">Account</Typography>
         <Tabs variant="solid">
            <TabsHandle value="email" icon={MdAlternateEmail}>
              Email
            </TabsHandle>
            <TabsHandle value="phone" icon={RiPhoneFill}>
              Phone
            </TabsHandle>

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
