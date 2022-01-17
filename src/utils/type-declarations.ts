export interface CategoryTypeProps {
  name: string;
  quantity: number;
}

export interface CategoryItemsProps {
  name: string;
  price: number;
  measurement: string;
  origin: string;
  description: string;
  approx: string;
  images: { small: string; big: Array<string> };
}

export interface CategoryProps {
  id: string;
  name: string;
  quantity: number;
  // price: number;
  image: string;
  types: Array<CategoryTypeProps>;
  items: Array<CategoryItemsProps>;
}
