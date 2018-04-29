import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';

@Injectable()
export class ProductsService {

  constructor(
    @Inject('API_URI') private apuURI: string,
    private http: HttpClient) { }

  getProducts():Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.apuURI}/products`);
  }

  getProduct(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.apuURI}/products/${productId}`);
  }

}
