import React from 'react';

import { SectionLayout } from '@/components/Layouts';
import { SignUpForm } from '@/components/SignUpForm';
import { Logo } from '@/components/Logo';
import { FooterLinks } from '@/components/FooterLinks';
import { Flex } from '@chakra-ui/react';
import { YandexMap } from '@/components/Map';

export const FooterSection = () => {
  return (
    <SectionLayout>
      <Flex
        id='footer'
        flexDirection='column'
        alignItems='center'
        gap={{ base: '16px', lg: '64px' }}
        width='100%'
      >
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: '64px', lg: '80px' }}
          width='100%'
        >
          <SignUpForm />
          <FooterLinks />
        </Flex>
        <YandexMap
          center={[53.915456, 27.571425]}
          placemark={[53.915456, 27.571425]}
        />
        <Logo />
      </Flex>
    </SectionLayout>
  );
};
