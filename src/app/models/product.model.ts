export interface Product {
  id: number;
  name: string;
  price: number;
  status: 'In Stock' | 'Out of Stock' | 'Pending';
}
