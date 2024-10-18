import ComponentsBadge from '@/components/custom/ComponentsBadge';
import NastedList, { ListBody } from '@/components/custom/docs/NastedList';
import PropOptions from '@/components/custom/docs/PropOptions';
import { PropBadge } from '@/styles/custom';
import React from 'react';

export const TabsApi = () => {
  return (
    <NastedList id="tabs-props">
      <p>
        <ComponentsBadge>Tabs</ComponentsBadge>
      </p>
      <ListBody>
        Tabs component that manages a collection of Tab items.
      </ListBody>
      <ListBody>
        This component provides a navigational interface for switching between
        different views or sections. It typically contains multiple{' '}
        <ComponentsBadge>TabsHandle</ComponentsBadge> components, each
        representing a different tab.
      </ListBody>
      <PropOptions italic header="Tabs Props">
        <li>
          <PropBadge>variant</PropBadge>: The visual style variant for the tab
          list, either <PropBadge>line</PropBadge> (with an underline) or{' '}
          <PropBadge>solid</PropBadge> (with filled background).
          <br />
          Default: <PropBadge>&quot;line&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>mode</PropBadge>: Allows developers to integrate with apps
          that support light/dark modes or provide a custom design.
          <br />
          Default: <PropBadge>&quot;light&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>fullWidth</PropBadge>: Determines whether the Tabs should
          stretch to full width.
        </li>
        <li>
          <PropBadge>backgroundColor</PropBadge>: Sets the background color of
          the TabsList.
          <br />
          Default: <PropBadge>&quot;inherit from theme&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>lineBorderColor</PropBadge>: Sets the color of the line
          border on <PropBadge>line</PropBadge> variant.
          <br />
          Default: <PropBadge>&quot;inherit from theme&quot;</PropBadge>.
        </li>
      </PropOptions>
    </NastedList>
  );
};

export const TabsHandleApi = () => {
  return (
    <NastedList id="tabshandle-props">
      <p>
        <ComponentsBadge>TabsHandle</ComponentsBadge>
      </p>
      <ListBody>
        Tab handle component representing an individual tab within the Tabs.
      </ListBody>
      <ListBody>
        Each <ComponentsBadge>TabsHandle</ComponentsBadge> acts as a clickable
        element that allows users to switch between different content panels.
      </ListBody>
      <PropOptions italic header="TabsHandle Props">
        <li>
          <PropBadge>activeColor</PropBadge>: The color to be applied when the
          tab is active.
          <br />
          Default: <PropBadge>&quot;inherit from theme&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>activeSolidColor</PropBadge>: The color to be applied when
          the tab is active on <PropBadge>solid</PropBadge> variant.
          <br />
          Default: <PropBadge>&quot;inherit from theme&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>inActiveColor</PropBadge>: The color to be applied when the
          tab is inactive.
          <br />
          Default: <PropBadge>&quot;inherit from theme&quot;</PropBadge>.
        </li>
        <li>
          <PropBadge>value</PropBadge>: The unique identifier or value for the
          tab, typically used to track the selected tab.
        </li>
        <li>
          <PropBadge>disabled</PropBadge>: If true, disables the tab, preventing
          interaction.
        </li>
        <li>
          <PropBadge>className</PropBadge>: Optional additional CSS class for
          styling the TabsHandle.
        </li>
        <li>
          <PropBadge>icon</PropBadge>: Accepts a JSX element representing an
          icon, such as {'`icon={FaUser}`'} from react-icons. Avoid wrapping the
          icon in a fragment {'(`<>...</>` or `<FaUser/>`)'} or other component,
          as this may cause the component to break.
        </li>
        <li>
          <PropBadge>iconSize</PropBadge>: The size of the icon in number.
          <br />
          Default: <PropBadge>&quot;16&quot;</PropBadge>.
        </li>
      </PropOptions>
    </NastedList>
  );
};

export const TabPanelApi = () => {
  return (
    <NastedList id="tabpanel-props">
      <p>
        <ComponentsBadge>TabPanel</ComponentsBadge>
      </p>
      <ListBody>
        Content panel component associated with a specific tab in the Tabs
        component.
      </ListBody>
      <ListBody>
        This is a simple wrapper around a standard HTML{' '}
        <ComponentsBadge>{'<div>'}</ComponentsBadge> element, used to display
        the content associated with the active tab. It does not accept any
        additional props beyond the standard HTML attributes.
      </ListBody>
    </NastedList>
  );
};
