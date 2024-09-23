import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
interface PriceCardProps {
  title: string;
  description: string[];
  isFreeTryoutAvailable?: boolean;
  price: string;
}

export const PriceCard: FC<PriceCardProps> = ({ title, description, isFreeTryoutAvailable, price }) => {
  const [firstTitleWord, ...titleRest] = title.split(' ');
  return (
    <Flex
      flexDirection='column'
      gap='24px'
      _hover={{ cursor: 'pointer' }}
      role='group'
      justifyContent='space-between'
      width='100%'
    >
      <Flex
        height='100%'
        flexDirection='column'
        border='1px'
        borderColor='neutral.0'
        borderRadius='5px'
        padding={{ base: '16px 24px 24px', lg: '24px 32px 32px' }}
        gap='32px'
        justifyContent='space-between'
        _groupHover={{ borderColor: 'primary.300', boxShadow: '0 8px 8px #FF004D2E' }}
      >
        <Flex
          flexDirection='column'
          gap='16px'
        >
          <Heading
            variant='h2'
            color='neutral.0'
            fontWeight={400}
            sx={{ textWrap: 'balance' }}
          >
            <Heading
              variant='h2'
              as='span'
              color='primary.300'
              fontWeight={400}
            >
              {firstTitleWord}
            </Heading>{' '}
            {titleRest.join(' ')}
          </Heading>
          <Flex
            flexDirection='column'
            gap='4px'
            alignItems='flex-start'
          >
            {description.map((line, i) => (
              <Text
                key={i}
                color='neutral.300'
              >
                {line}
              </Text>
            ))}
            {isFreeTryoutAvailable && (
              <Text
                color='neutral.300'
                sx={{ textWrap: 'balance' }}
              >
                Пробная тренировка{' '}
                <Text
                  as='span'
                  color='primary.300'
                >
                  бесплатно
                </Text>
              </Text>
            )}
          </Flex>
        </Flex>
        <Heading
          variant='h2'
          color='neutral.0'
          fontWeight={400}
        >
          {price}
        </Heading>
      </Flex>
      <Button
        as='a'
        href='#footer'
        scrollMarginTop='-200px'
        flexBasis='44px'
        opacity='0'
        _groupHover={{ opacity: '1' }}
      >
        Записаться
      </Button>
    </Flex>
  );
};
