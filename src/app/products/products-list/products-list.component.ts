import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductService } from '../product.service';
import { Product } from './../product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsLoad } from '../product.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedTag: string = "";

  constructor(
    private productService: ProductService,
    private store: Store<{products: Product[]}>
  ) {
    store.dispatch(new ProductsLoad());
  }

  ngOnInit() {
    this.products$ = this.store.pipe(
      select('products'),
      map((data: {products: Product[]}) => {
        return data.products;
      })
    );
  }

  filterTagChanged(selectedTag: string) {
    this.selectedTag = selectedTag;
  }

}
