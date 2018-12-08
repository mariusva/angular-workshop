import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constuctor(
    private http: HttpClient,
    @Inject() private API_URI
  ) {
    debugger;
  }

    getProducts(): Observable<Product[]> {
      return this.http.get();
    }
}
