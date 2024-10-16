import React from 'react';

import styles from './PlanSelection.module.css';
import { Plan } from './data';
import PriceDisplay from './PriceDisplay';

const PlanSelection: React.FC<{ plans: Plan[] }> = ({ plans }) => {
  const id = React.useId();

  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]);

  return (
    <>
      <PriceDisplay id={selectedPlan.id} price={selectedPlan.price} />

      <fieldset className={styles.fieldset}>
        <legend>Select plan:</legend>
        <div className={styles.optionGroup}>
          {plans.map((plan) => {
            const uniquePlanId = `${id}-${plan.id}`;

            return (
              <div className={styles.option} key={plan.id}>
                <input
                  type="radio"
                  name={id}
                  id={uniquePlanId}
                  checked={plan === selectedPlan}
                  onChange={() => setSelectedPlan(plan)}
                />
                <label htmlFor={uniquePlanId}>{plan.label}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
};

export default PlanSelection;
