/* eslint-disable-next-line */

interface productListItem {
  id: string;
  title: string;
  image: string;
  price: number;
}

export const PRODUCT_LIST_MOCKS: Array<productListItem> = [
  {
    id: '1',
    title: 'Maças',
    image: '/assets/apple.jpg',
    price: 1.99,
  },
  {
    id: '2',
    title: 'Laranjas',
    image: '/assets/orange.jpg',
    price: 2.5,
  },
  {
    id: '3',
    title: 'Bananas',
    image: '/assets/bananas.jpg',
    price: 0.7,
  },
];

export default PRODUCT_LIST_MOCKS;
