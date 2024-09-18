import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@chakra-ui/react';

import { SectionLayout } from '@/components/Layouts';
import { FaqAccordion } from '@/components/FaqAccordion';

import FaqImage from '../../assets/images/FaqImage.png';

export const FaqSection: FC = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)');
  return (
    <SectionLayout>
      <Flex gap='80px'>
        <Flex
          flexDirection='column'
          width='100%'
          gap='24px'
        >
          <Heading color={'neutral.0'}>Частые вопросы</Heading>
          <FaqAccordion
            accordionItems={[
              { title: 'Можно поменять тренера?', content: 'Да, вы можете выбрать подходящего под себя тренера.' },
              {
                title: 'Можно ходить к разным тренерам одновременно?',
                content: 'Да, вы можете выбрать подходящего под себя тренера.',
              },
              {
                title: 'Если не получается придти по расписанию своей группы, можно придти в другую? ',
                content: 'Да, вы можете выбрать подходящего под себя тренера.',
              },
              {
                title: 'Если у меня график 2/2, 3/2, 4/2, можно ходить в разные дни к одному тренеру?',
                content: 'Да, вы можете выбрать подходящего под себя тренера.',
              },
            ]}
          />
        </Flex>
        {isDesktop && (
          <Box
            width='100%'
            paddingTop='12px'
          >
            <AspectRatio ratio={3 / 2}>
              <Image
                src={FaqImage}
                alt='Faq Image'
              />
            </AspectRatio>
          </Box>
        )}
      </Flex>
    </SectionLayout>
  );
};
