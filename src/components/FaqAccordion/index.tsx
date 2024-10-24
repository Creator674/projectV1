import { Accordion } from '@chakra-ui/react';
import React, { FC } from 'react';

import { FaqAccordionItem, FaqAccordionItemProps } from './AccordionItem';

interface FaqAccordionProps {
  accordionItems: FaqAccordionItemProps[];
}

export const FaqAccordion: FC<FaqAccordionProps> = ({ accordionItems }) => {
  return (
    <Accordion allowMultiple>
      {accordionItems.map((item, i) => (
        <FaqAccordionItem
          key={i}
          title={item.title}
          content={item.content}
        />
      ))}
    </Accordion>
  );
};
