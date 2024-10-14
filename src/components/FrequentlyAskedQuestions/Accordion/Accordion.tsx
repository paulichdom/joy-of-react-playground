import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionData } from '../data';
import AccordionTrigger from './Trigger';
import AccordionContent from './Content';

const Accordion: React.FC<{ data: AccordionData[] }> = ({ data }) => {
  return (
    <RadixAccordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue={data[0].id}
      collapsible
    >
      {data.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          className="AccordionItem"
          value={item.id}
        >
          <AccordionTrigger className="">{item.question}</AccordionTrigger>
          <AccordionContent className="">{item.answer}</AccordionContent>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
