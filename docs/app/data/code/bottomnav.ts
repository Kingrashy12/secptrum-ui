export const bottomNavCode = {
  ex: `
import { BottomNav, BottomNavTab } from 'secptrum-ui';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { IoNotificationsCircle } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';

export default function BottomNavExample = () => {
    return (
      <BottomNav className="custom-nav" variant="full">
        <BottomNavTab icon={AiFillHome} title="Home" href="/" />
        <BottomNavTab icon={AiFillMessage} title="Chat" href="/chat" />

        <BottomNavTab
         icon={IoNotificationsCircle}
         title="Notifications"
         href="/notifications"
        />
        <BottomNavTab icon={FaUserCircle} title="Profile" href="/profile" />
     </BottomNav>
    )
}
    `,
  wide: `
import { BottomNav, BottomNavTab } from 'secptrum-ui';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { IoNotificationsCircle } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';

export default function BottomNavWide = () => {
    return (
      <BottomNav className="custom-nav" variant="wide">
        <BottomNavTab icon={AiFillHome} title="Home" href="/" />
        <BottomNavTab icon={AiFillMessage} title="Chat" href="/chat" />

        <BottomNavTab
         icon={IoNotificationsCircle}
         title="Notifications"
         href="/notifications"
        />
        <BottomNavTab icon={FaUserCircle} title="Profile" href="/profile" />
     </BottomNav>
    )
}
    `,
  rounded: `
import { BottomNav, BottomNavTab } from 'secptrum-ui';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { IoSettings } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';

export default function BottomNavRounded = () => {
    return (
      <BottomNav className="custom-nav" variant="rounded">
        <BottomNavTab icon={AiFillHome} title="Home" href="/" />
        <BottomNavTab icon={AiFillMessage} title="Chat" href="/chat" />

        <BottomNavTab
              icon={GrAddCircle}
              title="Add post"
              href="/add"
              iconSize={26}
            />

            <BottomNavTab
              icon={IoSettings}
              title="Settings"
              href="/settings"
              iconSize={26}
            />
        <BottomNavTab icon={FaUserCircle} title="Profile" href="/profile" />
     </BottomNav>
    )
}
    `,
};
