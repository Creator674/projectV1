import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

export const SignUpForm: FC = () => {
  return (
    <Flex
      flexDirection='column'
      gap='24px'
      width='100%'
    >
      <Heading color='neutral.0'>Записаться</Heading>
      <Flex
        flexDirection='column'
        gap='32px'
      >
        <Flex
          flexDirection='column'
          gap='16px'
        >
          <Input placeholder='Имя' />
          <Input placeholder='Телефон' />
        </Flex>
        <Button>Записаться</Button>
      </Flex>
    </Flex>
  );
};
