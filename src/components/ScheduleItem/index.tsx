import { Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Schedule = {
  day: string;
  times: string[];
};

interface ScheduleItemProps {
  title: string;
  schedule: Schedule[];
}

export const ScheduleItem: FC<ScheduleItemProps> = ({ title, schedule }) => (
  <Flex
    flexDirection='column'
    gap='16px'
    width='100%'
    justifyContent={'space-between'}
  >
    <Heading color={'neutral.0'}>{title}</Heading>
    <Flex
      background={'neutral.800'}
      padding={{ base: '16px 24px 24px', lg: '24px 32px 32px' }}
      minWidth={0}
      width='100%'
    >
      {schedule.map(({ day, times }, i) => (
        <Flex
          w='100%'
          flexDirection='column'
          gap='12px'
          key={i}
        >
          <Heading
            variant={'h3'}
            color={'primary.300'}
          >
            {day}
          </Heading>
          <Flex
            flexDirection='column'
            gap='8px'
          >
            {times.map((time, i) => (
              <Heading
                variant='h4'
                color={'neutral.300'}
                fontWeight={400}
                key={i}
              >
                {time}
              </Heading>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Flex>
);
