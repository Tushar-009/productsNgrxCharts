import { signal, computed } from '@angular/core'; 
import { Product } from '../models/product.model';

const _products = signal<Product[]>([]);

export const productStore = {
  products: _products,
  add: (product: Product) => _products.update(p => [...p, product]),
  remove: (id: number) => _products.update(p => p.filter(prod => prod.id !== id)),
  update: (product: Product) =>
    _products.update(p =>
      p.map(prod => (prod.id === product.id ? { ...prod, ...product } : prod))
    ),
  clear: () => _products.set([]),
};

export const selectProducts = computed(() => _products());
export const selectStatusDistribution = computed(() => {
  const products = _products();
  return [
    products.filter(p => p.status === 'In Stock').length,
    products.filter(p => p.status === 'Out of Stock').length,
    products.filter(p => p.status === 'Pending').length,
  ];
});
export const selectTrendPrices = computed(() => {
  const products = _products();
  return {
    labels: products.map(p => p.name),
    data: products.map(p => p.price),
  };
});
