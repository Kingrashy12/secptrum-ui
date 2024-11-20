import ComponentsBadge from "@/components/custom/ComponentsBadge";
import ApiReference from "@/components/custom/docs/ApiReference";
import DocsBox from "@/components/custom/docs/Box";
import HeaderText from "@/components/custom/docs/HeaderText";
import NormalInfo from "@/components/custom/docs/NormalInfo";
import BasicIcon from "@/components/example/utilities/icon/basic";
import CustomSvg from "@/components/example/utilities/icon/custom-svg";
import DynamicIcons from "@/components/example/utilities/icon/dynamic";
import DocsLayout from "@/components/layout/DocsLayout";
import { iconRef } from "@/data/reference/icon";
import { DocText, LargeTextHeader } from "@/styles/docs/docs.styled";
import { Divider, SpaceTop } from "@/styles/global";
import Link from "next/link";
import React from "react";
import { colors } from "secptrum-ui";

const IconDocs = () => {
  return (
    <DocsLayout>
      <DocsBox>
        <LargeTextHeader>Icon</LargeTextHeader>
        <DocText onHeader>Used for displaying an svg icon</DocText>
      </DocsBox>
      <Divider style={{ marginTop: 10 }} />
      <SpaceTop marginTop="lg" />
      <DocsBox>
        <BasicIcon />
      </DocsBox>
      <DocsBox id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </DocsBox>
      <DocsBox id="react-icons">
        <HeaderText id="react-icons" as="h3">
          React Icons
        </HeaderText>
        <DocText>
          It&apos;s recommended to use{" "}
          <Link
            href="https://react-icons.github.io/react-icons"
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.blue[500] }}
          >
            React Icons
          </Link>{" "}
          because it offers a large and versatile icon set.
        </DocText>
      </DocsBox>
      <DocsBox id="custom-svg">
        <HeaderText id="custom-svg" as="h3">
          Custom SVGs
        </HeaderText>
        <DocText>
          If you need to use a custom SVG icon instead of one from the React
          Icons library, the <ComponentsBadge>Icon</ComponentsBadge> Icon
          component supports this by accepting custom SVG elements directly
          through the <ComponentsBadge>icon</ComponentsBadge> prop
        </DocText>
        <CustomSvg />
      </DocsBox>
      <DocsBox id="dynamic-icons">
        <HeaderText id="dynamic-icons" as="h3">
          Dynamic Icons
        </HeaderText>
        <DocText>
          You can dynamically set the icon based on user interactions or props:
        </DocText>
        <DynamicIcons />
      </DocsBox>
      <SpaceTop marginTop="lg" />
      <NormalInfo>
        <DocText>
          <b>Note:</b> Avoid wrapping the icon in a fragment ({"<>...</>"} or{" "}
          {"<FaUser/>"}) as this may cause the component to break.
        </DocText>
      </NormalInfo>
      <DocsBox id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <ApiReference reference={iconRef} />
      </DocsBox>
    </DocsLayout>
  );
};

export default IconDocs;
