import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { TagFilterComponent } from './tag-filter/tag-filter.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CanActivateProducts } from './guards/can-activate-products.guard';

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  declarations: [ProductsListComponent, ProductItemComponent, TagFilterComponent],
  providers: [CanActivateProducts]
})
export class ProductsModule {}
