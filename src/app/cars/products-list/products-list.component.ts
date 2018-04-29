import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [];
  selectedTag: string = "";

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getProducts()
      .subscribe(data => this.products = data)
  }

  filterTagChanged(selectedTag: string) {
    this.selectedTag = selectedTag;
  }

}
