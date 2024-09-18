import { Box } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children }) => {
  return (
    <Box
      bgColor={'black'}
      padding={{ base: '96px 16px', lg: '200px 60px' }}
    >
      {children}
    </Box>
  );
};
