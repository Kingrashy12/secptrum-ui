import NastedList from "@/components/custom/docs/NastedList";
import PropOptions from "@/components/custom/docs/PropOptions";
import { PropBadge } from "@/styles/custom";
import Link from "next/link";
import React from "react";

const ToastProps = () => {
  return (
    <NastedList>
      <PropOptions italic>
        <li>
          <PropBadge>message*</PropBadge>: String representing the toast
          message.
        </li>
        <li>
          <PropBadge>position</PropBadge>: Optional string specifying the toast
          position (e.g., <PropBadge>top-left</PropBadge>,{" "}
          <PropBadge>top-right</PropBadge>).
        </li>
        <li>
          <PropBadge>className</PropBadge>: Optional string to add custom CSS
          classes.
        </li>
        <li>
          <Link href="#transition-effect" className="a">
            <PropBadge>transition</PropBadge>:
          </Link>{" "}
          Optional transition animation, (default: <PropBadge>walkIn</PropBadge>
          ).
        </li>
      </PropOptions>
    </NastedList>
  );
};

export default ToastProps;

export const ToastPositions = () => (
  <NastedList id="positions">
    <PropOptions italic header="Positions">
      <li>
        <PropBadge>top-left</PropBadge>
      </li>
      <li>
        <PropBadge>top-right</PropBadge>
      </li>
      <li>
        <PropBadge>bottom-left</PropBadge>
      </li>
      <li>
        <PropBadge>bottom-right</PropBadge>
      </li>
    </PropOptions>
  </NastedList>
);

export const ToastTypes = () => (
  <NastedList id="types">
    <PropOptions italic header="Types">
      <li>
        <PropBadge>info</PropBadge>
      </li>
      <li>
        <PropBadge>error</PropBadge>
      </li>
      <li>
        <PropBadge>warning</PropBadge>
      </li>
      <li>
        <PropBadge>success</PropBadge>
      </li>
    </PropOptions>
  </NastedList>
);

export const ToastTransition = () => (
  <NastedList id="transition-options">
    <PropOptions italic header="Transition Options">
      <li>
        <PropBadge>walkIn</PropBadge>: The toast will animate in from a
        walking-like motion (diagonal movement) from the bottom.
      </li>
      <li>
        <PropBadge>slideIn</PropBadge>: The toast will slide in from the right
        side of the screen.
      </li>
      <li>
        <PropBadge>dropIn</PropBadge>: The toast will drop down from the top,
        mimicking a dropping effect.
      </li>
      <li>
        <PropBadge>popIn</PropBadge>: The toast will scale in, creating a pop
        effect.
      </li>
    </PropOptions>
  </NastedList>
);
