import * as React from 'react';
import PlanSelection from './PlanSelection';
import { PLANS } from './data';

const PlanSelectionContainer: React.FC = () => {
  return (
    <PlanSelection
      plans={PLANS}
    />
  );
}

export default PlanSelectionContainer;
