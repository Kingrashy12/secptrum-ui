import { DocText } from "@/styles/docs/docs.styled";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Box, Button, Stack } from "secptrum-ui";
import HeaderText from "./HeaderText";
import { sidebarLinks } from "@/data/sidebar";

const Enjoy = () => {
  return (
    <Box direction="column" spacing="md" id="enjoy!">
      <HeaderText id="enjoy!" as="h3">
        Enjoy!
      </HeaderText>
      <DocText>
        Congrats on setting up Secptrum UI! Start building and explore our
        examples to make the most of its features.
      </DocText>
      <Stack>
        <Link href={sidebarLinks[1].links[0].uri}>
          <Button
            size="lg"
            radius="lg"
            rightIcon={RiArrowRightLine}
            iconSize={20}
          >
            Start Building
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Enjoy;
