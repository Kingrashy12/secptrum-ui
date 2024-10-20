"use client";

import PropOptions from "@/components/custom/docs/PropOptions";
import DocsLayout from "@/components/layout/DocsLayout";

import {
  BodyText,
  LargeTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import React from "react";
import ToastProps, {
  ToastPositions,
  ToastTransition,
  ToastTypes,
} from "../../components/Toast";
import DocInfo from "@/components/custom/docs/DocInfo";
import HeaderText from "@/components/custom/docs/HeaderText";
import BasicToast from "@/components/preview/toast/Basic";
import PositionToast from "@/components/preview/toast/Position";
import { toastCodes } from "@/data/code/toast";
import TransitionsToast from "@/components/preview/toast/Transitions";
import { Divider } from "@/styles/global";
import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ToasterConfig from "@/components/example/feedback/toast/ToasterConfig";
import ToasterConfigTs from "@/components/example/feedback/toast/ToasterConfigTs";

const Toast = () => {
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1">Toast</LargeTextHeader>
        <BodyText>
          A <ComponentsBadge>Toast</ComponentsBadge> is a lightweight
          notification designed to give users feedback or information without
          interrupting their workflow. Typically used for success messages,
          warnings, errors, or simple notifications, toasts appear briefly and
          automatically disappear after a short duration.
        </BodyText>
      </TextContent_Wrap>
      <Divider style={{ marginBottom: 16 }} />
      <ToastProps />
      <TextContent_Wrap id="basic-toast">
        <HeaderText id="basic-toast">Basic Toast</HeaderText>
      </TextContent_Wrap>
      <BasicToast code={toastCodes.basic} />
      <TextContent_Wrap id="position-toast">
        <HeaderText id="position-toast">Position Toast</HeaderText>
      </TextContent_Wrap>
      <PositionToast code={toastCodes.position} />
      <TextContent_Wrap id="transition-effect">
        <HeaderText id="transition-effect">Toast Transition Effects</HeaderText>
        <BodyText>
          The Toast component comes with four built-in transition effects to
          enhance the way notifications appear on the screen. You can choose
          between <ComponentsBadge>walkIn</ComponentsBadge>,{" "}
          <ComponentsBadge>slideIn</ComponentsBadge>,{" "}
          <ComponentsBadge>dropIn</ComponentsBadge>, and{" "}
          <ComponentsBadge>popIn</ComponentsBadge> transitions depending on the
          type of animation you want for your toast notifications.
        </BodyText>
      </TextContent_Wrap>

      <ToastTransition />
      <TransitionsToast code={toastCodes.transition} />
      <div style={{ marginTop: 16 }} />
      <ToastPositions />
      <div style={{ marginTop: 16 }} />
      <ToastTypes />
      <DocInfo type="info" mt={10}>
        <BodyText>
          To use the <ComponentsBadge>toast</ComponentsBadge> functionality, you
          must import and render the <ComponentsBadge>Toaster</ComponentsBadge>{" "}
          component in your root layout or root file.
        </BodyText>
      </DocInfo>
      <PropOptions hideHeader>
        <li>JavaScript</li>
      </PropOptions>
      <ToasterConfig />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>TypeScript</li>
      </PropOptions>
      <ToasterConfigTs />
    </DocsLayout>
  );
};

export default Toast;
