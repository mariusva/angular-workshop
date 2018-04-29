import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "./../shared/shared.module";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule, ProductsRoutingModule],
  declarations: [ProductsListComponent, ProductItemComponent],
  exports: [ProductsListComponent],
  providers: [ProductsService]
})
export class ProductsModule {}