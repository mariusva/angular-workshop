import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Product } from '../../products/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from "rxjs/operators";
import { ProductsStoreService } from '../store/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product;

  constructor(
    public productsService: ProductsStoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params.id);
  }
}
