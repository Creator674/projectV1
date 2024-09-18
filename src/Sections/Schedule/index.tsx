import { Flex } from '@chakra-ui/react';
import React from 'react';

import { ScheduleItem } from '@/components';
import { SectionLayout } from '@/components/Layouts';

const ScheduleItems = [
  {
    title: 'Взрослая группа No1',
    schedule: [
      { day: 'ПН, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] },
      { day: 'СБ', times: ['12:00 - 12:30', '13:00 - 13:30'] },
    ],
  },
  {
    title: 'Взрослая группа No2',
    schedule: [{ day: 'СБ, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] }],
  },
  {
    title: 'Женская группа',
    schedule: [{ day: 'СБ, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] }],
  },
];

export const ScheduleSection = () => (
  <SectionLayout>
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: '32px', lg: '20px' }}
    >
      {ScheduleItems.map(({ title, schedule }, i) => (
        <ScheduleItem
          key={i}
          title={title}
          schedule={schedule}
        />
      ))}
    </Flex>
  </SectionLayout>
);
