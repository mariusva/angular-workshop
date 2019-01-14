import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

import { take, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsEditResolver implements Resolve<Product> {

  constructor(private productsService: ProductsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    let id = +route.paramMap.get('id');

    return this.productsService.getProduct(id)
      .pipe(
        take(1),
        map(product => {
          if (product) {
            return product;
          }
          this.router.navigate(['dashboard', {message: "Prod not found"}]);
          return null;
        }),
        catchError(err => {
          this.router.navigate(['dashboard', {message: "Prod not found"}]);
          return of(null);
        })
      );
  }
}
