'use client';

import { HeroBg, ReactImage } from '@/assets';
import React from 'react';
import Typography from '../custom/Typography';
import { Box, Button } from 'secptrum-ui';
import Media from '../custom/Media';
import { fonts } from '@/styles/global';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { sidebarlinks } from '@/data/sidebar';
import { styled } from 'styled-chroma';
import { dropIn, walkIn } from '@/lib/animation';
import AnimatedText from '../custom/AnimatedText';

const Hero_About = () => {
  return (
    <Hero>
      <AnimatedText animation={dropIn} text="Secptrum UI" />
      <TagWrapper>
        <Typography font="off" className="built">
          Built for
        </Typography>
        <ReactLogo src={ReactImage.src} width={25} height={25} />
        <Typography font="off" className="built">
          React
        </Typography>
      </TagWrapper>
      <DescWrap>
        <AnimatedText
          className="desc"
          text="A comprehensive React component library, combining modern design principles 
          with powerful customization."
          animation={walkIn}
        />
      </DescWrap>

      <BTN>
        <Link href="/docs/getting-started">
          <Button radius="lg" size="lg">
            Get started
          </Button>
        </Link>
        <Link href={sidebarlinks[1].links[0].uri}>
          <Button
            icon={RiArrowRightUpLine}
            radius="lg"
            variant="ghost"
            iconPosition="right"
            className="out_line"
            size="lg"
            mode="dark"
          >
            Components
          </Button>
        </Link>
      </BTN>
    </Hero>
  );
};

export default Hero_About;

const Hero = styled('section')`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBg.src});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding-top: 4rem;
  padding-bottom: 3rem;

  h1 {
    font-size: 70px;
    color: white;
    font-weight: 600;
  }
  .desc {
    font-weight: 600;
    color: white;
    font-size: 17px;
    line-height: 1.2rem;
  }
  .built {
    font-weight: 400;
    text-transform: uppercase;
    color: #dbd6d6;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 40px;
    }
  }
`;

const TagWrapper = styled(Box)`
  align-items: center;
  gap: 4px;
`;

const ReactLogo = styled(Media)`
  width: 25px;
  height: 25px;
`;

const BTN = styled(Box)`
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  a {
    text-decoration: none;
  }

  button {
    width: 130px;
    z-index: 10;
    font-family: ${fonts.nunito};
    font-weight: 500;
  }
`;

const DescWrap = styled(Box)`
  width: 50%;
  text-align: center;

  p {
    line-height: 1.3rem;
  }

  @media screen and (max-width: 550px) {
    width: 75%;
  }
`;
