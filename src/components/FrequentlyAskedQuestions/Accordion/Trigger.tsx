import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDown } from 'react-feather';

type AccordionTriggerProps = React.ComponentProps<'button'> & {
  children: React.ReactNode;
  className: string;
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export default AccordionTrigger;
