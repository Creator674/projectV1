import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { Menu } from '../Menu';

const navLinks = [
  { title: 'Тренера', href: '#staff' },
  { title: 'Цены', href: '#prices' },
  { title: 'Расписание', href: '#schedule' },
  { title: 'Контакты', href: '#footer' },
  { title: 'Частые вопросы', href: '#faq' },
];

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      position='absolute'
      top={0}
      left={0}
      width='100%'
      minWidth='360px'
      padding={{ base: '15px 16px', lg: '22px 40px' }}
      justifyContent='space-between'
      alignItems='center'
    >
      <Box
        maxWidth='228px'
        width='50%'
      >
        <Image
          src={HeaderLogo}
          alt='Header logo'
        />
      </Box>
      {!isMobile ? (
        <Flex
          gap='24px'
          alignItems='center'
        >
          <Flex>
            {navLinks.map(({ title, href }, i) => (
              <Button
                as='a'
                href={href}
                variant='text'
                key={i}
              >
                {title}
              </Button>
            ))}
          </Flex>
          <Button
            variant='submit'
            as='a'
            href='#footer'
            minWidth='fit-content'
            padding='9px 24px'
          >
            Записаться
          </Button>
        </Flex>
      ) : (
        <Menu navLinks={navLinks} />
      )}
    </Flex>
  );
};
