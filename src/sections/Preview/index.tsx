import React from 'react';
import { Button, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import { SectionLayout } from '@/components/Layouts';
import { BoxTypeCard } from '@/components/BoxTypeCard';

import mensBox from '../../assets/images/MansBox.png';
import womensBox from '../../assets/images/WomansBox.png';

const PreviewTitle = 'Тренировки по боксу у дипломированных специалистов';

const BoxTypes = [
  { title: 'Мужской бокс', image: mensBox },
  { title: 'Женский бокс', image: womensBox },
  { title: 'Детский бокс', image: mensBox },
  { title: 'Фитнес бокс', image: womensBox },
  { title: 'Индивидуальные тренировки', image: mensBox },
];

export const PreviewSection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <SectionLayout>
      <Flex
        flexDirection='column'
        gap='32px'
      >
        <Flex
          flexDirection='column'
          gap={{ base: '80px', lg: '210px' }}
        >
          <Flex
            flexDirection='column'
            gap='32px'
            position={{ base: 'static', lg: 'sticky' }}
            top='32px'
            width={{ base: '100%', lg: '50%' }}
            alignItems='flex-start'
          >
            <Heading
              color={'white'}
              width='100%'
            >
              {PreviewTitle}
            </Heading>
            {!isMobile && (
              <Button
                as='a'
                href='#footer'
                width='180px'
              >
                Записаться
              </Button>
            )}
          </Flex>
          <Flex
            flexDirection='column'
            alignItems='flex-end'
            gap='16px'
          >
            {BoxTypes.map(({ title, image }, i) => (
              <BoxTypeCard
                key={i}
                title={title}
                image={image}
              />
            ))}
          </Flex>
        </Flex>

        {isMobile && (
          <Button
            as='a'
            href='#footer'
          >
            Записаться
          </Button>
        )}
      </Flex>
    </SectionLayout>
  );
};
