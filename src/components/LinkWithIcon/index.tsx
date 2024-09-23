import { Box, Flex, Link } from '@chakra-ui/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

interface LinkWithIconProps {
  image: string | StaticImport;
  href: string;
  children: ReactNode;
}
export const LinkWithIcon: FC<LinkWithIconProps> = ({ image, href, children }) => {
  return (
    <Flex
      gap='6px'
      alignItems='center'
    >
      <Box width='32px'>
        <Image
          src={image}
          alt='Social link'
        />
      </Box>
      <Link href={href}>{children}</Link>
    </Flex>
  );
};
