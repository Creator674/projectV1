import { FC } from 'react';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Heading, Text } from '@chakra-ui/react';

export interface FaqAccordionItemProps {
  title: string;
  content: string;
}

export const FaqAccordionItem: FC<FaqAccordionItemProps> = ({ title, content }) => {
  return (
    <AccordionItem
      padding='12px 0'
      borderColor='neutral.400'
    >
      <AccordionButton
        color='neutral.0'
        padding='0'
        paddingRight='6px'
      >
        <Heading
          flex='1'
          textAlign='left'
          variant='h4'
          color='neutral.0'
        >
          {title}
        </Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        color='neutral.0'
        padding='8px 0 0'
      >
        <Text color='neutral.300'>{content}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
