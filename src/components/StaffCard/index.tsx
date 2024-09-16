import { AspectRatio, Flex, Heading, Text } from '@chakra-ui/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react';

interface StaffCardProps {
  image: string | StaticImport;
  name: string;
  description: string;
}

export const StaffCard: FC<StaffCardProps> = ({ image, name, description }) => (
  <Flex
    flexDirection='column'
    gap='12px'
  >
    <AspectRatio
      ratio={1}
      borderRadius='5px'
      overflow='hidden'
    >
      <Image
        src={image}
        alt='employee'
      />
    </AspectRatio>
    <Flex
      flexDirection='column'
      gap='8px'
    >
      <Heading
        color='primary.300'
        fontWeight='400'
      >
        {name}
      </Heading>
      <Text color={'neutral.0'}>{description}</Text>
    </Flex>
  </Flex>
);
