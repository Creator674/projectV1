import React from 'react';
import { Button, Flex, useMediaQuery } from '@chakra-ui/react';

import { SectionLayout } from '@/components/Layouts';
import { PriceCard } from '@/components/PriceCard';

const plans = [
  {
    title: '3 раза в неделю/месяц',
    description: ['1.5ч тренировка', 'Группа 6-10 человек'],
    isFreeTryoutAvailable: true,
    price: '120р',
  },
  {
    title: '2 раза в неделю/месяц',
    description: ['1.5ч тренировка', 'Группа 6-10 человек'],
    isFreeTryoutAvailable: true,
    price: '90р',
  },
  {
    title: 'Разовая тренировка',
    description: ['1.5ч тренировка', 'Группа 6-10 человек'],
    isFreeTryoutAvailable: true,
    price: '15р',
  },
  {
    title: 'Индивидуальная',
    description: ['1.5ч тренировка', 'Группа 6-10 человек'],
    isFreeTryoutAvailable: false,
    price: '50р',
  },
];

export const PricesSection = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)');

  return (
    <SectionLayout>
      <Flex
        id='prices'
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '16px', lg: '20px' }}
      >
        {plans.map(({ title, description, isFreeTryoutAvailable, price }, i) => (
          <PriceCard
            key={i}
            title={title}
            description={description}
            price={price}
            isFreeTryoutAvailable={isFreeTryoutAvailable}
          />
        ))}
        {!isDesktop && (
          <Button
            as='a'
            href='#footer'
            variant='submit'
          >
            Записаться
          </Button>
        )}
      </Flex>
    </SectionLayout>
  );
};
