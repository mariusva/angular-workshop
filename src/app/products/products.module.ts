import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { TagFilterComponent } from './tag-filter/tag-filter.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductsListComponent, ProductItemComponent, TagFilterComponent],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
