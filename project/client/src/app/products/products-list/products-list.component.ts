import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import { ProductsStoreService } from '../store/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  selectedTag: string = "";
  errorMessage: string = "";

  constructor(public productsSerivce: ProductsStoreService) { }

  ngOnInit() {
    this.productsSerivce.getProducts();
  }

  filterTagChanged(selectedTag: string) {
    this.selectedTag = selectedTag;
  }

  public addProductClickHandler() {
    this.productsSerivce.addProduct(
      {
        'id': 1400,
        'title': "Product title",
        'price': 150,
        'imageSrc': "https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&h=250&w=350",
        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        'likesNo': 32,
        'liked': true,
        'commentsNo': 12,
        'category': "tech"
      }
    );
  }
}
