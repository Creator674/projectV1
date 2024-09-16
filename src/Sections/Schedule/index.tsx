import { Flex } from '@chakra-ui/react';
import React from 'react';

import { ScheduleItem } from '@/components';
import { SectionLayout } from '@/components/Layouts';

export const ScheduleSection = () => {
  return (
    <SectionLayout>
      <Flex
        flexDirection='column'
        gap='32px'
      >
        <ScheduleItem
          title='Взрослая группа No1'
          schedule={[
            { day: 'ПН, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] },
            { day: 'СБ', times: ['12:00 - 12:30', '13:00 - 13:30'] },
          ]}
        />
        <ScheduleItem
          title='Взрослая группа No2'
          schedule={[
            { day: 'СБ, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] },
          ]}
        />
        <ScheduleItem
          title='Женская группа'
          schedule={[
            { day: 'СБ, СР, ПТ', times: ['10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30', '10:00 - 11:30'] },
          ]}
        />
      </Flex>
    </SectionLayout>
  );
};
