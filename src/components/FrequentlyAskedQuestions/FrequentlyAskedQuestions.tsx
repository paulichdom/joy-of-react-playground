import * as React from 'react';
import { DATA } from './data';
import Accordion from './Accordion/Accordion';

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <Accordion data={DATA}/>
  );
};

export default FrequentlyAskedQuestions;
