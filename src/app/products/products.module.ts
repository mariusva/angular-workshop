import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from "./../shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducer';
import { ProductEffects } from './product.effects';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './product.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ],
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