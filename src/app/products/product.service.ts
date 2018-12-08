import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {

    constructor(
      private http: HttpClient,
      @Inject('API_URI') private apiURI
    ) {}

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.apiURI}/products`);
    }
}
