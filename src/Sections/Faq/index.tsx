import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { FC } from 'react';

import { SectionLayout } from '@/components/Layouts';

interface AccordionItem {
  title: string;
  content: string;
}

interface FaqSectionProps {
  title: string;
  accordionItems: AccordionItem[];
}

export const FaqSection: FC<FaqSectionProps> = ({ title, accordionItems }) => {
  return (
    <SectionLayout>
      <Flex
        flexDirection='column'
        gap='24px'
      >
        <Heading color={'neutral.0'}>{title}</Heading>
        <Accordion allowMultiple>
          {accordionItems.map((item, i) => (
            <AccordionItem
              key={i}
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
                  {item.title}
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                color='neutral.0'
                padding='8px 0 0'
              >
                <Text color='neutral.300'>{item.content}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </SectionLayout>
  );
};
