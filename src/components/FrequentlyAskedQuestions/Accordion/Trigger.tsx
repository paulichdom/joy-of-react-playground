import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/themes';
import classNames from 'classnames';

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
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export default AccordionTrigger;
