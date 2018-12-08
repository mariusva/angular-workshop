import { switchMap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../products/products.service';
import { Product } from './../product.model';


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
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productsService.getProduct(+params.get('id')))
      )
    .subscribe(product => this.product = product);
  }

}
