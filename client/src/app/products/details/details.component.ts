import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Product } from '../../products/product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from "rxjs";
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsService.getProduct(+params.get('id')))
      )
      .subscribe((product: Product) => this.product = product);
  }

}
