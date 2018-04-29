import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "./../shared/shared.module";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProductsListComponent, ProductItemComponent],
  exports: [ProductsListComponent]
})
export class CarsModule {}