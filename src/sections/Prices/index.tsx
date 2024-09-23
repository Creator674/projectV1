import React from 'react';

import { Flex } from '@chakra-ui/react';

import { SectionLayout } from '@/components/Layouts';
import { PriceCard } from '@/components/PriceCard';

export const PricesSection = () => {
  return (
    <SectionLayout>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '16px', lg: '20px' }}
      >
        <PriceCard
          title='3 раза в неделю/месяц'
          description={['1.5ч тренировка', 'Группа 6-10 человек']}
          isFreeTryoutAvailable={true}
          price='120р'
        />
        <PriceCard
          title='2 раза в неделю/месяц'
          description={['1.5ч тренировка', 'Группа 6-10 человек']}
          isFreeTryoutAvailable={true}
          price='90р'
        />
        <PriceCard
          title='Разовая тренировка'
          description={['1.5ч тренировка', 'Группа 6-10 человек']}
          isFreeTryoutAvailable={true}
          price='15р'
        />
        <PriceCard
          title='Индивидуальная'
          description={['1.5ч тренировка', '1 на 1 с тренером']}
          isFreeTryoutAvailable={true}
          price='50р'
        />
      </Flex>
    </SectionLayout>
  );
};
