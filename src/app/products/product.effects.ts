import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProductService } from './product.service';
import { ProductActionTypes, ProductsLoaded } from './product.actions';
import { ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadProducts),
    switchMap(() => {
      return this.productService.getProducts()
        .pipe(
          map(data => new ProductsLoaded(data))
        );
    }

    )
  )
}
