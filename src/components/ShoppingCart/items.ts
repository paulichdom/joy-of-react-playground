export type Item = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  inStock: boolean;
};

const items: Item[] = [
  {
    id: 'hk123',
    imageSrc:
      'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
    imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
    title: '“Hello Kitty” Coffee Machine',
    price: '89.99',
    inStock: true,
  },
  {
    id: 'co999',
    imageSrc:
      'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
    imageAlt: 'A black can opener',
    title: 'Safety Can Opener',
    price: '19.95',
    inStock: false,
  },
  {
    id: 'cnl333',
    imageSrc:
      'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
    imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
    title: 'Astro-pup Night Light',
    price: '130.00',
    inStock: true,
  },
  {
    id: 'scb777',
    imageSrc:
      'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
    imageAlt: 'A pink backpack with a unicorn illustration',
    title: 'Magical Unicorn Backpack',
    price: '74.98',
    inStock: true,
  },
];

export default items;
