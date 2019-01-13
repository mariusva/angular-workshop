import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [];
  selectedTag: string = "";
  errorMessage: string = "";

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(
        data => this.products = data,
        err => this.errorMessage = err)
  }

  filterTagChanged(selectedTag: string) {
    this.selectedTag = selectedTag;
  }

}
