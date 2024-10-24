import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import LogoImage from '../../assets/images/UpgradeLogo.png';

export const Logo = () => {
  return (
    <Box>
      <Image
        src={LogoImage}
        alt='Upgrade Boxing Logo'
      />
    </Box>
  );
};
