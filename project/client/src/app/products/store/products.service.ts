import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsState, IProduct } from './modles/products.models';

// import { getProductsState } from './selectors/product.selectors';

import { Observable } from 'rxjs';
import { LoadProducts, AddProduct } from './actions/products.actions';
import { getProducts, getProductsState } from './selectors/product.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  public state$: Observable<ProductsState>;
  public products$: Observable<Array<IProduct>>;

  constructor(private store$: Store<ProductsState>) {
    this.state$ = store$.pipe(getProductsState());
    this.products$ = store$.pipe(getProducts());
  }

  public getProducts() {
    this.store$.dispatch(new LoadProducts);
  }

  public addProduct(product: IProduct) {
    this.store$.dispatch(new AddProduct(product));
  }
}
