import { Box, Flex, Heading } from '@chakra-ui/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { FC } from 'react';

interface BoxTypeCardProps {
  title: string;
  image: string | StaticImport;
}

export const BoxTypeCard: FC<BoxTypeCardProps> = ({ title, image }) => {
  return (
    <Flex
      flexDirection='column'
      gap='16px'
      width={{ base: '70%', lg: '45%' }}
    >
      <Heading
        variant='h3'
        color='primary.300'
      >
        {title}
      </Heading>
      <Box
        borderRadius='5px'
        overflow='hidden'
      >
        <Image
          src={image}
          alt={'Box type'}
        />
      </Box>
    </Flex>
  );
};
