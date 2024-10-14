import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionData } from '../data';
import AccordionTrigger from './Trigger';
import AccordionContent from './Content';
import styles from '../FrequentlyAskedQuestions.module.css';

const Accordion: React.FC<{ data: AccordionData[] }> = ({ data }) => {
  return (
    <RadixAccordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue={data[0].id}
      collapsible
    >
      {data.map(({ id, question, answer }) => (
        <RadixAccordion.Item key={id} className={styles.item} value={id}>
          <AccordionTrigger className={styles.trigger}>
            {question}
          </AccordionTrigger>
          <AccordionContent className={styles.content}>
            {answer}
          </AccordionContent>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
