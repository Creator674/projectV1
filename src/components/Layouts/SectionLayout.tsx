import { Box } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ children }) => {
  return (
    <Box
      bgColor={'black'}
      p={'96px 16px'}
    >
      {children}
    </Box>
  );
};
