import { Action } from '@ngrx/store';
import { IProduct } from '../modles/products.models';

export const LOAD_PRODUCTS = '[Producs] Load';
export const LOAD_PRODUCTS_COMPLETED_WITH_SUCCESS = '[Products] Load completed with success';
export const LOAD_PRODUCTS_COMPLETED_WITH_ERROR = '[Products] Load completed with error';

export const ADD_PRODUCT = '[Products] Add product';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsCompletedWithSuccess implements Action {
  readonly type = LOAD_PRODUCTS_COMPLETED_WITH_SUCCESS;

  constructor(public payload: Array<IProduct>) {}
}

export class LoadProductsCompletedWithError implements Action {
  readonly type = LOAD_PRODUCTS_COMPLETED_WITH_ERROR;

  constructor(public payload: any) {}
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: IProduct) {}
}

export type Actions =
  | LoadProducts
  | LoadProductsCompletedWithSuccess
  | LoadProductsCompletedWithError
  | AddProduct;
