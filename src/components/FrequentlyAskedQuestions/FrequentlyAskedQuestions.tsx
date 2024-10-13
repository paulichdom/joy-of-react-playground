import * as React from 'react';
import { DATA } from './data';

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <ul>
      {DATA.map((item) => (
        <li>{item.question}</li>
      ))}
    </ul>
    
  );
};

export default FrequentlyAskedQuestions;
