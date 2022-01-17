import { CategoryProps } from '../utils/type-declarations';

export const categories: Array<CategoryProps> = [
  {
    id: '001',
    name: 'Vegetable',
    quantity: 22,
    image: require('../assets/images/vegetable-1.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
  {
    id: '002',
    name: 'Fruits',
    quantity: 82,
    image: require('../assets/images/fruit.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
  {
    id: '003',
    name: 'Bread',
    quantity: 36,
    image: require('../assets/images/bread.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
  {
    id: '004',
    name: 'Sweets',
    quantity: 39,
    image: require('../assets/images/sweets.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
  {
    id: '005',
    name: 'Pasta',
    quantity: 12,
    image: require('../assets/images/pasta.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
  {
    id: '006',
    name: 'Drinks',
    quantity: 11,
    image: require('../assets/images/drinks.png'),
    types: [
      { name: 'Cabbage & lettuce', quantity: 21 },
      { name: 'Cucumber & tomatoes', quantity: 2 },
      { name: 'Onion & garlic', quantity: 16 },
      { name: 'Pepper & curry', quantity: 9 },
      { name: 'Potatoes & carrot', quantity: 8 },
    ],
    items: [
      {
        images: {
          small: require('../assets/images/boston-lettuce-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        name: 'Boston Lettuce',
        price: 1.1,
        measurement: 'piece',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Purple Cauliflower',
        images: {
          small: require('../assets/images/purple-cali-small.png'),
          big: [
            require('../assets/images/purple-c-1.png'),
            require('../assets/images/purple-c-2.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.82,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
      {
        name: 'Savoy Cabbage',
        images: {
          small: require('../assets/images/savoy-cabbage-small.png'),
          big: [
            require('../assets/images/vegetable-big.png'),
            require('../assets/images/boston-lettuce-3.png'),
            require('../assets/images/boston-lettuce-4.png'),
          ],
        },
        price: 1.45,
        measurement: 'kg',
        origin: 'spain',
        description:
          'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
        approx: '150gr',
      },
    ],
  },
];
