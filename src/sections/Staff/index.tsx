import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { StaffCard } from '@/components/StaffCard';
import { SectionLayout } from '@/components/Layouts';

import staffImage from '../../assets/images/StaffImage.png';

export const StaffSection: FC = () => {
  return (
    <SectionLayout>
      <Flex
        id='staff'
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '48px', lg: '40px' }}
        justifyContent='space-between'
      >
        <StaffCard
          image={staffImage}
          name={'Имя Фамилия'}
          description={'Чемпион чемпионата, 25 лет в спорте, любит кофе без молока'}
        />
        <StaffCard
          image={staffImage}
          name={'Имя Фамилия'}
          description={'Чемпион чемпионата, 25 лет в спорте, любит кофе без молока'}
        />
        <StaffCard
          image={staffImage}
          name={'Имя Фамилия'}
          description={'Чемпион чемпионата, 25 лет в спорте, любит кофе без молока'}
        />
      </Flex>
    </SectionLayout>
  );
};
