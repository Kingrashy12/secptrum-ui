"use client";

import { Container, HeroContent, HeroSection } from "../../styles/home.styled";
import React from "react";
import Header from "./Header";
import { Box, Button, toast } from "secptrum-ui";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";

const Hero_About = () => {
  return (
    <Container>
      <Header />
      <HeroSection>
        <HeroContent>
          <h1>
            A <p className="marker-underline">Comprehensive</p> React component
            library
          </h1>
          <span>
            Build with speed and ease using our collection of beautiful,
            reusable components.
          </span>
          <Box centered spacing="lg" marginTop="lg">
            <Link href="/docs/getting-started/installation">
              <Button size="xl" radius="xl">
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              size="xl"
              radius="xl"
              rightIcon={RiArrowRightUpLine}
              iconSize={20}
              onClick={() =>
                toast.info("Coming Soon...", { transition: "dropIn" })
              }
            >
              Template
            </Button>
          </Box>
        </HeroContent>
      </HeroSection>
    </Container>
  );
};

export default Hero_About;
