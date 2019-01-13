import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  @HostBinding('class') className: string = 'col-md-4';
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
