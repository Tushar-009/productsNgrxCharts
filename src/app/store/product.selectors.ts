import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProductState = createFeatureSelector<any>('product');

export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);
