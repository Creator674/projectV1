import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface SectionLayoutProps extends BoxProps {
  children: ReactNode;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children, ...props }) => {
  return (
    <Box
      bgColor={'neutral.black'}
      padding={{ base: '96px 16px', lg: '200px 60px' }}
      {...props}
    >
      {children}
    </Box>
  );
};
