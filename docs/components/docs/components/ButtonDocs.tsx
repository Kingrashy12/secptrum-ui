"use client";

import ComponentsBadge from "../../custom/ComponentsBadge";
import ApiReference from "../../custom/docs/ApiReference";
import HeaderText from "../../custom/docs/HeaderText";
import ButtonDemo from "../../example/inputs/Button";
import ButtonIcon from "../../example/inputs/button/icon";
import ButtonLoading from "../../example/inputs/button/Loading";
import ButtonRadius from "../../example/inputs/button/radius";
import Sizes from "../../example/inputs/button/sizes";
import Variants from "../../example/inputs/button/variant";
import DocsLayout from "../../layout/DocsLayout";
import { buttonRef } from "../../../data/reference/button";
import showLoader from "../../../hooks/showLoader";
import { DocText, LargeTextHeader } from "../../../styles/docs/docs.styled";
import { Divider } from "../../../styles/global";
import React from "react";
import { Box } from "secptrum-ui";

export const ButtonDocs = () => {
  showLoader();
  return (
    <DocsLayout>
      <Box direction="column" spacing="md" width="100%">
        <LargeTextHeader>Button</LargeTextHeader>
        <DocText onHeader>
          A basic component that is used to trigger an action.
        </DocText>
      </Box>
      <Divider style={{ margin: "12px" }} />
      <Box fullWidth>
        <ButtonDemo />
      </Box>
      <Box direction="column" spacing="md" id="examples">
        <HeaderText id="examples">Examples</HeaderText>
      </Box>
      <Box direction="column" spacing="md" id="variants">
        <HeaderText id="variants" as="h3">
          Variants
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>variant</ComponentsBadge> prop to change the
          visual style of the button.
        </DocText>
        <Variants />
      </Box>
      <Box direction="column" spacing="md" id="sizes">
        <HeaderText id="sizes" as="h3">
          Sizes
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>size</ComponentsBadge> prop to change the
          size of the button.
        </DocText>
        <Sizes />
      </Box>
      <Box direction="column" spacing="md" id="radius">
        <HeaderText id="radius" as="h3">
          Radius
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>radius</ComponentsBadge> prop to change the
          radius of the button.
        </DocText>
        <ButtonRadius />
      </Box>
      <Box direction="column" spacing="md" id="icon">
        <HeaderText id="icon" as="h3">
          Icon
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>leftIcon</ComponentsBadge> or{" "}
          <ComponentsBadge>rightIcon</ComponentsBadge> prop to add an icon to
          the button.
        </DocText>
        <ButtonIcon />
      </Box>
      <Box direction="column" spacing="md" id="loading">
        <HeaderText id="loading" as="h3">
          Loading
        </HeaderText>
        <DocText>
          Use the <ComponentsBadge>isLoading</ComponentsBadge> prop to add a
          loading indicator to the button.
        </DocText>
        <ButtonLoading />
      </Box>
      <Box direction="column" spacing="md" id="api-reference">
        <HeaderText id="api-reference">API Reference</HeaderText>
        <DocText>
          This component extends the <ComponentsBadge>button</ComponentsBadge>
          element and accepts all its props.
        </DocText>

        <ApiReference reference={buttonRef} />
      </Box>
    </DocsLayout>
  );
};
