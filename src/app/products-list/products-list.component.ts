import { Component, OnInit } from '@angular/core';

import { products } from '../product-list';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  protected products = [];

  ngOnInit() {
    this.products = products;
  }

}
