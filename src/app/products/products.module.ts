import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "./../shared/shared.module";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [ProductsListComponent, ProductItemComponent],
  exports: [ProductsListComponent],
  providers: [
    ProductService,
    {
      provide: 'API_URI',
      useValue: `http://localhost:3000`
    }
  ]
})
export class ProductsModule {}