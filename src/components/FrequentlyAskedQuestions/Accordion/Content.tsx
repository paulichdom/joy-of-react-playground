import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import classNames from 'classnames';

type AccordionContentProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  className: string;
};

const AccordionContent: React.FC<AccordionContentProps> = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </RadixAccordion.Content>
  )
);

export default AccordionContent;
