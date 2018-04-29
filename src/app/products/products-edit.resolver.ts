import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsEditResolver implements Resolve<Product> {

  constructor(private productsService: ProductsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    
    let id = +route.paramMap.get('id');

    return this.productsService.getProduct(id)
      .take(1)
      .map(product => {
        if(product) return product;
        this.router.navigate(['dashboard', {message: "Prod not found"}]);
        return null;
      })
      .catch(err => {
        this.router.navigate(['dashboard', {message: "Prod not found"}]);
        return Observable.of(null);
      })
  }
}
