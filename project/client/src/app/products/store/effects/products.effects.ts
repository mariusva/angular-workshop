import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as actions from '../actions/products.actions';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ProductsService } from '../../products.service';

@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.LOAD_PRODUCTS),
      switchMap(() => {
        return this.productsService.getProducts()
          .pipe(
            map(products => new actions.LoadProductsCompletedWithSuccess(products)),
            catchError(err => of(new actions.LoadProductsCompletedWithError(err)))
          );
      })
    );

  @Effect()
  loadProduct$: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.LOAD_PRODUCT),
      switchMap(({ payload }) => {
        return this.productsService.getProduct(payload)
          .pipe(
            map(product => new actions.LoadProductCompletedWithSuccess(product)),
            catchError(err => of(new actions.LoadProductCompletedWithError(err)))
          );
      })
    );

  constructor(private actions$: Actions, private productsService: ProductsService) { }
}