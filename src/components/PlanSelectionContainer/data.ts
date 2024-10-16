export interface Plan {
  label: string;
  id: string;
  price: number;
}

export const PLANS: Plan[] = [
  {
    label: 'Free',
    id: 'free',
    price: 0,
  },
  {
    label: 'Gold',
    id: 'gold',
    price: 100,
  },
  {
    label: 'Platinum',
    id: 'platinum',
    price: 250,
  },
  {
    label: 'Expert (Individual)',
    id: 'expert',
    price: 250,
  },
  {
    label: 'Enterprise',
    id: 'enterprise',
    price: 999,
  },
];
