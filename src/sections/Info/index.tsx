import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

import { SectionLayout } from '@/components/Layouts';

interface TextContainerProps {
  title: string;
  text: string;
}

const TextContainer: FC<TextContainerProps> = ({ title, text }) => {
  return (
    <Flex
      gap='16px'
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems={{ base: 'start', lg: 'flex-end' }}
      justifyContent={{ base: 'normal', lg: 'space-between' }}
    >
      <Heading
        color={'white'}
        width='100%'
      >
        {title}
      </Heading>
      <Text
        color={'neutral.300'}
        size='lg'
        width='100%'
      >
        {text}
      </Text>
    </Flex>
  );
};

interface LargeTextContainerProps {
  title: string;
  sub: string;
  sup: string;
}

const LargeTextContainer: FC<LargeTextContainerProps> = ({ title, sub, sup }) => (
  <Grid
    gridTemplate='1fr 1fr / min-content 1fr'
    alignItems='center'
    justifyItems='start'
    width='100%'
  >
    <Heading
      color={'white'}
      fontSize='8xl'
      gridColumn='1 / 2'
      gridRow='1 / 3'
    >
      {title}
    </Heading>
    <Heading
      color={'white'}
      fontSize='6xl'
      lineHeight='4xl'
      alignSelf='end'
    >
      {sup}
    </Heading>
    <Heading
      variant='h4'
      color={'white'}
    >
      {sub}
    </Heading>
  </Grid>
);

export const InfoSection = () => (
  <SectionLayout>
    <Flex
      flexDirection='column'
      gap={{ base: '32px', lg: '64px' }}
    >
      <Flex
        gap={{ base: '32px', lg: '64px' }}
        flexDirection='column'
      >
        <TextContainer
          title={'Качественно'}
          text={'Постоянные участники и победители открытых рингов, республиканского турнира по боксу'}
        />
        <TextContainer
          title={'Удобно'}
          text={'Акредитованный зал бокса в центре Минска по доступным ценам'}
        />
      </Flex>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'normal', lg: 'space-between' }}
        gap={{ base: '24px', lg: 0 }}
      >
        <LargeTextContainer
          title={'10'}
          sub={'Лет обучаем'}
          sup={''}
        />
        <LargeTextContainer
          title={'100'}
          sub={'Учеников'}
          sup={'+'}
        />
      </Flex>
    </Flex>
  </SectionLayout>
);
