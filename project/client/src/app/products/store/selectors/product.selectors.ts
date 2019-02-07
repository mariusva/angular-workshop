import { map, distinctUntilChanged, filter } from 'rxjs/operators';
import { ProductsState } from '../modles/products.models';

export function getProductsState() {
  return state$ => state$
    .pipe(
      map((state: any) => state.products_state),
      distinctUntilChanged()
    );
}

export function getProducts() {
  return state$ => state$
    .pipe(
      getProductsState(),
      map((state: ProductsState) => state.products),
      distinctUntilChanged()
    );
}

export function getProduct() {
  return state$ => state$
    .pipe(
      getProductsState(),
      map((state: ProductsState) => state.selectedProduct),
      filter(product => !!product),
      distinctUntilChanged()
    );
}
