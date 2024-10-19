import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import Image from 'next/image';

import hamburgerIcon from '../../assets/icons/HamburgerMenu.png';

type NavLink = {
  title: string;
  href: string;
};

interface MenuProps {
  navLinks: NavLink[];
}

export const Menu: FC<MenuProps> = ({ navLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        width='32px'
        height='32px'
        aria-label='Открыть меню'
        variant='ghost'
        onClick={onOpen}
      >
        <Image
          src={hamburgerIcon}
          alt='Previous image'
        />
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement='top'
        isFullHeight={true}
        returnFocusOnClose={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bgColor='neutral.black'
            color='neutral.0'
          >
            Меню
          </DrawerHeader>

          <DrawerBody bgColor='neutral.black'>
            <VStack
              spacing={2}
              align='start'
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  as='a'
                  href={link.href}
                  width='100%'
                  variant='text'
                  onClick={onClose}
                >
                  {link.title}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
