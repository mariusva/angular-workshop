import { Action } from '@ngrx/store';
import { Product } from './product.model';

export enum ProductActionTypes {
  LoadProducts = '[Products] Load',
  LoadedProducts = '[Products] Loaded'
}

export class ProductAction implements Action {
  readonly type: string;
  payload?: any;
}

export class ProductsLoad implements ProductAction {
  readonly type = ProductActionTypes.LoadProducts;
}

export class ProductsLoaded implements ProductAction {
  readonly type = ProductActionTypes.LoadedProducts;

  constructor(public payload: Product[]) {}
}

