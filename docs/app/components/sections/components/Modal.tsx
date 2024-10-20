import ComponentsBadge from '@/components/custom/ComponentsBadge';
import NastedList, { ListBody } from '@/components/custom/docs/NastedList';
import PropOptions from '@/components/custom/docs/PropOptions';
import { PropBadge } from '@/styles/custom';
import Link from 'next/link';
import React from 'react';

const ModalProps = () => {
  return (
    <NastedList>
      <p>
        <ComponentsBadge>Modal</ComponentsBadge>
      </p>
      <ListBody>
        The outermost container for the modal, responsible for handling
        visibility and overlay.
      </ListBody>
      <PropOptions italic header="Modal Props" spacing="xl">
        <li>
          <PropBadge>open*</PropBadge>: Boolean indicating whether the modal is
          open.
        </li>
        <li>
          <PropBadge>onClose*</PropBadge>: A function that is triggered when the
          modal needs to be closed.
        </li>
        <li>
          <PropBadge>preventClose</PropBadge>: Prevents the modal from closing
          if an action is in progress.
        </li>
        <li>
          <PropBadge>zIndex</PropBadge>: Determines the stack order of the
          backdrop, ensuring it appears above other content but behind
          interactive elements. (default: <PropBadge>500</PropBadge>)
        </li>
        <li>
          <PropBadge>className</PropBadge>: Optional string to add custom CSS
          classes.
        </li>
        <li>
          <PropBadge>mode</PropBadge>: Sets the theme mode for the backdrop
          component.
        </li>
        <li>
          <PropBadge>style</PropBadge>: Optional object to add custom inline
          styles.
        </li>
        <li>
          <PropBadge>glassEffect</PropBadge>: Controls the intensity of the
          backdrop glass effect (blur).
        </li>
      </PropOptions>
      {/* Panel */}
      <p>
        <ComponentsBadge>ModalPanel</ComponentsBadge>
      </p>
      <ListBody>
        The main content area of the modal, defining its size and shape.
      </ListBody>
      <PropOptions italic header="ModalPanel Props">
        <li>
          <PropBadge>size</PropBadge>: Determines the width of the modal. It can
          be <PropBadge>sm</PropBadge>, <PropBadge>md</PropBadge>,{' '}
          <PropBadge>lg</PropBadge>, <PropBadge>xl</PropBadge> or{' '}
          <PropBadge>full</PropBadge>. (default: <PropBadge>lg</PropBadge>).
        </li>
        <li>
          <PropBadge>transition</PropBadge>: Optional transition animation,
          Options: (<PropBadge>walkIn</PropBadge>, <PropBadge>dropIn</PropBadge>
          , <PropBadge>slideIn</PropBadge>) (default:{' '}
          <PropBadge>walkIn</PropBadge>).
        </li>
        <li>
          <PropBadge>className</PropBadge>:Optional string to add custom CSS
          classes.
        </li>
        <li>
          <PropBadge>style</PropBadge>: Optional object to add custom inline
          styles.
        </li>
      </PropOptions>
      {/* Title */}
      <p>
        <ComponentsBadge>ModalTitle</ComponentsBadge>
      </p>
      <ListBody>
        Displays the modal title and optionally includes close icon.
      </ListBody>
      <PropOptions italic header="ModalTitle Props">
        <li>
          <PropBadge>title*</PropBadge>: String representing the modal title.
        </li>
        <li>
          <PropBadge>onClose</PropBadge>: Optional function to call when the
          close button is clicked.
        </li>
        <li>
          <PropBadge>showClose</PropBadge>: Optional boolean to show/hide the
          close icon (default: <PropBadge>false</PropBadge>).
        </li>
        <li>
          <PropBadge>preventClose</PropBadge>: Prevents the modal from closing
          if an action is in progress.
        </li>
        <li>
          <PropBadge>iconStyle</PropBadge>: Optional CSS properties for the
          close icon.
        </li>
        <li>
          <PropBadge>iconClass</PropBadge>: Optional string for custom class
          names for the close icon.
        </li>
        <li>
          <PropBadge>iconSize</PropBadge>: Optional number for the size of the
          close icon (default: 25).
        </li>
        <li>
          <PropBadge>titleClassName</PropBadge>: Optional string for custom
          class names for the title.
        </li>
        <li>
          <PropBadge>titleStyle</PropBadge>: Optional style object for custom
          styles for the title.
        </li>
      </PropOptions>
      {/* Content */}
      <p>
        <ComponentsBadge>ModalContent</ComponentsBadge>
      </p>
      <ListBody>Holds the main content of the modal.</ListBody>
      <PropOptions italic header="ModalContent Props">
        <li>
          <PropBadge>children</PropBadge>: Content to display within the modal.
        </li>
        <li>
          Inherits all props from{' '}
          <Link href="/docs/components/layout/box">
            <PropBadge>Box</PropBadge>
          </Link>{' '}
          components.
        </li>
        <li>
          <PropBadge>space</PropBadge>: Optional gap size between content
          (default: <PropBadge>16</PropBadge>).
        </li>
      </PropOptions>
      {/* Footer */}
      <p>
        <ComponentsBadge>ModalFooter</ComponentsBadge>
      </p>
      <ListBody>
        The footer section of the modal, typically containing action buttons
        like &quot;Close&quot;, &quot;Save&quot;, or &quot;Cancel&quot;.
      </ListBody>
      <PropOptions italic header="ModalFooter Props">
        <li>
          <PropBadge>position</PropBadge>: Optional positioning for the buttons
          (default: <PropBadge>right</PropBadge>).
        </li>
        <li>
          <PropBadge>space</PropBadge>: Optional gap size between buttons
          (default: <PropBadge>10</PropBadge>).
        </li>
      </PropOptions>
    </NastedList>
  );
};

export default ModalProps;
