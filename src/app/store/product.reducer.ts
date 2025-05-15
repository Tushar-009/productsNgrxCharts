// src/app/store/product.reducer.ts (adjust path if needed)
import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model'; // adjust path
import * as ProductActions from './product.actions';

export interface ProductState {
  products: Product[];
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductActions.updateProduct, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p),
  })),
  on(ProductActions.deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id),
  }))
);
