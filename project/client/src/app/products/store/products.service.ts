import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsState, IProduct } from './modles/products.models';

// import { getProductsState } from './selectors/product.selectors';

import { Observable } from 'rxjs';
import { LoadProducts, AddProduct, LoadProduct } from './actions/products.actions';
import { getProducts, getProductsState, getProduct } from './selectors/product.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  public state$: Observable<ProductsState>;
  public products$: Observable<Array<IProduct>>;
  public product$: Observable<IProduct>;

  constructor(private store$: Store<ProductsState>) {
    this.state$ = store$.pipe(getProductsState());
    this.products$ = store$.pipe(getProducts());
    this.product$ = store$.pipe(getProduct());
  }

  public getProducts() {
    this.store$.dispatch(new LoadProducts);
  }

  public getProduct(id) {
    this.store$.dispatch(new LoadProduct(id));
  }

  public addProduct(product: IProduct) {
    this.store$.dispatch(new AddProduct(product));
  }
}
