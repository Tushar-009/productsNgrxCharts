import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

// Load Products (optional)
export const loadProducts = createAction('[Product] Load Products');

// Add Product
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

// Update Product
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);
