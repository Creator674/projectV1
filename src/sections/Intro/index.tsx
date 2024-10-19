import React, { useState } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '@/components/Header';
import { SectionLayout } from '@/components/Layouts';

import bgImage from '../../assets/images/IntroImage.png';
import introText from '../../assets/images/IntroText.png';

export const IntroSection = () => {
  return (
    <>
      <SectionLayout
        bgAttachment='fixed'
        bgSize='cover'
        bgImage={`url(${bgImage.src})`}
        height='100dvh'
        boxShadow=''
      >
        <Header></Header>
        <Flex
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Box
            width='100%'
            padding={{ base: 0, lg: '0 234px' }}
          >
            <Image
              src={introText}
              alt='Upgrading for body and mindset'
            />
          </Box>
        </Flex>
      </SectionLayout>
    </>
  );
};
