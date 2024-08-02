import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SectionWithHeadingProps = {
  title: string;
  headingLevel: HeadingLevel;
  children: ReactNode;
};

const SectionWithHeading: React.FC<SectionWithHeadingProps> = ({
  title,
  headingLevel,
  children,
}) => {
  return (
    <section>
      <Heading as={headingLevel}>{title}</Heading>
      {children}
    </section>
  );
};

export default SectionWithHeading;

const Heading = styled.div``;
